<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <HomeAside />
      </el-aside>
      <el-container>
        <el-header><HomeHeader /></el-header>
        <el-main><HomeMain /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HomeAside from "@/views/Home/components/HomeAside";
import HomeHeader from "@/views/Home/components/HomeHeader";
import HomeMain from "@/views/Home/components/HomeMain";
export default {
  name: "HomePage",
  components: {
    HomeAside,
    HomeHeader,
    HomeMain,
  },
};
</script>

<style lang="less">
.common-layout .el-header {
  background-color: #ffffff;
  color: var(--el-text-color-primary);
  text-align: center;
  //line-height: 75px;
}

.common-layout .el-footer {
  line-height: 60px;
}

.common-layout .el-aside {
  background-color: #545c64;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 200px;
}

.common-layout .el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}

.common-layout > .el-container {
  margin-bottom: 40px;
  height: 100%;
}

.common-layout .el-container:nth-child(5) .el-aside,
.common-layout .el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.common-layout .el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.common-layout {
  height: 100%;
}
.el-sub-menu__title {
  color: #fff;
}
.el-sub-menu__title:hover {
  background-color: #333333;
}
.el-menu-item {
  color: #fff;
}
.el-menu-item:hover {
  background-color: #333333;
}
.el-menu {
  background-color: #545c64;
  border-right: none;
}
.common-layout .el-main {
  line-height: 0;
}
</style>
