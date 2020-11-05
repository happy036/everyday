<template>
  <div>
    <Ref></Ref>
  </div>
</template>

<script>
import Ref from "./components/Ref.vue";

export default {
  name: "App",
  components: { Ref }
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
