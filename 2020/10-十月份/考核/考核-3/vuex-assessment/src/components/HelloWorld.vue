<template>
  <div class="hello">
    <h2>{{ name }}</h2>
    <button @click="changeName">点击改成默认名字</button>
    <input type="text" v-model="aname" @blur="changeOtherName" />
    <p @click="add">{{ count }}</p>
    <span>{{ sum1 }}</span
    ><input type="text" v-model.number="num" /><button @click="asyncAdd(num)">
      走你
    </button>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      aname: "",
      num: ""
    };
  },
  methods: {
    changeOtherName() {
      let bname = this.aname;
      this.$store.commit("changeAname", bname);
      this.aname = "";
    },
    ...mapMutations(["changeName", "add"]),
    ...mapActions(["asyncAdd"])
  },
  computed: {
    ...mapState(["name", "count", "sum"]),
    ...mapGetters(["sum1"])
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
