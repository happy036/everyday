<template>
  <div>
    <h2>关于信息</h2>
    <span>id:{{ id }}{{ name }}</span>
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style></style>
