import { useIntervalFn } from "@vueuse/core";
import { ref } from "vue";

export default function useCountDown() {
  // 此方法和原生JS中的setInterval的作用是一样的
  // pause 清除定时器
  // resume 重新开启定时器
  // isActive 定时器是否正在执行
  // 定时器不能立即执行，在验证码发送成功以后才执行
  const count = ref(0);

  const { pause, resume, isActive } = useIntervalFn(
    () => {
      if (count.value <= 0) {
        pause();
      } else {
        count.value = count.value - 1;
      }
    },
    1000,
    {
      immediate: false,
    }
  );
  // 外部调用此方法开始倒计时
  const start = (value) => {
    if (!isActive.value) {
      console.log("start");
      count.value = value;
      resume();
    }
  };
  return {
    count,
    start,
    isActive,
  };
}
