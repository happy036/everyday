<template>
  <div>
    <button @click="handleBack">回去</button>
    <p>用户ID：{{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    handleBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>