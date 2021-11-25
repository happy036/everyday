// 导入默认产品图片
import defaultItImage from "@/assets/images/200.png";
const lazy = {
  mounted(el, binding) {
    // el指定所在的元素
    // binding.value获取指令的值
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 停止监听
        observer.unobserve(el);
        // 加载图片
        el.src = binding.value;
        // 监听图片加载失败的情况
        el.onerror = function () {
          el.src = defaultItImage;
        };
      }
    });
    // 指定要监听的元素
    observer.observe(el);
  },
};
export default lazy;
