<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ person }}</p>
    <button @click="onClick">按钮</button>
  </div>
</template>

<script>
import { ref, toRef } from "vue";
export default {
  // toRef 方法用于将响应式数据内部的普通数据转换为响应式数据，并且转换后的数据和原始数据存在引用关系，存在引用关系意味着当原始数据发生变化后，toRef 转换后的数据也会跟着变化。
  setup() {
    const person = ref({ name: "张三" });
    // const name = person.value.name;
    const name = toRef(person.value, "name");
    const onClick = () => {
      person.value.name = "李四";
    };
    return {
      name,
      person,
      onClick,
    };
  },
};
</script>

<style>
</style>