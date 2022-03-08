<template>
  <form class="xtx-form">
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-user"></i>
        <input
          class="input"
          type="text"
          v-model="accountField"
          placeholder="请输入用户名"
        />
      </div>
      <div class="error" v-if="accountError">{{ accountError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-phone"></i>
        <input
          class="input"
          type="text"
          v-model="mobileField"
          placeholder="请输入手机号"
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
          v-model="codeField"
          placeholder="请输入验证码"
        />
        <span class="code" @click="getMsgCode">{{
          isActive ? `剩余${count}秒` : "发送验证码"
        }}</span>
      </div>
      <div class="error" v-if="codeError">{{ codeError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input
          class="input"
          type="password"
          v-model="passwordField"
          placeholder="请输入密码"
        />
      </div>
      <div class="error" v-if="passwordError">{{ passwordError }}</div>
    </div>
    <div class="xtx-form-item">
      <div class="field">
        <i class="icon iconfont icon-lock"></i>
        <input
          class="input"
          type="password"
          v-model="rePasswordField"
          placeholder="请确认密码"
        />
      </div>
      <div class="error" v-if="rePasswordError">{{ rePasswordError }}</div>
    </div>
    <input type="submit" class="submit" @click="onSubmit" value="立即绑定" />
  </form>
</template>

<script>
import { useField, useForm } from "vee-validate";
import {
  checkUserAccount,
  code,
  mobile,
  password,
  rePassword,
} from "@/utils/vee-validate-schema";
import useCountDown from "@/hooks/useCountDown";
import { createNewAccountBindQQ, getRegisterMsgCode } from "@/api/user";
import Message from "@/components/library/Message";
import useLoginAfter from "@/hooks/useLoginAfter";

export default {
  name: "LoginCallbackBindPatch",
  props: {
    unionId: {
      type: String,
    },
  },
  setup(props) {
    const { loginSuccessful, loginFail } = useLoginAfter();
    const { handleSubmit, getMobileIsValidate, ...rest } =
      useBindNewRegisteredAccount();
    // 获取倒计时方法
    const { count, start, isActive } = useCountDown();
    // 获取手机验证码
    const getMsgCode = () => {
      // 如果正在倒计时，组织程序运行
      if (isActive.value) return;
      // 验证手机号
      getMobileIsValidate()
        .then(({ isValid, mobile }) => {
          // 用户是否输入手机号
          if (isValid) {
            // 向服务器端发送请求获取验证码
            return getRegisterMsgCode(mobile);
          }
        })
        .then(() => {
          Message({ type: "success", text: "验证码发送成功" });
          start(60);
        })
        .catch(() => {
          Message({ type: "error", text: "验证码发送失败" });
        });
    };
    // 处理表单提交
    const onSubmit = handleSubmit((values) => {
      console.log(values);
      createNewAccountBindQQ({
        unionId: props.unionId,
        account: values.checkUserAccount,
        mobile: values.mobile,
        code: values.code,
        password: values.password,
      })
        .then(loginSuccessful)
        .catch(loginFail);
    });
    return {
      handleSubmit,
      ...rest,
      onSubmit,
      getMsgCode,
      count,
      isActive,
    };
  },
};
function useBindNewRegisteredAccount() {
  // 创建表单验证对象
  const { handleSubmit } = useForm({
    validationSchema: {
      checkUserAccount,
      mobile,
      code,
      password,
      rePassword,
    },
  });
  const { value: accountField, errorMessage: accountError } =
    useField("checkUserAccount");
  const {
    value: mobileField,
    errorMessage: mobileError,
    validate: validateMobile,
  } = useField("mobile");
  // 单独验证手机号
  const getMobileIsValidate = async () => {
    let { valid } = await validateMobile();
    return { isValid: valid, mobile: mobileField.value };
  };
  const { value: codeField, errorMessage: codeError } = useField("code");
  const { value: passwordField, errorMessage: passwordError } =
    useField("password");
  const { value: rePasswordField, errorMessage: rePasswordError } =
    useField("rePassword");
  return {
    handleSubmit,
    accountField,
    accountError,
    mobileField,
    mobileError,
    codeField,
    codeError,
    passwordField,
    passwordError,
    rePasswordField,
    rePasswordError,
    getMobileIsValidate,
  };
}
</script>

<style scoped lang="less">
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
