<template>
  <AppLayout>
    <!--一级分类组件-->
    <div class="container">
      <XtxBread>
        <XtxBreadItem path="/">首页</XtxBreadItem>
        <Transition name="fade-right" mode="out-in"
          ><XtxBreadItem :key="topCategory?.id">{{
            topCategory?.name
          }}</XtxBreadItem></Transition
        >
      </XtxBread>
      <!--      调用轮播图组件-->
      <XtxCarousel :banners="carousels" :style="{ height: '500px' }" />
      <!--      全部分类-->
      <ShowSubCategoryList
        :subCategories="topCategory.children"
        v-if="topCategory"
      />
      <!--      商品推荐组件-->
      <RecommendGoods />
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import ShowSubCategoryList from "@/views/category/components/ShowSubCategoryList";
import RecommendGoods from "@/views/category/components/RecommendGoods";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import XtxCarousel from "@/components/library/XtxCarousel";
import { getBanners } from "@/api/home";

export default {
  name: "TopCategoryPage",
  setup() {
    const topCategory = useCategory();
    return { topCategory, carousels: useBanner() };
  },
  components: {
    XtxCarousel,
    AppLayout,
    ShowSubCategoryList,
    RecommendGoods,
  },
};
// 获取面包屑组件数据
function useCategory() {
  // 获取路由信息对象
  const route = useRoute();
  // 获取store对象
  const store = useStore();
  // 获取面包屑所需要的分类信息
  return computed(() => {
    return store.state.category.list.find(
      (item) => item.id === route.params.id
    );
  });
}
// 获取轮播图数据
function useBanner() {
  const carousels = ref(null);
  getBanners(2).then((data) => (carousels.value = data.result));
  return carousels;
}
</script>

<style scoped></style>
