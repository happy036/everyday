<template>
  <!--  轮播图组件-->
  <div class="xtx-carousel" @mouseenter="stopAutoPlay" @mouseleave="autoplay">
    <ul class="carousel-body">
      <li
        class="carousel-item"
        :class="{ fade: index === currentIndex }"
        v-for="(item, index) in banners"
        :key="item.id"
      >
        <!--        如果item是数组就表示当前遍历的同类商品数据-->
        <div class="slider" v-if="Array.isArray(item)">
          <RouterLink
            v-for="goods in item"
            :key="goods.id"
            :to="`/goods/${goods.id}`"
          >
            <img :src="goods.picture" alt="" />
            <p class="name ellipsis">{{ goods.name }}</p>
            <p class="price">&yen;{{ goods.price }}</p>
          </RouterLink>
        </div>
        <!--        如果item是对象就表示当前遍历的是普通轮播图数据-->
        <RouterLink :to="item.hrefUrl" v-else>
          <img :src="item.imgUrl" alt="" />
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:" @click="toggle(-1)" class="carousel-btn prev"
      ><i class="iconfont icon-angle-left"></i
    ></a>
    <a href="javascript:" @click="toggle(1)" class="carousel-btn next"
      ><i class="iconfont icon-angle-right"></i
    ></a>
    <div class="carousel-indicator">
      <span
        :class="{ active: index === currentIndex }"
        v-for="(item, index) in banners"
        :key="item.id"
        @click="currentIndex = index"
      ></span>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";
export default {
  name: "XtxCarousel",
  props: {
    banners: {
      type: Array,
    },
    // 设置默认值
    autoPlay: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  setup(props) {
    // 轮播图当前索引
    const currentIndex = ref(0);
    // 存储定时器
    const timer = ref(null);
    // 轮播图切换
    const toggle = (step = 1) => {
      // 计算索引
      const nextIndex = currentIndex.value + step;
      // 如果索引值小于了第一张图片的索引
      if (nextIndex < 0) {
        // 让索引值成为最后一张图片的索引
        currentIndex.value = props.banners.length - 1;
      } else if (nextIndex > props.banners.length - 1) {
        // 让索引值为第一张图片的索引
        currentIndex.value = 0;
      } else {
        // 索引值范围正常
        currentIndex.value = nextIndex;
      }
    };
    // 开启自动轮播
    const autoplay = () => {
      // 判断轮播图是否开启了自动轮播，判断轮播图是否有数据
      if (props.autoPlay && props.banners.length > 1) {
        // 开启
        timer.value = setInterval(toggle, props.duration);
      }
    };
    // 停止自动轮播
    const stopAutoPlay = () => {
      clearInterval(timer.value);
    };
    // 组件挂在完成后开启自动轮播
    onMounted(autoplay);
    // 组件卸载之后停止自动轮播
    onUnmounted(stopAutoPlay);
    return {
      currentIndex,
      toggle,
      autoplay,
      stopAutoPlay,
    };
  },
};
</script>

<style scoped lang="less">
.xtx-carousel {
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel {
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background: #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev {
        left: 20px;
      }
      &.next {
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
.slider {
  display: flex;
  justify-content: space-around;
  padding: 0 40px;
  > a {
    width: 240px;
    text-align: center;
    img {
      padding: 20px;
      width: 230px !important;
      height: 230px !important;
    }
    .name {
      font-size: 16px;
      color: #666;
      padding: 0 40px;
    }
    .price {
      font-size: 16px;
      color: @priceColor;
      margin-top: 15px;
    }
  }
}
</style>
