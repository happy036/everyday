<template>
  <div>
    <h1>分模块使用</h1>
    <h3>index模块中的随机数:{{ $store.state.randomNum }}</h3>
    <h3>todolist模块中的数组:{{ $store.state.todolist.list }}</h3>
    <button @click="increment">新增随机数</button>
  </div>
</template>

<script>
export default {
  methods: {
    increment() {
      const randomNum = this.getRandom(0, 10);
      this.$store.commit("setNum", randomNum);
      this.$store.commit("todolist/add", randomNum);
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1));
    },
  },
};
</script>

<style>
</style>