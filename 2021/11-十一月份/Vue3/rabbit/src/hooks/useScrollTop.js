import { onMounted, onUnmounted, ref } from "vue";
export default function useScrollTop() {
  // 存储滚高距离
  const scrollTop = ref(0);
  // 滚动事件的处理函数
  const onScrollHandler = () => {
    scrollTop.value = document.documentElement.scrollTop;
  };
  // 组件挂载完成后
  onMounted(() => {
    // 为window添加滚动事件
    window.addEventListener("scroll", onScrollHandler);
  });
  // 组件卸载完成后
  onUnmounted(() => {
    // 为window移除滚动事件
    window.removeEventListener("scroll", onScrollHandler);
  });
  return scrollTop;
}
