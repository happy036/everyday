<template>
  <div>
    <p>{{ name }} | Son.vue</p>
    <p>{{ msg }} | Son.vue</p>
    <button @click="onChangeMsg">Son按钮</button>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["name"],
  setup(props, { emit }) {
    // 父传子
    const msg = computed(() => props.name);
    // 子传父
    const onChangeMsg = () => {
      emit("onChangeMsg", "changed msg from children");
    };
    return {
      msg,
      onChangeMsg,
    };
  },
};
</script>

<style>
</style>