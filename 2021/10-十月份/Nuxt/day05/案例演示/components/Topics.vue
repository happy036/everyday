<template>
  <div>
    <ul>
      <li v-for="item in $store.state.topics" :key="item.id">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
// 引入axios
import axios from 'axios'
export default {
  async fetch() {
    const {
      data: { data: topics },
    } = await axios.get('https://cnodejs.org/api/v1/topics')
    this.$store.commit('setTopics', topics)
  },
}
</script>

<style>
</style>