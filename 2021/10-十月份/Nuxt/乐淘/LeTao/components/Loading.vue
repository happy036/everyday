<template>
  <van-overlay :show="loading" class="loading" z-index="10">
    <van-loading color="#fff" v-show="loading" :vertical="true"
      >加载中...</van-loading
    >
  </van-overlay>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    start() {
      console.log(1);
      this.loading = true;
    },
    finish() {
      console.log(2);
      this.loading = false;
    },
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>