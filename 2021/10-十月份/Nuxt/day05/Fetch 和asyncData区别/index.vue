<template>
  <div>
    <p>asyncData提供的数据{{ msg }}</p>
    <p>fetch提供的数据{{ age }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 0,
    };
  },
  asyncData() {
    return {
      msg: "hello",
    };
  },
  fetch() {
    this.age = 20;
  },
};
</script>

<style>
</style>