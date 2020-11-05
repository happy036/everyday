<template>
  <div @click="changeName">{{ num }}---{{ start.name }}</div>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  setup() {
    let num = ref(0);
    let start = reactive({
      name: "易烊千玺",
      age: 18
    });
    function changeName() {
      start.name = "千纸鹤";
    }
    return {
      num,
      start,
      changeName
    };
  }
};
</script>

<style>
</style>