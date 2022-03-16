<script setup>
// 此处代码将会被编译为 setup 函数代码
// 也就是说此处代码将会在组件每次创建实例时执行
// 在内部声明的顶级变量和函数都可以在模板中你直接使用
import { capitalize } from "./helps/index";
import HelloWorld from "./components/HelloWorld";
import { ref } from "vue";
const msg = "hello";
function log() {
  console.log(msg);
}
const count = ref(0);
function onDelete() {
  alert("delete");
}
</script>
<template>
  <div @click="log">{{ capitalize(msg) }}</div>
  <div @click="count++">{{ count }}</div>
  <div><HelloWorld msg="hi" @delete="onDelete" /></div>
</template>
