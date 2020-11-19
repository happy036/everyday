<template>
  <a-layout>
    <a-layout-header></a-layout-header>
    <a-layout-content>
      <!-- 登录框 -->
      <a-row>
        <a-col :span="24">
          <!-- 表单 -->
          <a-form ref="ruleForm" :model="form" :rules="rules">
            <!-- 登录标题 -->
            <a-row class="login-title">
              <a-col :span="24">
                <h2><img src="../assets/logo.png" alt="" /> Manage System</h2>
                <span>Manage System是电商后台管理系统</span>
              </a-col>
            </a-row>
            <!-- 登录标题 -->

            <!-- 登录方式 -->
            <a-row class="login-tab">
              <a-col :span="24">
                <a-tabs :tabBarStyle="{ textAlign: 'center' }">
                  <!-- 账号密码登录 -->
                  <a-tab-pane key="1" tab="账号密码登录">
                    <a-form-item :wrapperCol="{ span: '24' }" name="username">
                      <a-input
                        size="large"
                        type="username"
                        placeholder="请输入用户名"
                        v-model:value="form.username"
                      >
                        <template #prefix
                          ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input>
                    </a-form-item>
                    <a-form-item :wrapperCol="{ span: '24' }" name="password">
                      <a-input-password
                        size="large"
                        type="password"
                        placeholder="请输入密码"
                        v-model:value="form.password"
                      >
                        <template #prefix
                          ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input-password>
                    </a-form-item>
                  </a-tab-pane>
                  <!-- 账号密码登录 -->

                  <!-- 手机号登录 -->
                  <a-tab-pane key="2" tab="手机号登录" force-render>
                    <a-form-item :wrapperCol="{ span: '24' }">
                      <a-input size="large" placeholder="请输入手机号">
                        <template #prefix
                          ><MobileOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input>
                    </a-form-item>
                    <a-row :gutter="16">
                      <a-col class="gutter-row" :span="16">
                        <a-form-item :wrapperCol="{ span: '24' }">
                          <a-input size="large" placeholder="验证码">
                            <template #prefix
                              ><MailOutlined style="color: rgba(0, 0, 0, 0.25)"
                            /></template>
                          </a-input>
                        </a-form-item>
                      </a-col>
                      <a-col class="gutter-row" :span="8">
                        <a-button size="large" block>获取验证码</a-button>
                      </a-col>
                    </a-row>
                  </a-tab-pane>
                  <!-- 手机号登录 -->
                </a-tabs>
              </a-col>
            </a-row>
            <!-- 登录方式 -->

            <!-- 忘记密码？ -->
            <a-row>
              <a-col :span="24">
                <a-checkbox> 自动登录 </a-checkbox>
                <router-link to="#" style="float: right">忘记密码</router-link>
              </a-col>
            </a-row>
            <!-- 忘记密码？ -->

            <!-- 确定按钮 -->
            <a-row style="margin-top: 24px">
              <a-col :span="24">
                <a-form-item :wrapperCol="{ span: '24' }">
                  <a-button size="large" block type="primary" @click="onSubmit">
                    确定
                  </a-button>
                </a-form-item>
              </a-col>
            </a-row>
            <!-- 确定按钮 -->

            <!-- 其他登录方式 -->
            <a-row>
              <a-col :span="24">
                <span>其他登录方式</span>
                <AlipayCircleOutlined class="item" />
                <TaobaoCircleOutlined class="item" />
                <WeiboCircleOutlined class="item" />
                <router-link to="#" style="float: right">注册账户</router-link>
              </a-col>
            </a-row>
            <!-- 其他登录方式 -->
          </a-form>
          <!-- 表单 -->
        </a-col>
      </a-row>
      <!-- 登录框 -->
    </a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>
</template>

<script>
// 引入小图标
import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  MailOutlined,
  AlipayCircleOutlined,
  TaobaoCircleOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons-vue";
// 引入全局提示消息框
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4~16之间", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在6~16之间", trigger: "blur" },
        ],
      },
    };
  },
  components: {
    UserOutlined,
    LockOutlined,
    MobileOutlined,
    MailOutlined,
    AlipayCircleOutlined,
    TaobaoCircleOutlined,
    WeiboCircleOutlined,
  },
  methods: {
    onSubmit() {
      // 让这个表单域进行校验
      this.$refs.ruleForm
        .validate()
        .then(() => {
          // console.log(this);
          // console.log("values", this.form);
          // 收集数据
          let pramas = {
            username: this.form.username,
            password: this.form.password,
          };
          // 发起请求
          this.$axios
            .post("/login", pramas)
            .then((response) => {
              console.log(response);
              let { data, meta } = response.data;
              // message.success(meta.msg);
              if (meta.status == 400) {
                return message.error(meta.msg);
              }
              if (meta.status == 200) {
                message.success(meta.msg);
                window.sessionStorage.setItem("token", data.token);
                this.$router.push("/home");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>

<style scoped>
.ant-layout {
  height: 100%;
  background-image: url(../assets/image/01.svg);
}
.ant-layout-header {
  background-color: transparent;
}
.ant-form {
  width: 365px;
  margin: 0 auto;
}
.login-title {
  text-align: center;
}
.login-title h2 {
  font-size: 33px;
  color: rgba(0, 0, 0, 0.85);
  font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
  font-weight: 600;
  position: relative;
  top: 2px;
}
.login-title img {
  height: 44px;
}
.login-title span {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 12px;
}
.item {
  font-size: 24px;
  margin: 0 5px;
  position: relative;
  top: 3px;
  color: rgba(0, 0, 0, 0.2);
}
.item:hover {
  color: #1890ff;
}
</style>