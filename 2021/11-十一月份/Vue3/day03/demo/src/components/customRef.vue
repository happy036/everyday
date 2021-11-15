<template>
  <div>
    <input type="text" v-model="keyword" />
    {{ keyword }}
    <button @click="onClick">customRef</button>
  </div>
</template>

<script>
import { customRef } from "vue";
export default {
  setup() {
    const keyword = useDebouncerRef("Hello", 400);
    const onClick = () => {
      keyword.value = keyword.value + "ooooo";
    };
    return { keyword, onClick };
  },
};
// 通过该方法返回一个具有防抖功能的响应式数据
function useDebouncerRef(initialValue, delay) {
  let timer = null;
  return customRef((track, tigger) => {
    return {
      get() {
        // 跟踪initialValue值的变量 监听数据变化
        track();
        return initialValue;
      },
      set(newVlue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          initialValue = newVlue;
          // 触发视图更新 数据发生变化以后更新视图
          tigger();
        }, delay);
      },
    };
  });
}
</script>

<style></style>
