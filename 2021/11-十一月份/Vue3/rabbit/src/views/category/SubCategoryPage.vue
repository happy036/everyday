<template>
  <AppLayout>
    <!--    二级分类组件-->
    <div class="container">
      <XtxBread>
        <XtxBreadItem path="/">首页</XtxBreadItem>
        <XtxBreadItem :path="`/category/${category?.TopCategory?.id}`">{{
          category?.TopCategory?.name
        }}</XtxBreadItem>
        <XtxBreadItem :path="`/category/${category?.subCategory?.id}`">{{
          category?.subCategory?.name
        }}</XtxBreadItem>
      </XtxBread>
      <!--      筛选条件组件-->
      <SubFilter @onFilterChanged="onParamsChanged" />
      <!--      商品区块-->
      <div class="good-list">
        <!--        商品排序-->
        <SubSort />
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import SubFilter from "@/views/category/components/SubFilter";
import SubSort from "@/views/category/components/SubSort";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "TopCategoryPage",
  setup() {
    // 获取用户选择的筛选条件
    const onParamsChanged = (target) => {
      console.log(target);
    };
    return { category: useBread(), onParamsChanged };
  },
  components: {
    SubSort,
    AppLayout,
    SubFilter,
  },
};
// 获取面包屑组件数据
function useBread() {
  // 获取路由信息对象
  const route = useRoute();
  // 获取store对象
  const store = useStore();
  // 获取面包屑所需要的分类信息
  return computed(() => {
    // 临时存储一级分类
    let TopCategory = null;
    // 临时存储二级分类
    let subCategory = null;
    // 遍历一级分类
    store.state.category.list.forEach((top) => {
      // 遍历二级分类
      top.children?.forEach((sub) => {
        // 判断是否是当前分类
        if (sub.id === route.params.id) {
          // 存储一级分类
          TopCategory = top;
          // 存储二级分类
          subCategory = sub;
        }
      });
    });
    // 返回分类数据
    return { TopCategory, subCategory };
  });
}
</script>

<style scoped></style>
