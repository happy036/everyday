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
  async asyncData({ $api }) {
    // const { swipeList } = await $axios.$get("/banners");
    // // console.log(swipeList);
    // const { gridlist } = await $axios.$get("/gridlist");
    // const { sports } = await $axios.$get("/sports");
    // const {
    //   data: { swipeList },
    // } = await $request.get("/banners");
    // const {
    //   data: { gridlist },
    // } = await $request.get("/gridlist");
    // const {
    //   data: { sports },
    // } = await $request.get("/sports");
    const [{ swipeList }, { gridlist }, { sports }] = await Promise.all([
      $api.IndexBanners(),
      $api.IndexGridList(),
      $api.IndexSport(),
    ]);
    return {
      swipeList,
      gridlist,
      sports,
    };
  },
};
</script>
