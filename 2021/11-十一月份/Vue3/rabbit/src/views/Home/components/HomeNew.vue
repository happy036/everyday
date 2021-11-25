<template>
  <HomePanel title="新鲜好物" subTitle="新鲜出炉 品质靠谱" ref="target">
    <!--新鲜好物组件-->
    <template v-slot:right>
      <XtxMore />
    </template>
    <template v-slot:default>
      <ul class="goods-list" v-if="homeNew">
        <li v-for="item in homeNew" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name ellipsis">{{ item.name }}</p>
            <p class="price">&yen;{{ item.price }}</p>
          </RouterLink>
        </li>
      </ul>
      <transition name="fade">
        <HomeSkeleton v-if="!homeNew" />
      </transition>
    </template>
  </HomePanel>
</template>

<script>
import HomePanel from "@/views/Home/components/HomePanel";
import HomeSkeleton from "@/views/Home/components/HomeSkeleton";
import useLazyData from "@/hooks/useLazyData";
import { getHomeNew } from "@/api/home";
export default {
  name: "HomeNew",
  setup() {
    // 监听元素进入可视区时加载新鲜好物数据
    const { target, result } = useLazyData(getHomeNew);
    return {
      homeNew: result,
      target,
    };
  },
  components: {
    HomePanel,
    HomeSkeleton,
  },
};
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    //.hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
.home-skeleton {
  top: 115px;
}
</style>
