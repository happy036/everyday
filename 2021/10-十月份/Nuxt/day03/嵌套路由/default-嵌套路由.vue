<template>
  <div>
    <span><nuxt-link to='/'>Home</nuxt-link></span>
    <span><nuxt-link to='/parent'>Parent</nuxt-link></span>
    <Nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style>
div {
  text-align: center;
}
span {
  margin-left: 10px;
  margin-right: 10px;
  font-size: 20px;
}
</style>
