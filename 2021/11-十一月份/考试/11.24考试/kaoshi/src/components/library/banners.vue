<template>
  <div class="carousel">
    <ul>
      <li
        class="active"
        v-for="index in contents"
        :style="{ backgroundColor: colors[currentIndex] }"
        :key="index"
        @mouseleave="bannersGo"
        @mouseenter="bannersStop"
      >
        {{ contents[currentIndex] }}
      </li>
    </ul>
    <div class="points">
      <span
        :class="{ active: index === currentIndex + 1 }"
        v-for="index in contents"
        :key="index"
        @click="aaa(index)"
        @mouseleave="bannersGo"
        @mouseenter="bannersStop"
      ></span>
    </div>
    <img v-lazy="image" />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
export default {
  name: "banners",
  props: {
    autoPlay: {
      typeof: Boolean,
      default: false,
    },
    duration: {
      typeof: Number,
      default: 3000,
    },
  },
  setup(props) {
    const contents = [1, 2, 3, 4, 5];
    const colors = ["#dd99ff", "#99c2ff", "#99ffeb", "#ffe699", "#ff99c2"];
    const image = ref(
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Ffile02.16sucai.com%2Fd%2Ffile%2F2014%2F0829%2Fb871e1addf5f8e96f3b390ece2b2da0d.jpg&refer=http%3A%2F%2Ffile02.16sucai.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640340275&t=668ee4174ca29b3c7ab3fcd7a1a8342e"
    );
    // 存储索引
    const currentIndex = ref(0);
    const bannersPlay = (step = 1) => {
      const nextIndex = currentIndex.value + step;
      if (nextIndex > contents.length - 1) {
        currentIndex.value = 0;
      } else {
        currentIndex.value = nextIndex;
      }
    };
    const timer = ref(null);
    const bannersGo = () => {
      if (props.autoPlay && contents.length > 1) {
        timer.value = setInterval(bannersPlay, props.duration);
      }
    };

    const bannersStop = () => {
      clearInterval(timer.value);
    };
    const aaa = (index) => {
      currentIndex.value = index - 1;
      console.log(currentIndex, index);
    };
    onMounted(bannersGo);
    return {
      contents,
      colors,
      currentIndex,
      bannersGo,
      bannersStop,
      aaa,
      image,
    };
  },
};
</script>

<style scoped>
.carousel {
  width: 600px;
  height: 300px;
  margin: 20px auto 0 auto;
  position: relative;
}
.carousel ul {
  position: relative;
  height: 300px;
}
.carousel ul li {
  height: 300px;
  width: 600px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  opacity: 0;
}
.carousel ul li.active {
  z-index: 2;
  opacity: 1;
}
.carousel .points {
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 20px;
  z-index: 3;
}

.carousel .points span {
  width: 10px;
  height: 10px;
  background-color: #333;
  display: inline-block;
  margin: 0 4px;
  border-radius: 6px;
  cursor: pointer;
}
.carousel .points span.active {
  background: #fff;
}
img {
  margin-top: 500px;
  width: 100px;
  height: 100px;
}
</style>
