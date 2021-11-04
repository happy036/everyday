<template>
  <div class="login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
    <van-row type="flex" justify="space-between" class="license">
      <van-col span="6" offset="2">
        <NuxtLink to="/user/register">立即注册</NuxtLink>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapMutations(["setToken", "setUserInfo"]),
    async onSubmit(values) {
      // console.log("submit", values);
      const {
        data: { token, status, userInfo },
      } = await this.$api.Login(values);
      console.log(token, status, userInfo);
    },
  },
};
</script>

<style>
</style>