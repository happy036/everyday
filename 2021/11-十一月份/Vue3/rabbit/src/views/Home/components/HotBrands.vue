<template>
  <HomePanel title="热门品牌" subTitle="国际经典 品质保证">
    <!--  热门品牌组件-->
    <template v-slot:right>
      <a
        href="javascript:"
        class="iconfont icon-angle-left prev"
        @click="toggle(-1)"
        :class="{ disabled: currenIndex === 0 }"
      ></a>
      <a
        href="javascript:"
        class="iconfont icon-angle-right next"
        @click="toggle(1)"
        :class="{ disabled: currenIndex === 1 }"
      ></a>
    </template>
    <template v-slot:default>
      <transition name="fade">
        <div class="box">
          <ul
            class="list"
            :style="{ transform: `translateX(${-currenIndex * 1240}px)` }"
            v-if="brands"
          >
            <li v-for="item in brands" :key="item.id">
              <RouterLink to="/">
                <img :src="item.picture" :alt="item.name" />
              </RouterLink>
            </li>
          </ul>

          <div v-else class="skeleton">
            <xtx-skeleton
              class="item"
              v-for="i in 5"
              :key="i"
              animated="scroll"
              bg="#e4e4e4"
              width="240px"
              height="305px"
            />
          </div>
        </div>
      </transition>
    </template>
  </HomePanel>
</template>

<script>
import HomePanel from "@/views/Home/components/HomePanel";
import { getHomeBrands } from "@/api/home";
import { ref } from "vue";
export default {
  name: "HotBrands",
  setup() {
    const brands = ref();
    getHomeBrands(10).then((data) => {
      brands.value = data.result;
    });
    return {
      brands,
      ...useToggle(),
    };
  },
  components: {
    HomePanel,
  },
};
function useToggle() {
  // 切换索引;
  const currenIndex = ref(0);
  // 控制切换索引;
  const toggle = (step) => {
    // 计算索引
    const nextIndex = currenIndex.value + step;
    // 控制索引返回
    if (nextIndex < 0 || nextIndex > 1) return;
    // 如果索引在正常范围就更改索引
    currenIndex.value = nextIndex;
  };
  return { toggle, currenIndex };
}
</script>

<style scoped lang="less">
.home-panel {
  background: #f5f5f5;
}
.iconfont {
  width: 20px;
  height: 20px;
  background: #ccc;
  color: #fff;
  display: inline-block;
  text-align: center;
  margin-left: 5px;
  background: @xtxColor;
  &::before {
    font-size: 12px;
    position: relative;
    top: -2px;
  }
  &.disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}
.box {
  display: flex;
  width: 100%;
  height: 345px;
  overflow: hidden;
  padding-bottom: 40px;
  .list {
    width: 200%;
    display: flex;
    transition: all 1s;
    li {
      margin-right: 10px;
      width: 240px;
      &:nth-child(5n) {
        margin-right: 0;
      }
      img {
        width: 240px;
        height: 305px;
      }
    }
  }
  .skeleton {
    width: 100%;
    display: flex;
    .item {
      margin-right: 10px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>
