<template>
  <div>
    <Computed></Computed>
  </div>
</template>

<script>
// import Ref from "./components/Ref.vue";
import Computed from "./components/Computed";
export default {
  name: "App",
  components: { Computed }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
