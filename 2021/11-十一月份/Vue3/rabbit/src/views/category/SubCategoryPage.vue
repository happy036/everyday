<template>
  <AppLayout>
    <div class="container">
      <!--    二级分类组件-->
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
      <SubFilter @onFilterChanged="onFilterSortChanged" />
      <!--      商品区块-->
      <div class="goods-list">
        <!--        商品排序-->
        <SubSort @onSortParamsChanged="onFilterSortChanged" />
        <!--        商品列表-->
        <GoodsList :goods="result.items" v-if="result" />
        <!--        无限列表加载组件-->
        <XtxInfiniteLoading
          :loading="loading"
          :finished="finished"
          @infinte="loadMore"
        />
      </div>
    </div>
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import SubFilter from "@/views/category/components/SubFilter";
import SubSort from "@/views/category/components/SubSort";
import GoodsList from "@/views/category/components/GoodsList";
import { getGoodsList } from "@/api/category";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, ref, watch } from "vue";
import XtxInfiniteLoading from "@/components/library/XtxInfiniteLoading";
export default {
  name: "TopCategoryPage",
  setup() {
    const { result, onFilterSortChanged, loadMore, loading, finished } =
      useGoods();
    return {
      category: useBread(),
      result,
      onFilterSortChanged,
      loadMore,
      loading,
      finished,
    };
  },
  components: {
    XtxInfiniteLoading,
    SubSort,
    AppLayout,
    SubFilter,
    GoodsList,
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
// 获取商品数据
function useGoods() {
  // 获取路由信息对象
  const route = useRoute();
  // 用于存储商品数据
  const result = ref(null);
  // 用于储存请求参数
  let reqParams = ref({
    categoryId: route.params.id,
    page: 0,
    pageSize: 5,
  });
  const loading = ref(false);
  const finished = ref(false);
  // 用于获取商品数据
  const getGoods = () => {
    // 更新加载状态
    loading.value = true;
    // 获取商品数据
    getGoodsList(reqParams.value).then((data) => {
      // 如果当前是第一页,直接赋值
      if (reqParams.value.page === 1) {
        result.value = data.result;
        // 当页码重置为1时，要重置finished
        finished.value = false;
      } else {
        // 如果当前不是第一页,做商品列表数据的累加
        result.value = {
          ...data.result,
          items: [...result.value.items, ...data.result.items],
        };
      }
      // 更新加载状态
      loading.value = false;
      // 如果当前页已经是最后一页
      if (
        reqParams.value.page === data.result.pages ||
        data.result.pages === 0
      ) {
        // 所有数据已加载完成
        finished.value = true;
      }
    });
  };
  // 加载更多
  const loadMore = () => {
    // 当前页加一
    reqParams.value = {
      ...reqParams.value,
      page: reqParams.value.page + 1,
    };
  };
  // 当筛选条件和排序条件发生变化时
  const onFilterSortChanged = (target) => {
    reqParams.value = {
      ...reqParams.value,
      ...target,
      page: 1,
    };
  };
  watch(
    // 监听路由参数变化
    () => reqParams.value,
    // 变化之后调用getGoods
    () => {
      getGoods();
    }
  );
  // 当路由参数发生变化以后
  onBeforeRouteUpdate((to) => {
    // 更改获取商品列表的请求参数(分类id)
    reqParams.value = {
      categoryId: to.params.id,
      page: 1,
    };
  });
  return { result, getGoods, onFilterSortChanged, loadMore, loading, finished };
}
</script>

<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
