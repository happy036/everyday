<template>
  <div class="left">
    <div class="left-one">
      <el-icon :size="30"><Expand /></el-icon>
    </div>
    <div class="left-two">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in breadList"
          :key="item.path"
          :to="item.path"
          >{{ item.meta.title }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
  </div>
  <div class="right">
    <el-button type="primary" plain size="large" @click="loginOut"
      >退出登录</el-button
    >
  </div>
</template>

<script>
import { Expand } from "@element-plus/icons-vue";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  name: "HomeHeader",
  components: {
    Expand,
  },
  setup() {
    // 面包屑
    const breadList = ref([]);
    const route = useRoute();
    const getBreadcrumb = () => {
      let matched = route.matched.filter((item) => item.name);
      const first = matched[0];
      if (
        first &&
        first.name.trim().toLocaleLowerCase() !== "home".toLocaleLowerCase()
      ) {
        matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
      }
      breadList.value = matched;
    };
    onMounted(getBreadcrumb);
    watch(route, () => {
      getBreadcrumb();
    });
    const router = useRouter();
    const loginOut = () => {
      // 删除token
      window.sessionStorage.removeItem("dsgl");
      // 跳转页面到Login
      router.push("/login");
    };
    return {
      breadList,
      loginOut,
    };
  },
};
</script>

<style scoped lang="less">
.left div {
  float: left;
}
.left-one {
  line-height: 75px;
}
.left-two {
  padding-top: 18px;
  padding-left: 10px;
}
.el-breadcrumb {
  font-size: 19px;
}
.right {
  float: right;
  margin-top: 11px;
}
</style>
