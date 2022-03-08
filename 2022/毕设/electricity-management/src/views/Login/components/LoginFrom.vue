<template>
  <div class="login-tabs">
    <ul class="tabs-list">
      <li @click="isLogin = false" :class="{ active: !isLogin }">
        <h2>
          <span>Login</span>
        </h2>
      </li>
      <li @click="isLogin = true" :class="{ active: isLogin }">
        <h2>
          <span>Register</span>
        </h2>
      </li>
    </ul>
    <div class="form">
      <!--      登录-->
      <div class="login-show">
        <template v-if="!isLogin">
          <form @submit="onLoginFormSubmit">
            <div class="form-item">
              <div>
                <input
                  type="text"
                  class="name"
                  v-model="usernameField"
                  placeholder="Username"
                  required
                />
              </div>
              <div class="error" v-if="usernameError">
                <el-icon color="#d91e00"><Warning /></el-icon
                >{{ usernameError }}
              </div>
            </div>
            <div class="form-item">
              <input
                type="password"
                class="password"
                v-model="passwordField"
                placeholder="Password"
                required
              />
              <div class="error" v-if="passwordError">
                <el-icon color="#d91e00"><Warning /></el-icon
                >{{ passwordError }}
              </div>
            </div>
            <input type="submit" value="LOGIN" />
          </form>
        </template>
        <template v-if="isLogin">
          <!--        注册-->
          <form @submit="onRegisterFormSubmit">
            <div class="form-item">
              <input
                type="text"
                class="name"
                placeholder="Username"
                required
                v-model="userNameField"
              />
              <div class="error" v-if="userNameError">
                <el-icon color="#d91e00"><Warning /></el-icon
                >{{ userNameError }}
              </div>
            </div>
            <div class="form-item">
              <input
                type="text"
                class="mobile"
                placeholder="Mobile"
                required
                v-model="mobileField"
              />
              <div class="error" v-if="mobileError">
                <el-icon color="#d91e00"><Warning /></el-icon>{{ mobileError }}
              </div>
            </div>
            <div class="form-item">
              <input
                type="text"
                class="email"
                placeholder="Email"
                required
                v-model="emailField"
              />
              <div class="error" v-if="emailError">
                <el-icon color="#d91e00"><Warning /></el-icon>{{ emailError }}
              </div>
            </div>
            <div class="form-item">
              <input
                type="password"
                class="password"
                placeholder="Password"
                v-model="bpasswordField"
                required
              />
              <div class="error" v-if="bpasswordError">
                <el-icon color="#d91e00"><Warning /></el-icon
                >{{ bpasswordError }}
              </div>
            </div>
            <input type="submit" value="SIGN UP" />
          </form>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { username, password, mobile, email } from "@/utils/vee-validate-schema";
import { useField, useForm } from "vee-validate";
import { Warning } from "@element-plus/icons-vue/dist/index.mjs";
import { login, register } from "@/api/users";
import useLoginAfter from "@/hooks/LoginAfter";
import { ElMessage } from "element-plus";
import router from "@/router";
export default {
  name: "LoginFrom",
  setup() {
    const isLogin = ref(false);
    const { loginSuccessful, loginFailed } = useLoginAfter();
    // 登录
    const { loginFormSubmit, ...loginForm } = loginFormValidate();
    const onLoginFormSubmit = loginFormSubmit(({ username, password }) => {
      // 发送请求
      login({ username, password }).then(loginSuccessful).catch(loginFailed);
    });
    // 注册
    const { registerFormSubmit, ...registerForm } = registerFormValidate();
    const onRegisterFormSubmit = registerFormSubmit(
      ({ username, password, mobile, email }) => {
        register({ username, password, mobile, email }).then((data) => {
          router.push("/home").then(() => {
            // 登录成功之后的提示信息
            ElMessage({
              message: data.msg,
              type: "success",
            });
          });
        });
      }
    );
    return {
      isLogin,
      ...loginForm,
      onLoginFormSubmit,
      ...registerForm,
      onRegisterFormSubmit,
    };
  },
  components: {
    Warning,
  },
};
// 登录表单验证
function loginFormValidate() {
  // 创建表单验证对象
  const { handleSubmit: loginFormSubmit } = useForm({
    validationSchema: {
      username,
      password,
    },
  });
  // 验证用户名
  const { value: usernameField, errorMessage: usernameError } =
    useField("username");
  // 验证密码
  const { value: passwordField, errorMessage: passwordError } =
    useField("password");
  return {
    usernameField,
    usernameError,
    passwordField,
    passwordError,
    loginFormSubmit,
  };
}
// 注册表单验证
function registerFormValidate() {
  // 创建表单验证对象
  const { handleSubmit: registerFormSubmit } = useForm({
    validationSchema: {
      username,
      mobile,
      password,
      email,
    },
  });
  // 验证用户名
  const { value: userNameField, errorMessage: userNameError } =
    useField("username");
  // 验证手机号
  const { value: mobileField, errorMessage: mobileError } = useField("mobile");
  // 验证密码
  const { value: bpasswordField, errorMessage: bpasswordError } =
    useField("password");
  // 验证QQ邮箱
  const { value: emailField, errorMessage: emailError } = useField("email");
  return {
    registerFormSubmit,
    userNameField,
    userNameError,
    mobileField,
    mobileError,
    bpasswordField,
    bpasswordError,
    emailField,
    emailError,
  };
}
</script>

<style scoped lang="less">
.login-tabs {
  width: 570px;
  background-color: #fff;
  margin: 0 auto;
  position: absolute;
  top: 346px;
  right: 290px;
}
.tabs-list {
  list-style: none;
  text-align: center;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  width: 50%;
  color: #fff;
  background-color: #8e44ad;
}
.login-show {
  padding: 2em 3em;
  input.name {
    background: url(../../../assets/images/name.png) no-repeat 98% 67%;
    border: none;
  }
  input.password {
    background: url(../../../assets/images/password.png) no-repeat 98% 67%;
  }
  input.mobile {
    background: url(../../../assets/images/password.png) no-repeat 98% 67%;
  }
  input.email {
    background: url(../../../assets/images/email.png) no-repeat 98% 67%;
  }
  input[type="text"],
  input[type="password"] {
    outline: none;
    font-size: 1.5em;
    color: #333;
    padding: 10px 30px 10px 10px;
    width: 100%;
    border: none;
    border-bottom: 2px dashed rgba(123, 58, 150, 0.36);
    margin-bottom: 0;
  }
  input[type="text"]:focus,
  input[type="password"]:focus {
    border-bottom-style: solid;
  }
  input[type="submit"] {
    font-size: 1rem;
    width: 100%;
    color: #ffffff;
    background: #8e44ad;
    border: 3px solid #8e44ad;
    //outline: none;
    cursor: pointer;
    padding: 7px 20px;
  }
  input[type="submit"]:hover {
    background: #ffffff;
    color: #8e44ad;
    border-color: #8e44ad;
    transition: 0.5s all ease;
  }
}
.active {
  background-color: #ffffff;
  color: #8e44ad;
  transition: all 0.3s ease-out;
}
.form-item {
  height: 88px;
}
.error {
  color: #cf4444;
}
</style>
