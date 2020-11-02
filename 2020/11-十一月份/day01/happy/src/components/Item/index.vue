<template>
  <div>
    <h1>item</h1>
  </div>
</template>

<script>
// import {mapActions} from "vuex"
export default {
  created() {
    this.$store.dispatch("getData");
  }
};
</script>

<style></style>
