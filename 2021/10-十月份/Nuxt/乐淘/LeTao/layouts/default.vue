<template>
  <div>
    <header>
      <van-nav-bar :title="title" left-text="返回" left-arrow>
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </header>
    <main>
      <Nuxt></Nuxt>
    </main>
    <footer>
      <van-tabbar v-model="active">
        <van-tabbar-item name="index" icon="home-o" to="/"
          >首页</van-tabbar-item
        >
        <van-tabbar-item name="category" icon="search" to="/category"
          >分类</van-tabbar-item
        >
        <van-tabbar-item name="cart" icon="friends-o" to="/cart"
          >购物车</van-tabbar-item
        >
        <van-tabbar-item name="my" icon="setting-o" to="/my"
          >我的</van-tabbar-item
        >
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: this.$route.name,
      title: "",
    };
  },
  methods: {
    // 刷新页面要设置标题
    refreshHandle() {
      this.title = {
        index: "乐淘-首页",
        category: "乐淘-分类",
        cart: "乐淘-购物车",
        my: "乐淘-我的",
      }[this.$route.name];
    },
  },
  // 刷新页面会触发mounted
  mounted() {
    // 重新设置标题
    this.refreshHandle();
  },
  watch: {
    // 监听路由的变化
    $route() {
      console.log(this.$route.name);
      // 设置标题
      this.refreshHandle();
    },
  },
};
</script>

<style>
</style>