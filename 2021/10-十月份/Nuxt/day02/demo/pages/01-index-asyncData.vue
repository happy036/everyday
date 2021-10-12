<template>
  <div class="home">
    <ul>
      <li v-for="item in list" :key="item.id">
        <a href="">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async asyncData() {
    const {
      data: { data: list },
    } = await axios.get("https://cnodejs.org/api/v1/topics");
    return { list };
  },
};
</script>
