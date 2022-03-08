<template>
  <el-row class="tac">
    <el-col>
      <h5 class="mb-2">电商后台管理系统</h5>
      <el-menu class="el-menu-vertical-demo" router :unique-opened="true">
        <el-menu-item index="/home">
          <el-icon><HomeFilled /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><User /></el-icon>
            <span>用户管理</span>
          </template>
          <el-menu-item index="/user/userList"> 用户列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><ShoppingBag /></el-icon>
            <span>商品管理</span>
          </template>
          <el-menu-item index="/goods/goodsList">商品列表</el-menu-item>
          <el-menu-item index="/goods/goodsClass">商品分类</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><Document /></el-icon>
            <span>订单管理</span>
          </template>
          <el-menu-item index="4-1">订单列表</el-menu-item>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon><Histogram /></el-icon>
            <span>数据统计</span>
          </template>
          <el-menu-item index="5-1">数据报表</el-menu-item>
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {
  HomeFilled,
  ShoppingBag,
  User,
  Document,
  Histogram,
} from "@element-plus/icons-vue";
import { ref } from "vue";
export default {
  name: "HomeAside",
  components: {
    HomeFilled,
    ShoppingBag,
    User,
    Document,
    Histogram,
  },
  setup() {
    const active = ref(1);
    return {
      active,
    };
  },
};
</script>

<style scoped>
.mb-2 {
  color: #fff;
  line-height: 0;
  font-size: 20px;
}
el-menu-item {
  color: #fff;
}
/*.el-sub-menu :hover {*/
/*  background-color: #333;*/
/*}*/
</style>
