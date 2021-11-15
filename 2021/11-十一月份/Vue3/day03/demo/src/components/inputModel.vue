<template>
  <div>
    <input
      type="text"
      v-model="firstName"
      @update:modelValue="onFirstNameChanged($event)"
    />
    <button @click="onClick">inputModel</button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const firstName = ref("张三");
    const onClick = () => {
      firstName.value = "李四";
    };
    // 监听双向数据绑定中数据的变化
    const onFirstNameChanged = (event) => {
      console.log(111);
      console.log(event);
    };
    return {
      firstName,
      onClick,
      onFirstNameChanged,
    };
  },
};
</script>

<style></style>
