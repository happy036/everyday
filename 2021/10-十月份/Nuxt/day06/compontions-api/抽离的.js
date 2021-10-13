import { defineComponent, ref } from "@vue/composition-api";

// 代码抽离
const counter = (ref: Function) => {
    const count = ref(0);
    const increment = () => count.value++;
    const decrement = () => count.value--;
    return {
        count,
        increment,
        decrement,
    };
};
export default defineComponent({
    setup() {
        return {
            ...counter(ref),
        };
    },
});