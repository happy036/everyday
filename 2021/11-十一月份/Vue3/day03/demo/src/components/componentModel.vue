<template>
  <div>
    <p>{{ firstName }}{{ lastName }}</p>
    <button @click="onClickHandler">componentModel</button>
  </div>
</template>

<script>
export default {
  // 普通版
  //   props: ["firstName"],
  //   setup(props, { emit }) {
  //     const onClickHandler = () => {
  //       emit("onFirstNameChanged", "王五");
  //     };
  //     return {
  //       onClickHandler,
  //     };
  //   },
  // 升级版
  //   props: ["modelValue"],
  //   setup(props, { emit }) {
  //     const onClickHandler = () => {
  //       emit("update:modelValue", "王五");
  //     };
  //     return {
  //       onClickHandler,
  //     };
  //   },
  //   终极版
  props: ["firstName", "lastName"],
  setup(props, { emit }) {
    const onClickHandler = () => {
      emit("update:firstName", "刘备");
      emit("update:lastName", "诸葛亮");
    };
    return {
      onClickHandler,
    };
  },
};
</script>

<style></style>
