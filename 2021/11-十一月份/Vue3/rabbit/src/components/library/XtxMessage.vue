<template>
  <Transition name="down">
    <div class="xtx-message" :style="style[type]" v-if="show">
      <i class="iconfont" :class="style[type].icon"></i>
      <span class="text">{{ text }}</span>
    </div>
  </Transition>
</template>
<script>
import { onMounted, ref } from "vue";

export default {
  name: "XtxMessage",
  props: {
    // 消息提示类型
    type: {
      type: String,
      default: "success",
    },
    // 消息提示内容
    text: {
      type: String,
      default: "",
    },
  },
  setup() {
    const style = {
      // 警告类型的提示
      warn: {
        icon: "icon-warning",
        color: "#E6A23C",
        backgroundColor: "rgb(253, 246, 236)",
        borderColor: "rgb(250, 236, 216)",
      },
      // 错误类型的提示
      error: {
        icon: "icon-shanchu",
        color: "#F56C6C",
        backgroundColor: "rgb(254, 240, 240)",
        borderColor: "rgb(253, 226, 226)",
      },
      // 成功类型的提示
      success: {
        icon: "icon-queren2",
        color: "#67C23A",
        backgroundColor: "rgb(240, 249, 235)",
        borderColor: "rgb(225, 243, 216)",
      },
    };
    // 元素想要执行动画，必须有渲染行为
    // 默认不渲染元素
    const show = ref(false);
    // 组件挂载完成后渲染元素
    onMounted(() => (show.value = true));
    return { style, show };
  },
};
</script>
<style scoped lang="less">
.xtx-message {
  width: 300px;
  height: 50px;
  position: fixed;
  z-index: 9999;
  left: 50%;
  margin-left: -150px;
  top: 25px;
  line-height: 50px;
  padding: 0 25px;
  border: 1px solid #e4e4e4;
  background: #f5f5f5;
  color: #999;
  border-radius: 4px;
  i {
    margin-right: 4px;
    vertical-align: middle;
  }
  .text {
    vertical-align: middle;
  }
}
.down {
  &-enter {
    &-from {
      transform: translate3d(0, -75px, 0);
      opacity: 0;
    }
    &-active {
      transition: all 0.5s;
    }
    &-to {
      transform: none;
      opacity: 1;
    }
  }
}
</style>
