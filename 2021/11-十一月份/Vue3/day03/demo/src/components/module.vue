<template>
  <div>
    {{ $store.state["a"].name }}
    {{ $store.state["b"].name }}
    {{ $store.getters["a/newName"] }}
    {{ $store.getters["b/newName"] }}
    <button @click="$store.commit('a/updateName')">moudle</button>
    <button @click="$store.commit('b/updateName')">moudle2</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    console.log(store.state.a.name);
    console.log(store.state.b.name);
  },
};
</script>

<style></style>
