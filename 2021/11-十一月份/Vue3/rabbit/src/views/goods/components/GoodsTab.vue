<template>
  <div class="goods-tabs">
    <nav>
      <a
        href="javascript:"
        @click="activeComponentName = 'GoodsDetail'"
        :class="{ active: activeComponentName === 'GoodsDetail' }"
        >商品详情</a
      >
      <a
        href="javascript:"
        @click="activeComponentName = 'GoodsComment'"
        :class="{ active: activeComponentName === 'GoodsComment' }"
        >商品评价<span>{{ goodsComment.commentCount }}</span></a
      >
    </nav>
    <!-- 切换内容的地方 -->
    <component :is="activeComponentName" />
  </div>
</template>
<script>
import GoodsDetail from "@/views/goods/components/GoodsDetail";
import GoodsComment from "@/views/goods/components/GoodsComment";
import { ref } from "vue";
import { inject } from "vue";

export default {
  name: "GoodsTab",
  setup() {
    // GoodsDetail展示商品详细信息 GoodsComment展示商品评论信息
    const activeComponentName = ref("GoodsDetail");
    const goodsComment = inject("goodsDetail");
    return {
      activeComponentName,
      goodsComment,
    };
  },
  components: {
    GoodsDetail,
    GoodsComment,
  },
};
</script>
<style lang="less" scoped>
.goods-tabs {
  min-height: 600px;
  background: #fff;
  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;
      > span {
        color: @priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
      &:first-child {
        border-right: 1px solid #f5f5f5;
      }
      &.active {
        &::before {
          content: "";
          position: absolute;
          left: 40px;
          bottom: -1px;
          width: 72px;
          height: 2px;
          background: @xtxColor;
        }
      }
    }
  }
}
</style>
