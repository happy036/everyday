<template></template>

<script>
export default {
  async asyncData({ $http }) {
    let aaa = await $http.$get(
      "http://v.juhe.cn/toutiao/index?type=top&key=APPKEY"
    );
    console.log(aaa);
  },
};
</script>
