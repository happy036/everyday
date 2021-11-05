<template>
  <div>
    <p>{{ name }}</p>
    <p>{{ msg }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["name"],
  setup(props) {
    const msg = computed(() => props.name);
    return {
      msg,
      //   name2: props.name,
    };
  },
};
</script>

<style>
</style>