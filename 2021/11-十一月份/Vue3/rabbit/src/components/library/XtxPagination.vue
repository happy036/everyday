<template>
  <div class="xtx-pagination">
    <a href="javascript:" v-if="currentPage > 1" @click="currentPage--"
      >上一页</a
    >
    <span v-if="pageInfo.start > 1">...</span>
    <a
      href="javascript:"
      v-for="item in pageInfo.pageNumberAry"
      :class="{ active: item === currentPage }"
      @click="currentPage = item"
      :key="item"
      >{{ item }}</a
    >
    <span v-if="pageInfo.end < pageInfo.totalPage">...</span>
    <a
      href="javascript:"
      v-if="currentPage < pageInfo.totalPage"
      @click="currentPage++"
      >下一页</a
    >
  </div>
</template>
<script>
import { computed } from "vue";
import { useVModel } from "@vueuse/core";

export default {
  name: "XtxPagination",
  props: {
    // 当前页
    page: {
      type: Number,
      default: 1,
    },
    // 总数据条数
    count: {
      type: Number,
      default: 1,
    },
    // 每页显示数据条数
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  setup(props, { emit }) {
    // 当前页
    const currentPage = useVModel(props, "page", emit);
    // 总数据条数
    const totalCount = computed(() => props.count);
    // 每页显示数据条数
    const pageSize = computed(() => props.pageSize);
    // 页面中显示的页码个数
    const pageButtonNumber = 5;
    // 页码计算偏移量
    const pageOffset = Math.floor(pageButtonNumber / 2);
    // 当前页发生变化时重新计算页码
    const pageInfo = computed(() => {
      // 计算显示着的开始页码值
      let start = currentPage.value - pageOffset;
      // 计算显示着的结束页码值
      let end = start + pageButtonNumber - 1;
      // 计算总页数
      let totalPage = Math.ceil(totalCount.value / pageSize.value);
      // 如果显示着的页码小于1
      if (start < 1) {
        // 让显示着的页码等于1
        start = 1;
        // 重新计算结束页码
        let tmp = start + pageButtonNumber - 1;
        end = tmp > totalPage ? totalPage : tmp;
      }
      // 如果显示着的结束页码大于了总页数
      if (end > totalPage) {
        // 让显示着的结束页码等于总页数
        end = totalPage;
        // 重新计算开始页码
        let temp = end - pageButtonNumber + 1;
        start = temp < 1 ? 1 : temp;
      }
      // 生命存储页码的数组
      let pageNumberAry = [];
      // 遍历生成页码数组
      for (let i = start; i <= end; i++) {
        pageNumberAry.push(i);
      }
      // 返回分页相关信息
      return { pageNumberAry, start, end, totalPage };
    });
    return { pageInfo, currentPage };
  },
};
</script>
<style scoped lang="less">
.xtx-pagination {
  display: flex;
  justify-content: center;
  padding: 30px;
  > a {
    display: inline-block;
    padding: 5px 10px;
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    margin-right: 10px;
    &:hover {
      color: @xtxColor;
    }
    &.active {
      background: @xtxColor;
      color: #fff;
      border-color: @xtxColor;
    }
    &.disabled {
      cursor: not-allowed;
      opacity: 0.4;
      &:hover {
        color: #333;
      }
    }
  }
  > span {
    margin-right: 10px;
  }
}
</style>
