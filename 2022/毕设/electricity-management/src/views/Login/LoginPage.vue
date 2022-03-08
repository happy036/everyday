<template>
  <div class="login">
    <LoginFrom />
  </div>
</template>

<script>
import LoginFrom from "@/views/Login/components/LoginFrom";
export default {
  name: "LoginPage",
  components: {
    LoginFrom,
  },
};
</script>

<style scoped lang="less">
.login {
  background-image: url("../../assets/images/login.png");
  height: 100%;
  position: relative;
  font: inherit;
}
</style>
