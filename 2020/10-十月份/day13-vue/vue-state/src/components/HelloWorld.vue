<template>
  <div>
    <button @click="changeAge">点我</button>
    <h2 @click="changeName(bname)">我叫{{ name }}</h2>
    <h2>芳龄{{ age }}</h2>
    <h2 @click="add">我最爱吃屎了，一天吃{{ num }}次</h2>
    <h2 @click="asyncAdd2(2)">一天吃{{ sum }}</h2>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      bname: "范狗"
    };
  },
  methods: {
    // handleChange() {
    //   this.$store.commit("changeAge");
    // },
    // handleOtherChange() {
    //   let aname = this.bname;
    //   this.$store.commit("changeName", aname);
    // }
    ...mapMutations(["changeAge", "changeName", "add"]),
    ...mapActions(["asyncAdd2"])
  },
  computed: {
    ...mapState(["name", "age", "sum"]),
    ...mapGetters(["num"])
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
