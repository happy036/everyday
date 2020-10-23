<template>
  <div class="total">
    <span>总价：{{ price }}</span>
    <button>结算</button>
  </div>
</template>

<script>
export default {
  props: ["list"],
  // 计算总价
  computed: {
    price() {
      let sum = 0;
      this.list.forEach(ele => {
        sum += ele.num * ele.price;
      });
      return sum;
    }
  }
};
</script>

<style>
</style>