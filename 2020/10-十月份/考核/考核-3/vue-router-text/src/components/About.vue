<template>
  <div>
    <p>about组件</p>
    <h2><router-link to="/setting">嗯呢</router-link></h2>
    <h2><router-link to="/account">好的</router-link></h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
h2 {
  display: inline;
  margin-left: 10px;
}
</style>
