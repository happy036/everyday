<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="increment(10)">同步加</button>
    <button @click="asyncIncrement(20)">异步加</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['count']),
  },
  methods: {
    // increment(add) {
    //   this.$store.commit('increment', add)
    // },
    // asyncIncrement(add) {
    //   this.$store.dispatch('asyncIncrement', add)
    // },
    ...mapMutations(['increment']),
    ...mapActions(['asyncIncrement']),
  },
}
</script>
