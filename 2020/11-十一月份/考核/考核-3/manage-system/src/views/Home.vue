<template>
  <a-layout class="home">
    <!-- 侧边栏 -->
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="home-logo">
        <router-link to="/home"
          ><img src="@/assets/logo.png" alt="" /><span
            >后台管理系统</span
          ></router-link
        >
      </div>
      <a-menu
        theme="dark"
        mode="inline"
        :openKeys="openKeys"
        @openChange="onOpenChange"
      >
        <a-sub-menu :key="item.id" :index="index" v-for="(item, index) in list">
          <template #title v-if="item.path == 'users'">
            <span
              ><user-outlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'rights'">
            <span
              ><CodeSandboxOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'goods'">
            <span
              ><ShoppingOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'orders'">
            <span
              ><ContainerOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <template #title v-else-if="item.path == 'reports'">
            <span
              ><AreaChartOutlined /><span>{{ item.authName }}</span></span
            >
          </template>
          <a-menu-item
            :key="subitem.id"
            :subindex="subindex"
            v-for="(subitem, subindex) in item.children"
            ><span
              ><appstore-outlined /><router-link
                :to="subitem.path"
                style="color: #fff"
                >{{ subitem.authName }}</router-link
              ></span
            ></a-menu-item
          >
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <!-- 侧边栏 -->
    <a-layout>
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
        <a-button
          style="float: right; margin-top: 10px; margin-right: 10px"
          @click="outLogin"
          >退出</a-button
        >
      </a-layout-header>
      <a-layout-content style="margin: 0 16px">
        <!-- 组件渲染 -->
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
// 引入小图标
import {
  UserOutlined,
  AppstoreOutlined,
  CodeSandboxOutlined,
  ShoppingOutlined,
  ContainerOutlined,
  AreaChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons-vue";
// 引入请求方式
import { httpGet } from "../util/http";
// 引入请求路径
import { rights } from "../api/index";
export default {
  data() {
    return {
      // 折叠
      collapsed: false,
      list: [],
      rootSubmenuKeys: [],
      // 默认打开哪个
      openKeys: [],
    };
  },
  created() {
    this.getRights();
  },
  methods: {
    getRights() {
      httpGet(rights.rightsList)
        .then((response) => {
          //   console.log(response);
          //   成功时的回调
          let { data, meta } = response;
          if (meta.status == 200) {
            this.list = data;
            this.list.forEach((item) => {
              this.rootSubmenuKeys.push(item.id);
              //   console.log(this.rootSubmenuKeys);
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    outLogin() {
      window.sessionStorage.removeItem("token");
      this.$router.push("/login");
    },
    onOpenChange(openKeys) {
      const latestOpenKey = openKeys.find(
        (key) => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    },
  },
  components: {
    UserOutlined,
    AppstoreOutlined,
    CodeSandboxOutlined,
    ShoppingOutlined,
    ContainerOutlined,
    AreaChartOutlined,
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
  height: 100%;
  width: 100%;
}
.home-logo img {
  height: 100%;
}
.home-logo span {
  margin-left: 15px;
  color: #fff;
}
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
</style>