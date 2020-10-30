<template>
  <div>
    <h2>关于</h2>
    <router-link to="/login/曹操">登录</router-link>
    <router-link :to="{ name: 'back', params: { name: '曹贼' } }"
      >退出</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
