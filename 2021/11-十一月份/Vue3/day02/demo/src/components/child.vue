<template>
  <child-son />
</template>

<script>
// 子组件
// 目标：掌握跨组件层级传递数据的方式
// 通过 provide、inject 函数的配合使用，可以实现跨组件传递数据（组件与组件存在嵌套关系）
import childSon from "./childSon.vue";
export default {
  components: {
    childSon,
  },
};
</script>

<style>
</style>