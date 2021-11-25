<template>
  <!-- 筛选区 -->
  <div class="sub-filter" v-if="filter && !filterLoading">
    <div class="item">
      <div class="head">品牌：</div>
      <div class="body">
        <a
          href="javascript:"
          v-for="brand in filter.brands"
          :key="brand.id"
          :class="{ active: filter.selectedBrandId === brand.id }"
          @click="
            filter.selectedBrandId = brand.id;
            updateSelectedFilters();
          "
          >{{ brand.name }}</a
        >
      </div>
    </div>
    <div class="item" v-for="item in filter.saleProperties" :key="item.id">
      <div class="head">{{ item.name }}</div>
      <div class="body">
        <a
          href="javascript:"
          v-for="property in item.properties"
          :key="property.id"
          :class="{ active: property.name === item.selectedFilterName }"
          @click="
            item.selectedFilterName = property.name;
            updateSelectedFilters();
          "
          >{{ property.name }}</a
        >
      </div>
    </div>
  </div>
  <!--  骨架屏-->
  <div class="sub-filter" v-else>
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="800px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
    <XtxSkeleton class="item" width="600px" height="40px" />
  </div>
</template>
<script>
import { getCategorySubFilter } from "@/api/category";
import { ref } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
export default {
  name: "SubFilter",
  setup(props, { emit }) {
    const { filter, updateSelectedFilters, filterLoading } =
      useCategorySubFilter(emit);
    return {
      filter,
      updateSelectedFilters,
      filterLoading,
    };
  },
};
function useCategorySubFilter(emit) {
  const filter = ref();
  const router = useRoute();
  // 用于存储用户选择的筛选条件
  const selectedFilters = {
    brandId: null,
    attrs: [],
  };
  // 汇总用户选择的筛选条件
  const updateSelectedFilters = () => {
    // 汇总用户选择的品牌id
    selectedFilters.brandId = filter.value.selectedBrandId;
    // 清楚原有的筛选条件数据
    selectedFilters.attrs = [];
    // 汇总用户选择的其他筛选条件
    filter.value.saleProperties.forEach((item) => {
      // 如果用户选择了筛选条件并且用户选择的筛选条件不是“全部”
      if (item.selectedFilterName && item.selectedFilterName !== "全部") {
        // 将用户选择的筛选条件存储在attrs数组中
        selectedFilters.attrs.push({
          // 筛选类别的名字
          groupName: item.name,
          // 筛选条件的名字
          propertyName: item.selectedFilterName,
        });
      }
    });
    // 传递给父组件
    emit("onFilterChanged", selectedFilters);
  };
  // 用于存储筛选数据的加载状态
  const filterLoading = ref(false);
  // 用于获取筛选条件的方法
  const getData = (id) => {
    // 更新筛选数据的加载状态
    filterLoading.value = true;
    // 发送请求
    getCategorySubFilter(id).then((data) => {
      // 在品牌筛选选项的前面加入“全部”筛选条件
      data.result.brands.unshift({ name: "全部", id: null });
      // 临时存储选中的品牌的id
      data.result.selectedBrandId = null;
      // 在其他筛选选项前加入“全部”筛选条件
      data.result.saleProperties.forEach((item) => {
        item.properties.unshift({ name: "全部", id: null });
        // 临时存储选中的筛选条件的名字
        item.selectedFilterName = "全部";
      });
      // 存储筛选条件数据
      filter.value = data.result;
      // 更新加载状态
      filterLoading.value = false;
    });
  };
  getData(router.params.id);
  // 监听路由参数的变化，当路由参数发生变化以后重新获取筛选条件数据
  onBeforeRouteUpdate((to) => getData(to.params.id));
  return {
    filter,
    updateSelectedFilters,
    filterLoading,
  };
}
</script>
<style scoped lang="less">
// 筛选区
.sub-filter {
  background: #fff;
  padding: 25px;
  .item {
    display: flex;
    line-height: 40px;
    .head {
      width: 80px;
      color: #999;
    }
    .body {
      flex: 1;
      a {
        margin-right: 36px;
        transition: all 0.3s;
        display: inline-block;
        &.active,
        &:hover {
          color: @xtxColor;
        }
      }
    }
  }
  .xtx-skeleton {
    padding: 10px 0;
  }
}
</style>
