<template>
  <div>
    <input type="text" v-model="text" />
    <input type="text" v-model="text2" />
    <p>{{ people.name }}</p>
    <button @click="onClick">按钮</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from "vue";
export default {
  setup() {
    const text = ref("111");
    const text2 = ref("222");
    const person = ref({ name: "张三" });
    const people = reactive({ name: "张三" });
    // 基本数据类型
    // watch(text, (current, previous) => {
    //   console.log("current", current);
    //   console.log("previous", previous);
    // });

    // 引用数据类型
    const onClick = () => {
      people.name = "李四";
    };
    // watch(person.value, (current) => {
    //   console.log(current);
    // });

    // 使用 watch 监听响应式数据内部的具体属性 (基本数据类型)
    // watch(
    //   () => person.value.name,
    //   (current) => {
    //     console.log(current);
    //   }
    // );

    // 使用 watch 监听基于 reactive 创建的响应式数据。
    // watch(people, (current, previous) => {
    //   console.log(current);
    // });

    // 使用 watch 监听多个值的变化
    // watch([text, text2], (current) => {
    //   console.log(current);
    // });

    // 使 watch 监听数据在初始时执行一次
    watch(
      [text, text2],
      (current) => {
        console.log(current);
      },
      {
        immediate: true,
      }
    );
    return {
      text,
      person,
      onClick,
      people,
      text2,
    };
  },
};
</script>

<style>
</style>