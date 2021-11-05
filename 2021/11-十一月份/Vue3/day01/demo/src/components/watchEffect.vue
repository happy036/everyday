<template>
  <div>
    <input type="text" v-model="text" />
    <input type="text" v-model="text2" />
  </div>
</template>

<script>
import { watchEffect } from "@vue/runtime-core";
import { ref } from "vue";
export default {
  setup() {
    const text = ref("");
    const text2 = ref("");
    watchEffect(() => {
      console.log(text.value);
      console.log(text2.value);
    });
    return {
      text,
      text2,
    };
  },
};
</script>

<style>
</style>