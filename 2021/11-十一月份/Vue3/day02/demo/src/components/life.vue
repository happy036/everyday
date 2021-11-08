<template>
  <div>
    <h1>组件生命周期</h1>
    <p>{{ count }}</p>
    <button @click="onClick">生命周期按钮</button>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from "vue";
export default {
  setup() {
    let timer = null;
    // 组件挂载完成之后开启定时器
    onMounted(() => {
      timer = setInterval(() => {
        console.log("setInterval");
      }, 1000);
    });
    // 组件卸载完成之后清除定时器
    onUnmounted(() => {
      clearInterval(timer);
    });
    const count = ref(0);
    const onClick = () => {
      count.value = count.value + 1;
    };
    // 组件更新之后在控制台中输出onUpdated
    onUpdated(() => {
      console.log("onUpdated");
    });
    return {
      timer,
      count,
      onClick,
    };
  },
  beforeCreate() {
    console.log("before create");
  },
};
</script>

<style>
</style>