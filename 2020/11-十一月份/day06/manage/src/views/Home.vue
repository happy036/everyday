<template>
  <!-- home页面start -->
  <a-layout class="home">
    <!-- 侧边栏start -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="home-logo">
        <router-link to="/home">
          <img src="@/assets/logo.png" alt="" /><span>后台管理系统</span>
        </router-link>
      </div>
      <a-menu theme="dark" mode="inline">
        <a-sub-menu key="sub1">
          <template #title>
            <span><user-outlined /><span>用户管理</span></span>
          </template>
          <a-menu-item key="3"
            ><appstore-outlined />
            <span
              ><router-link to="/userlist">用户列表</router-link></span
            ></a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- 侧边栏end -->

    <!-- 内容区域start -->
    <a-layout>
      <!-- 内容区域头部start -->
      <a-layout-header style="background: #fff; padding: 0">
        <menu-unfold-outlined
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />
        <menu-fold-outlined
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        />

        <a-button @click="delOut" style="float: right; margin: 16px 24px"
          >退出</a-button
        >
      </a-layout-header>
      <!-- 内容区域end -->

      <!-- 内容区域内容部分start -->
      <a-layout-content style="margin: 0 16px">
        <!-- 组件渲染start -->
        <router-view></router-view>
        <!-- 组件渲染end -->
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
      <!-- 内容区域内容部分end -->
    </a-layout>
    <!-- 内容区域end -->
  </a-layout>
  <!-- home页面end -->
</template>

<script>
// 引入小图标
import {
  AppstoreOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    delOut() {
      window.sessionStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
  components: {
    AppstoreOutlined,
    UserOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
};
</script>

<style>
.home {
  height: 100%;
}
.home-logo {
  height: 32px;
  margin: 16px;
  overflow: hidden;
}

.home-logo a {
  display: block;
  width: 100%;
  height: 100%;
}

.home-logo img {
  height: 100%;
}

.home-logo span {
  color: #fff;
  margin-left: 15px;
}

.ant-layout-sider-collapsed .home-logo span {
  display: none;
}

.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>