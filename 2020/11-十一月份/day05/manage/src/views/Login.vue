<template>
  <a-layout>
    <a-layout-header></a-layout-header>
    <a-layout-content>
      <a-row>
        <a-col :span="6" :offset="9">
          <!-- 表单 -->
          <a-form>
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
                  <a-tab-pane key="1" tab="账号密码登录">
                    <a-form-item :wrapperCol="{ span: 24 }">
                      <a-input size="large" placeholder="Username">
                        <template #prefix
                          ><UserOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input>
                    </a-form-item>
                    <a-form-item size="large" :wrapperCol="{ span: 24 }">
                      <a-input-password
                        size="large"
                        type="password"
                        placeholder="Password"
                      >
                        <template #prefix
                          ><LockOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input-password>
                    </a-form-item>
                  </a-tab-pane>
                  <a-tab-pane key="2" tab="Tab 2" force-render>
                    <a-form-item :wrapperCol="{ span: 24 }">
                      <a-input size="large" placeholder="Username">
                        <template #prefix
                          ><MobileOutlined style="color: rgba(0, 0, 0, 0.25)"
                        /></template>
                      </a-input>
                    </a-form-item>
                    <a-row :gutter="16">
                      <a-col :span="16" class="gutter-row">
                        <a-form-item :wrapperCol="{ span: 24 }">
                          <a-input size="large" placeholder="Username">
                            <template #prefix
                              ><MailOutlined style="color: rgba(0, 0, 0, 0.25)"
                            /></template>
                          </a-input>
                        </a-form-item>
                      </a-col>
                      <a-col :span="8" class="gutter-row">
                        <a-button size="large" block style="padding: 0"
                          >获取验证码</a-button
                        >
                      </a-col>
                    </a-row>
                  </a-tab-pane>
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

            <a-row>
              <a-col :span="24">
                <a-form-item :wrapperCol="{ span: 24 }">
                  <a-button type="primary" size="large" block> 确定 </a-button>
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
          <!-- 表单 -->
        </a-col>
      </a-row>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
import {
  UserOutlined,
  LockOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons-vue";
export default {
  components: {
    UserOutlined,
    LockOutlined,
    MobileOutlined,
    MailOutlined,
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
</style>