<template>
  <div>
    {{ person.name }}
    <button @click="changePerson">provide、inject函数</button>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  setup() {
    const person = inject("person");
    const changePerson = inject("changePerson");
    return { person, changePerson };
  },
};
</script>

<style>
</style>