import defaultImage from "@/assets/31.jpg";
const lazy = {
  mounted(el, binding) {
    const observe = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        observe.unobserve(el);
        el.src = binding.value;
        el.error = () => {
          el.src = defaultImage;
        };
        console.log(111);
      }
    });
    observe.observe(el);
  },
};
export default lazy;
