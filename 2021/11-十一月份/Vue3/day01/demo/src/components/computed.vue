<template>
  <div>
    <input type="text" v-model="search" />
    <ul>
      <li v-for="(name, index) in filterNames" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const names = ref([
      "林俊杰",
      "孙燕姿",
      "周杰伦",
      "张惠妹",
      "刘若英",
      "林宥嘉",
      "刘德华",
      "张韶涵",
      "周笔畅",
      "孙楠",
    ]);
    const search = ref("");
    const filterNames = computed(() => {
      return names.value.filter((name) => {
        return name.includes(search.value);
      });
    });
    return {
      //   names,
      search,
      filterNames,
    };
  },
};
</script>

<style>
</style>