<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <button @click="onClick">按钮</button>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const person = reactive({
      name: "张三",
      age: 20,
    });
    const { name, age } = toRefs(person);
    const onClick = () => {
      (person.name = "李四"), (person.age = "10");
    };
    return {
      person,
      onClick,
      name,
      age,
    };
  },
};
</script>

<style>
</style>