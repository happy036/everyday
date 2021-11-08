<template>
  <child />
</template>

<script>
// 父组件
// 目标：掌握跨组件层级传递数据的方式
// 通过 provide、inject 函数的配合使用，可以实现跨组件传递数据（组件与组件存在嵌套关系）
import { ref, provide } from "vue";
import child from "./child.vue";
export default {
  components: { child },
  setup() {
    const person = ref({ name: "张三" });
    const changePerson = () => {
      person.value.name = "李四";
    };
    provide("person", person);
    provide("changePerson", changePerson);
  },
};
</script>

<style>
</style>