<template>
  <div class="home">
    <h3 v-tooltip="msg">鼠标悬浮显示提示</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello Nuxters鼓掌',
    }
  },
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
.home {
  width: 400px;
  margin: 100px auto;
}
</style>