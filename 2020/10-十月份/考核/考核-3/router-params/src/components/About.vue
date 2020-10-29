<template>
  <div>
    <h2>about组件</h2>
    <p>id:{{ id }},name:{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["id", "name"]
};
</script>

<style></style>
