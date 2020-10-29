<template>
  <div>
    <h2>home组件</h2>
    <!-- <p>{{ $route.params.id }}</p> -->
    <p>ID:{{ id }} {{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style></style>
