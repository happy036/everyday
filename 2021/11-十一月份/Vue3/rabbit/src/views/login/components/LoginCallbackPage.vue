<template>
  <LoginHeader>联合登录</LoginHeader>
  <section class="container" v-if="loading">
    <div class="unbind">
      <div class="loading"></div>
    </div>
  </section>
  <section class="container" v-if="!loading && !isBind">
    <nav class="tab">
      <a
        @click="hasAccount = true"
        :class="{ active: hasAccount }"
        href="javascript:"
      >
        <i class="iconfont icon-bind"></i>
        <span>已有小兔鲜账号，请绑定手机</span>
      </a>
      <a
        @click="hasAccount = false"
        :class="{ active: !hasAccount }"
        href="javascript:"
      >
        <i class="iconfont icon-edit"></i>
        <span>没有小兔鲜账号，请完善资料</span>
      </a>
    </nav>
    <div class="tab-content" v-if="hasAccount">
      <LoginCallbackBindPhone :unionId="unionId" />
    </div>
    <div class="tab-content" v-else>
      <LoginCallbackBindPatch :unionId="unionId" />
    </div>
  </section>
  <LoginFooter />
</template>

<script>
import LoginHeader from "@/views/login/components/LoginHeader";
import LoginFooter from "@/views/login/components/LoginFooter";
import LoginCallbackBindPhone from "@/views/login/components/LoginCallbackBindPhone";
import LoginCallbackBindPatch from "@/views/login/components/LoginCallbackPatch";
import { ref } from "vue";
import { findAccountByQQId } from "@/api/user";
import useLoginAfter from "@/hooks/useLoginAfter";
export default {
  name: "LoginCallbackPage",
  components: {
    LoginCallbackBindPatch,
    LoginCallbackBindPhone,
    LoginFooter,
    LoginHeader,
  },
  setup() {
    const hasAccount = ref(true);
    // 先假设QQ没有绑定账号
    const isBind = ref(false);
    // loading状态
    const loading = ref(false);
    const { loginSuccessful } = useLoginAfter();
    const unionId = ref(null);
    // 获取QQ用户登录的openid
    // 1. 检测用户的登录状态
    if (window.QC.Login.check()) {
      // 更新状态
      loading.value = true;
      // 获取openid
      window.QC.Login.getMe((openid) => {
        unionId.value = openid;
        findAccountByQQId({ unionId: openid })
          .then((data) => {
            loginSuccessful(data);
            loading.value = false;
            isBind.value = true;
          })
          .catch(() => {
            loading.value = false;
            isBind.value = false;
          });
      });
    }

    return {
      hasAccount,
      loading,
      isBind,
      unionId,
    };
  },
};
</script>

<style scoped lang="less">
.container {
  padding: 25px 0;
}
.tab {
  background: #fff;
  height: 80px;
  padding-top: 40px;
  font-size: 18px;
  text-align: center;
  a {
    color: #666;
    display: inline-block;
    width: 350px;
    line-height: 40px;
    border-bottom: 2px solid #e4e4e4;
    i {
      font-size: 22px;
      vertical-align: middle;
    }
    span {
      vertical-align: middle;
      margin-left: 4px;
    }
    &.active {
      color: @xtxColor;
      border-color: @xtxColor;
    }
  }
}
.tab-content {
  min-height: 600px;
  background: #fff;
}
.container {
  padding: 25px 0;
  position: relative;
  height: 730px;
  .unbind {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 25px 0;
    z-index: 99;
    .loading {
      height: 100%;
      background: #fff url(../../../assets/images/load.gif) no-repeat center /
        100px 100px;
    }
  }
}
</style>
