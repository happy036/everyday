<template>
  <div>
    <h1>{{ name }}欢迎</h1>
    <button @click="oo">跳转到首页</button>
  </div>
</template>

<script>
export default {
  props: ["name"],
  methods: {
    oo() {
      this.$router.go(-2);
    }
  }
};
</script>

<style></style>
