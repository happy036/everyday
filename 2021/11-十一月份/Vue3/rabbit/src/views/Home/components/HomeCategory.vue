<template>
  <div class="home-category" @mouseleave="current = null">
    <!--  左侧分类列表渲染-->
    <ul class="menu">
      <li
        :class="{ active: current?.id && item.id === current.id }"
        v-for="item in menuList"
        :key="item.id"
        @mouseenter="current = item"
      >
        <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        <template v-if="item.children?.length">
          <RouterLink
            :to="`/category/two/${itemSub.id}`"
            v-for="itemSub in item.children"
            :key="itemSub.id"
          >
            {{ itemSub.name }}
          </RouterLink>
        </template>
        <template v-else>
          <XtxSkeleton
            animated="fade"
            width="60px"
            height="18px"
            bg="rgba(255,255,255,0.2)"
            style="margin-right: 5px"
          ></XtxSkeleton>
          <XtxSkeleton
            animated="fade"
            width="60px"
            height="18px"
            bg="rgba(255,255,255,0.2)"
          ></XtxSkeleton>
        </template>
      </li>
    </ul>
    <!--    实现左侧分类列表商品推荐-->
    <div class="layer" v-if="current">
      <h4>分类商品推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <ul v-if="current.goods">
        <li v-for="goods in current.goods" :key="goods.id">
          <RouterLink to="/">
            <img :src="goods.picture" :alt="goods.name" />
            <div class="info">
              <p class="name ellipsis-2">{{ goods.name }}</p>
              <p class="desc ellipsis">{{ goods.desc }}</p>
              <p class="price"><i>¥</i>{{ goods.price }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
      <!--      实现左侧分类品牌推荐-->
      <ul v-if="current.brands">
        <li class="brand" v-for="brand in current.brands" :key="brand.id">
          <RouterLink to="/">
            <img :src="brand.picture" :alt="brand.name" />
            <div class="info">
              <p class="place">
                <i class="iconfont icon-dingwei"></i>{{ brand.place }}
              </p>
              <p class="name ellipsis">{{ brand.name }}</p>
              <p class="desc ellipsis-2">{{ brand.nameEn }}</p>
            </div>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { getBrands } from "@/api/home";
export default {
  name: "HomeCategory",
  setup() {
    // 用于存储当前用户鼠标移入的左侧一级分类
    const current = ref(null);
    // 获取左侧分类列表数据
    const { menuList } = useMenuList();
    return {
      current,
      menuList,
    };
  },
};
// 将计算左侧分类列表的逻辑抽取成单独的方法
function useMenuList() {
  const store = useStore();
  // 存储品牌
  const brand = ref({
    id: "brand",
    children: [{ id: "child-brand", name: "推荐品牌" }],
    brands: [],
  });
  // 获取品牌数据
  getBrands(6).then((data) => {
    // console.log(data);
    brand.value.brands = data.result;
  });
  // 获取左侧分类所需数据
  const menuList = computed(() => {
    // 截取一级分类中的二级分类个数
    const list = store.state.category.list.map((item) => ({
      ...item,
      children: item.children ? item.children.slice(0, 2) : [],
    }));
    // 向分类列表中添加品牌
    list.push(brand.value);
    // 返回处理好的分类列表数据
    return list;
  });
  return { menuList };
}
</script>

<style scoped lang="less">
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover,
      &.active {
        background-color: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li.brand {
        height: 180px;
        a {
          align-items: flex-start;
          img {
            width: 120px;
            height: 160px;
          }
          .info {
            p {
              margin-top: 8px;
            }
            .place {
              color: #999;
            }
          }
        }
      }
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
</style>
