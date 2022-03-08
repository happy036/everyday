<template>
  <form class="xtx-form">
    <div class="user-info">
      <img :src="avatar" alt="" />
      <p>Hi，{{ nickname }} 欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~</p>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input
          class="input"
          type="text"
          placeholder="绑定的手机号"
          v-model="mobileField"
        />
      </div>
      <div class="error" v-if="mobileError">{{ mobileError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-code"></i>
        <input
          class="input"
          type="text"
          placeholder="短信验证码"
          v-model="codeField"
        />
        <span class="code" @click="getMsgCode">{{
          count === 0 ? "发送验证码" : `剩余${count}`
        }}</span>
      </div>
      <div class="error" v-if="codeError">{{ codeError }}</div>
    </div>
    <input type="submit" class="submit" @click="onSubmit" value="立即绑定" />
  </form>
</template>

<script>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
import { code, mobile } from "@/utils/vee-validate-schema";
import { binbMobileAndQQ, getBindQQCode } from "@/api/user";
import Message from "@/components/library/Message";
import useCountDown from "@/hooks/useCountDown";
import useLoginAfter from "@/hooks/useLoginAfter";

export default {
  name: "LoginCallbackBindPhone",
  props: {
    unionId: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const { nickname, avatar } = useQQUserInfo();
    const { handleSubmit, getIsMobileValid, ...rest } = useBindPhoneValidate();
    const { loginSuccessful, loginFail } = useLoginAfter();
    const onSubmit = handleSubmit((values) => {
      // console.log(values);
      binbMobileAndQQ({ ...values, unionId: props.unionId })
        .then(loginSuccessful)
        .catch(loginFail);
    });
    // 获取倒计时
    const { count, start } = useCountDown();
    // 获取手机验证码
    const getMsgCode = async () => {
      // 用户是否输入手机号
      let { isValid, mobile } = await getIsMobileValid();
      // console.log(isValid, mobile);
      // 发送请求获取验证码
      if (isValid) {
        try {
          await getBindQQCode(mobile);
          Message({ type: "success", text: "验证码发送成功" });
          start(60);
        } catch (error) {
          Message({ type: "error", text: "验证码发送失败" });
        }
      }
    };
    return {
      nickname,
      avatar,
      handleSubmit,
      ...rest,
      onSubmit,
      getMsgCode,
      getIsMobileValid,
      count,
    };
  },
};
function useQQUserInfo() {
  const nickname = ref("");
  const avatar = ref("");
  if (window.QC.Login.check()) {
    window.QC.api("get_user_info").success((response) => {
      console.log(response);
      nickname.value = response.data.nickname;
      avatar.value = response.data.figureurl_1;
    });
  }
  return { nickname, avatar };
}
function useBindPhoneValidate() {
  const { handleSubmit } = useForm({
    validationSchema: { mobile, code },
  });
  const {
    value: mobileField,
    errorMessage: mobileError,
    validate: mobileValid,
  } = useField("mobile");
  const getIsMobileValid = async () => {
    let { valid } = await mobileValid();
    return { isValid: valid, mobile: mobileField.value };
  };
  const { value: codeField, errorMessage: codeError } = useField("code");
  return {
    handleSubmit,
    mobileField,
    mobileError,
    codeField,
    codeError,
    getIsMobileValid,
  };
}
</script>

<style scoped lang="less">
.user-info {
  width: 320px;
  height: 70px;
  display: flex;
  background: #f2f2f2;
  align-items: center;
  padding: 0 10px;
  margin: 0 auto 20px;
  img {
    background: #f2f2f2;
    width: 50px;
    height: 50px;
  }
  p {
    padding-left: 10px;
  }
}
.code {
  position: absolute;
  right: 0;
  top: 0;
  line-height: 50px;
  width: 80px;
  color: #999;
  &:hover {
    cursor: pointer;
  }
}
</style>
