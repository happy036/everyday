<template>
  <div>
    <!-- 获取单个DOM对象 -->
    <div ref="divRef">emm。。。</div>
    <!-- 获取一组DOM对象 -->
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        :ref="(el) => (elms[index] = el)"
      >
        {{ item }}
      </li>
    </ul>
    <button @click="onClick">获取DOM对象</button>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated } from "vue";
export default {
  // 获取DOM对象
  setup() {
    const divRef = ref(null);
    onMounted(() => {
      console.log(divRef.value);
    });

    const list = ref(["a", "b", "c"]);
    const elms = ref([]);
    const onClick = () => list.value.push("d");
    onMounted(() => console.log(elms.value));
    onUpdated(() => console.log(elms.value));
    return { divRef, list, elms, onClick };
  },
};
</script>

<style>
</style>