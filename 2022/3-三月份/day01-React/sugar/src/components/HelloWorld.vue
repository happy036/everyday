<script setup>
// defineProps({ msg: String });
defineProps({ msg: String });
defineEmits(["delete"]);
</script>
<template>
  <h1>{{ msg }}</h1>
  <button @click="$emit('delete')">按钮</button>
</template>
