<template>
  <div>
    <!-- 1.轮播图组件 -->
    <IndexCarousel :swipeList="swipeList" />
    <!-- 2.宫格组件 -->
    <IndexGridList :gridlist="gridlist" />
    <!-- 3.活动组件 -->
    <IndexActive />
    <!-- 4.品牌组件 -->
    <IndexBrand />
    <!-- 5.运动专区 -->
    <IndexSports :sports="sports" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { swipeList } = await $axios.$get("/banners");
    // console.log(swipeList);
    const { gridlist } = await $axios.$get("/gridlist");
    const { sports } = await $axios.$get("/sports");
    return {
      swipeList,
      gridlist,
      sports,
    };
  },
};
</script>
