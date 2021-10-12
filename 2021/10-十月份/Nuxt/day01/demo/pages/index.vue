<template>
  <div>
    <h1>Home page</h1>
    <!-- 路径参数 -->
    <!-- <li><nuxt-link to="/user/100">去订单</nuxt-link></li>
    <li><nuxt-link to="/user/100/200">去商品</nuxt-link></li> -->

    <!-- 查询参数 -->
    <li><nuxt-link to="/goods?cid=100">cid</nuxt-link></li>
    <li><nuxt-link to="/goods?cid=100&gid=200">gid</nuxt-link></li>
  </div>
</template>

<script>
export default {
  layout: "no",
};
</script>
