<template>
  <div class="goods-comment">
    <div class="head" v-if="commentInfo">
      <div class="data">
        <p>
          <span>{{ commentInfo.salesCount }}</span
          ><span>人购买</span>
        </p>
        <p>
          <span>{{ commentInfo.praisePercent }}</span
          ><span>好评率</span>
        </p>
      </div>
      <div class="tags">
        <div class="dt">大家都在说：</div>
        <div class="dd">
          <a
            href="javascript:"
            v-for="tag in commentInfo.tags"
            :key="tag.title"
            :class="{ active: currentTagTitle === tag.title }"
            @click="
              currentTagTitle = tag.title;
              updateParams({ tag: tag.title });
            "
            >{{ tag.title }}{{ tag.tagCount }}</a
          >
        </div>
      </div>
    </div>
    <div class="sort">
      <span>排序：</span>
      <a
        href="javascript:"
        :class="{ active: params.sortField === '' }"
        @click="updateParams({ sortField: '' })"
        >默认</a
      >
      <a
        href="javascript:"
        @click="updateParams({ sortField: 'createTime' })"
        :class="{ active: params.sortField === 'createTime' }"
        >最新</a
      >
      <a
        href="javascript:"
        @click="updateParams({ sortField: 'praiseCount' })"
        :class="{ active: params.sortField === 'praiseCount' }"
        >最热</a
      >
    </div>
    <div class="list" v-if="commentList">
      <div class="item" v-for="item in commentList.items" :key="item.id">
        <div class="user">
          <img :src="item.member.avatar" alt="" />
          <span>{{ formatNickname(item.member.nickname) }}</span>
        </div>
        <div class="body">
          <div class="score">
            <i
              class="iconfont icon-wjx01"
              v-for="score in item.score"
              :key="'s' + score"
            ></i>
            <i
              class="iconfont icon-wjx02"
              v-for="score in 5 - item.score"
              :key="'k' + score"
            ></i>
            <span class="attr">{{ formatAttrs(item.orderInfo.specs) }}</span>
          </div>
          <div class="text">
            {{ item.content }}
          </div>
          <GoodsCommentImage :pictures="item.pictures" />
          <div class="time">
            <span>{{ item.createTime }}</span>
            <span class="zan"
              ><i class="iconfont icon-dianzan"></i>{{ item.praiseCount }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <XtxPagination
      v-model:page="params.page"
      :pageSize="params.pageSize"
      :count="counts"
    />
  </div>
</template>
<script>
import { getCommentInfo, getCommentList } from "@/api/good";
import { ref, watch } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import GoodsCommentImage from "@/views/goods/components/GoodsCommentImage";
import XtxPagination from "@/components/library/XtxPagination";
export default {
  name: "GoodsComment",
  components: { XtxPagination, GoodsCommentImage },
  setup() {
    // 获取评价头部数据
    const { commentInfo } = useCommentInfo();
    const currentTagTitle = ref("全部评价");
    const {
      commentList,
      formatNickname,
      formatAttrs,
      updateParams,
      params,
      counts,
    } = useCommentList();
    return {
      commentInfo,
      currentTagTitle,
      commentList,
      formatNickname,
      formatAttrs,
      updateParams,
      params,
      counts,
    };
  },
};
// 获取评价头部数据
function useCommentInfo() {
  // 用于存储评价头部信息
  const commentInfo = ref();
  // 获取路由信息对象
  const route = useRoute();
  // 用于获取评价头部数据的方法
  const getData = (id) => {
    // 向服务器端发送请求获取评价头部数据
    getCommentInfo(id).then((data) => {
      // 每个商品的评论头部信息中都会包含 '全部评价' 和 '有图'
      // 但是接口数据中不包含, 所以需要手动添加
      data.result.tags.unshift({
        title: "有图",
        tagCount: data.result.hasPictureCount,
      });
      data.result.tags.unshift({
        title: "全部评价",
        tagCount: data.result.evaluateCount,
      });
      // 存储评价头部数据
      commentInfo.value = data.result;
    });
  };
  // 发送请求
  getData(route.params.id);
  // 在商品切换时重新获取评价数据
  onBeforeRouteUpdate((to) => getData(to.params.id));
  return {
    commentInfo,
  };
}
// 获取评论列表数据
function useCommentList() {
  // 用于存储评价列表信息
  const commentList = ref();
  // 获取路由信息对象
  const route = useRoute();
  const params = ref({
    id: route.params.id,
    page: 1,
    pageSize: 10,
    hasPicture: false,
    // 评价标记
    tag: "",
    // 排序字段
    sortField: "",
  });
  // 更新params
  const updateParams = (target) => {
    // console.log(target);
    if (target.tag) {
      params.value = {
        ...params.value,
        hasPicture: target.tag === "有图",
        tag:
          target.tag === "全部评价" || target.tag === "有图" ? "" : target.tag,
      };
    } else {
      params.value = {
        ...params.value,
        ...target,
      };
    }
  };
  const counts = ref();
  const getData = () => {
    getCommentList(params.value).then((data) => {
      counts.value = data.result.counts;
      commentList.value = data.result;
    });
  };
  // 初始获取评论列表数据
  getData();
  // onBeforeRouteUpdate((to) => getData(to.params.id));
  // 监听请求参数的变化
  watch(
    () => params.value,
    () => {
      // 重新发送请求获取评价列表数据
      getData();
    },

    {
      // 初始调用
      immediate: true,
      // 深度监听
      deep: true,
    }
  );
  // 格式化昵称
  const formatNickname = (nickname) => {
    return nickname.substr(0, 1) + "***" + nickname.substr(-1);
  };
  // 格式化尺码
  const formatAttrs = (attrs) => {
    return attrs.map((attr) => `${attr.name}: ${attr.nameValue}`).join(" ");
  };
  return {
    commentList,
    formatNickname,
    formatAttrs,
    updateParams,
    params,
    counts,
  };
}
</script>
<style scoped lang="less">
.goods-comment {
  .head {
    display: flex;
    padding: 30px 0;
    .data {
      width: 340px;
      display: flex;
      padding: 20px;
      p {
        flex: 1;
        text-align: center;
        span {
          display: block;
          &:first-child {
            font-size: 32px;
            color: @priceColor;
          }
          &:last-child {
            color: #999;
          }
        }
      }
    }
    .tags {
      flex: 1;
      display: flex;
      border-left: 1px solid #f5f5f5;
      .dt {
        font-weight: bold;
        width: 100px;
        text-align: right;
        line-height: 42px;
      }
      .dd {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        > a {
          width: 132px;
          height: 42px;
          margin-left: 20px;
          margin-bottom: 20px;
          border-radius: 4px;
          border: 1px solid #e4e4e4;
          background: #f5f5f5;
          color: #999;
          text-align: center;
          line-height: 40px;
          &:hover {
            border-color: @xtxColor;
            background: lighten(@xtxColor, 50%);
            color: @xtxColor;
          }
          &.active {
            border-color: @xtxColor;
            background: @xtxColor;
            color: #fff;
          }
        }
      }
    }
  }
  .sort {
    height: 60px;
    line-height: 60px;
    border-top: 1px solid #f5f5f5;
    border-bottom: 1px solid #f5f5f5;
    margin: 0 20px;
    color: #666;
    > span {
      margin-left: 20px;
    }
    > a {
      margin-left: 30px;
      &.active,
      &:hover {
        color: @xtxColor;
      }
    }
  }
  .list {
    padding: 0 20px;
    .item {
      display: flex;
      padding: 25px 10px;
      border-bottom: 1px solid #f5f5f5;
      .user {
        width: 160px;
        img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
        }
        span {
          padding-left: 10px;
          color: #666;
        }
      }
      .body {
        flex: 1;
        .score {
          line-height: 40px;
          .iconfont {
            color: #ff9240;
            padding-right: 3px;
          }
          .attr {
            padding-left: 10px;
            color: #666;
          }
        }
      }
      .text {
        color: #666;
        line-height: 24px;
      }
      .time {
        color: #999;
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
      }
    }
  }
}
</style>
