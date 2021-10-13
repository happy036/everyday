<template>
  <div>
    <h1>count:{{ count }}</h1>
    <button @click="increment">increment</button>
    <button @click="deIncrement">deIncrement</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class PageIndex extends Vue {
  // msg: string = "hello";
  count: number = 0;
  increment() {
    this.count++;
  }
  deIncrement() {
    this.count--;
  }
}
</script>
