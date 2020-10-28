<template>
  <div>
    <button @click="handleChange">点我</button>
    <h2>我叫{{ name }}</h2>
    <h2>芳龄{{ age }}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HelloWorld",
  methods: {
    handleChange() {
      this.$store.commit("changeAge");
    }
  },
  computed: {
    ...mapState(["name", "age"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
