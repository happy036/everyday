<template>
  <div>
    <button @click="handleBack()">回去</button>
    <p>ID为{{ id }}</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style>
</style>