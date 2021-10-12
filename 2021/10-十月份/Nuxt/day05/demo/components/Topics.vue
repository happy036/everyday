<template>
  <div>
    <ul>
      <li v-for="item in $store.state.topics" :key="item.id">
        <nuxt-link :to="`/detail?id=${item.id}`">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入axios
export default {
  async fetch() {
    const {
      data: { data: topics },
    } = await this.$api.getTopics("/topics");
    this.$store.commit("setTopics", topics);
  },
};
</script>

<style>
</style>