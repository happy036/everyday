<template>
  <div>
    <h2>你好</h2>
    <button @click="enen">返回上一级</button>
  </div>
</template>

<script>
export default {
  methods: {
    enen() {
      this.$router.push({ name: "back", params: { name: "曹贼" } });
    }
  }
};
</script>

<style></style>
