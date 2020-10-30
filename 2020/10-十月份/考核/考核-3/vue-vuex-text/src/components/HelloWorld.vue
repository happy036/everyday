<template>
  <div>
    <button @click="add">增加</button>
    <span>姓名：{{ name }}</span
    ><span>芳龄：{{ age }}</span>
    <p @click="asyncAdd(2)">最爱吃屎了，一天吃{{ count }}次</p>
    <p>一天吃{{ num }}次,吃{{ num2.length }}小时</p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["add"]),
    ...mapActions(["asyncAdd"])
  },
  computed: {
    ...mapState(["name", "age", "count", "sum"]),
    ...mapGetters(["num", "num2"])
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
