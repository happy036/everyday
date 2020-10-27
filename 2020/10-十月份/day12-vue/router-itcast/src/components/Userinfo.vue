<template>
  <div>
    <h3>用户详情页面---用户id为：{{ id }}</h3>
    <button @click="handleClick">回退</button>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    handleClick() {
      this.$router.go(-1);
    }
  }
};
</script>
<style></style>
