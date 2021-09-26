<template>
  <div>
    <ul>
      <li v-for="(val, index) in arr" :key="index">
        {{ val }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [5, 3, 9, 2, 1],
    };
  },
  methods:{
      
  }
};
</script>

<style>
</style>