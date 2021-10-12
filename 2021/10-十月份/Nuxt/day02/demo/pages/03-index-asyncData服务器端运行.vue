<template>
  <div>
    <h1>asyncData运行在{{ server }}</h1>
    <nuxt-link to="/about">go about</nuxt-link>
  </div>
</template>

<script>
export default {
  asyncData() {
    const server = process.server ? "服务端" : "客户端";
    console.log(server);
    return {
      server,
    };
  },
};
</script>

<style>
</style>