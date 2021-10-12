<template>
  <div>
    <ul>
      <li v-for="item in topics" :key="item.id">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ app }) {
    // console.log(app)
    const {
      data: { data: topics },
    } = await app.$aaa.getTopics('/topics')
    return {
      topics,
    }
  },
}
</script>

<style>
</style>