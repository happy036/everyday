<template>
  <AppLayout>
    <div class="container">
      <!--  首页-->
      <HomeCategory />
      <HomeBanner />
    </div>
    <HomeNew />
    <HomeHot />
    <HotBrands />
    <HomeProduct />
    <HomeSpecial />
  </AppLayout>
</template>

<script>
import AppLayout from "@/components/AppLayout";
import HomeCategory from "@/views/Home/components/HomeCategory";
import HomeBanner from "@/views/Home/components/HomeBanner";
import HomeNew from "@/views/Home/components/HomeNew";
import HomeHot from "@/views/Home/components/HomeHot";
import HotBrands from "@/views/Home/components/HotBrands";
import HomeProduct from "@/views/Home/components/HomeProduct";
import HomeSpecial from "@/views/Home/components/HomeSpecial";
export default {
  name: "HomePage",
  components: {
    HomeNew,
    HomeBanner,
    AppLayout,
    HomeCategory,
    HomeHot,
    HotBrands,
    HomeProduct,
    HomeSpecial,
  },
};
</script>

<style scoped lang="less"></style>
