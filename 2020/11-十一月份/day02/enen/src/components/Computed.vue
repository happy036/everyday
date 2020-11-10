<template>
  <div>
    <p @click="changeNum">{{ newNum }}</p>
  </div>
</template>

<script>
import { ref, computed } from "vue";
export default {
  setup() {
    let num = ref(1);
    let newNum = computed({
      get: () => {
        return num.value + 1;
      },
      // set: val => {
      //   num.value = val - 1;
      //   console.log(num.value);
      // }
    });
    function changeNum() {
      num.value = 8;
    }

    return {
      newNum,
      changeNum
    };
  }
};
</script>

<style>
</style>