<template>
  <div>
    <div v-if="$store.state.auth">
      您已经登录，可以访问<Nuxt-link to="/my">我的</Nuxt-link>
      <p>
        <button @click="logout">退出登录</button>
      </p>
    </div>
    <div v-else>please <Nuxt-link to="/login">Login</Nuxt-link></div>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  methods: {
    logout() {
      setTimeout(() => {
        this.$store.commit("updateAuth", "");
        // 移除cookie
        Cookie.remove("auth");
      }, 1000);
    },
  },
};
</script>
