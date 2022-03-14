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

<style scoped lang="less">
.main-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  padding: 20px;
}
</style>
