<template>
  <div>
    <button @click="changeSex">按按</button>
    <h1>我叫{{ name }},我是一只{{ sex }},我的爱好是{{ hobbies }}</h1>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: {
    // handleChange() {
    //   this.$store.commit("changeSex");
    // }
    ...mapMutations(["changeSex"])
  },
  computed: {
    // name() {
    //   return this.$store.state.name;
    // },
    // hobbies() {
    //   return this.$store.state.hobbies;
    // }
    ...mapState(["name", "hobbies", "sex"])
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
