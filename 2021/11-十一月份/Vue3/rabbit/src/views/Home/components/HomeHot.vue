<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过" ref="target">
    <!--  人气推荐组件-->
    <ul class="goods-list" v-if="goods">
      <li v-for="item in goods" :key="item.id">
        <RouterLink to="/">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
    <transition name="fade">
      <HomeSkeleton v-if="!goods" />
    </transition>
  </HomePanel>
</template>

<script>
import HomePanel from "@/views/Home/components/HomePanel";
import { getHomeHot } from "@/api/home";
import useLazyData from "@/hooks/useLazyData";
import HomeSkeleton from "@/views/Home/components/HomeSkeleton";
export default {
  name: "HomeHot",
  setup() {
    const { target, result } = useLazyData(getHomeHot);
    return {
      goods: result,
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
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    //.hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
