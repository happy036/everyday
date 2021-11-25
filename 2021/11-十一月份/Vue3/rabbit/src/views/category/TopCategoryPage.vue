<template>
  <AppLayout>
    <div class="container">
      <XtxBread>
        <XtxBreadItem path="/">首页</XtxBreadItem>
        <XtxBreadItem :path="`/category/${category?.id}`">{{
          category?.name
        }}</XtxBreadItem>
      </XtxBread>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "TopCategoryPage",
  setup() {
    return { category: useBread() };
  },
  components: {
    AppLayout,
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
