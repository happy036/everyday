<template>
  <AppTopNav></AppTopNav>
  <AppHeader> </AppHeader>
  <app-header-sticky />
  <slot></slot>
  <AppFooter></AppFooter>
</template>

<script>
import AppTopNav from "@/components/AppTopNav";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";
import AppHeaderSticky from "@/components/AppHeaderSticky";
import { useStore } from "vuex";
export default {
  name: "AppLayout",
  setup() {
    // 获取store对象
    const store = useStore();
    // 发送请求获取分类数据
    store.dispatch("category/getCategorys");
  },
  components: {
    AppHeaderSticky,
    AppTopNav,
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped></style>
