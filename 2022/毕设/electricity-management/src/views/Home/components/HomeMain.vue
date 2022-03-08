<template>
  <div class="main-container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "HomeMain",
};
</script>

<style scoped>
.main-container {
  /*margin-bottom: 20px;*/
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
}
</style>
