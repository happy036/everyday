<template>
  <div class="sub-sort">
    <div class="sort">
      <a
        :class="{ active: sortParams.sortField === '' }"
        href="javascript:"
        @click="updateSortParams({ sortField: '', sortMethod: 'desc' })"
        >默认排序</a
      >
      <a
        :class="{ active: sortParams.sortField === 'publishTime' }"
        href="javascript:"
        @click="updateSortParams({ sortField: 'publishTime' })"
        >最新商品</a
      >
      <a
        :class="{ active: sortParams.sortField === 'orderNum' }"
        href="javascript:"
        @click="updateSortParams({ sortField: 'orderNum' })"
        >最高人气</a
      >
      <a
        :class="{ active: sortParams.sortField === 'evaluateNum' }"
        href="javascript:"
        @click="updateSortParams({ sortField: 'evaluateNum' })"
        >评论最多</a
      >
      <a
        href="javascript:"
        @click="
          updateSortParams({
            sortField: 'price',
            sortMethod: sortParams.sortMethod === 'desc' ? 'asc' : 'desc',
          })
        "
      >
        价格排序
        <i
          class="arrow up"
          :class="{ active: sortParams.sortMethod === 'asc' }"
        ></i>
        <i
          class="arrow down"
          :class="{ active: sortParams.sortMethod === 'desc' }"
        ></i>
      </a>
    </div>
    <div class="check">
      <XtxCheckbox
        v-model="sortParams.inventory"
        @update:modelValue="updateSortParams({ inventory: $event })"
        >仅显示有货商品</XtxCheckbox
      >
      <XtxCheckbox
        v-model="sortParams.onlyDiscount"
        @update:modelValue="updateSortParams({ onlyDiscount: $event })"
        >仅显示特惠商品</XtxCheckbox
      >
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "SubSort",
  setup(props, { emit }) {
    const { sortParams, updateSortParams } = useSort(emit);
    return {
      sortParams,
      updateSortParams,
    };
  },
};
function useSort(emit) {
  // 用于存储排序条件
  const sortParams = ref({
    sortField: "", //排序字段，取值范围：[publishTime,orderNum,price,evaluateNum]
    sortMethod: "desc", //排序规则，asc为正序，desc为倒序，默认为desc
    inventory: false, //是否有库存
    onlyDiscount: false, //只显示特惠
  });
  // 更新排序的方法
  const updateSortParams = (target) => {
    sortParams.value = {
      ...sortParams.value,
      ...target,
    };
    // console.log(sortParams.value);
    // 将排序条件传递到父组件
    emit("onSortParamsChanged", sortParams.value);
  };
  return { sortParams, updateSortParams };
}
</script>
<style scoped lang="less">
.sub-sort {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .sort {
    display: flex;
    a {
      height: 30px;
      line-height: 28px;
      border: 1px solid #e4e4e4;
      padding: 0 20px;
      margin-right: 20px;
      color: #999;
      border-radius: 2px;
      position: relative;
      transition: all 0.3s;
      &.active {
        background: @xtxColor;
        border-color: @xtxColor;
        color: #fff;
      }
      .arrow {
        position: absolute;
        border: 5px solid transparent;
        right: 8px;
        &.up {
          top: 3px;
          border-bottom-color: #bbb;
          &.active {
            border-bottom-color: @xtxColor;
          }
        }
        &.down {
          top: 15px;
          border-top-color: #bbb;
          &.active {
            border-top-color: @xtxColor;
          }
        }
      }
    }
  }
  .check {
    .xtx-checkbox {
      margin-left: 20px;
      color: #999;
    }
  }
}
</style>
