<template>
  <div class="home-banner">
    <!--  轮播图-->
    <XtxCarousel v-if="banners" :banners="banners" :autoPlay="true" />
  </div>
</template>

<script>
import { ref } from "vue";
import { getBanners } from "@/api/home";
export default {
  name: "HomeBanner",
  setup() {
    const banners = useBanners();
    return {
      banners,
    };
  },
};
// 获取轮播图数据
function useBanners() {
  // 存储轮播图数据
  const banners = ref(null);
  // 获取轮播图数据
  getBanners().then((data) => {
    banners.value = data.result;
  });
  // 返回轮播图数据
  return banners;
}
</script>

<style scoped lang="less">
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;
  .xtx-carousel {
    :deep(.carousel-btn.prev) {
      left: 270px;
    }
    :deep(.carousel-indicator) {
      padding-left: 250px;
    }
  }
}
</style>
