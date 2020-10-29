<template>
  <div>
    <h2><router-link to="/home">home</router-link></h2>
    <h2><router-link to="/user">user</router-link></h2>
    <h2><router-link to="/about">about</router-link></h2>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h2 {
  display: inline;
  margin-left: 10px;
}
</style>
