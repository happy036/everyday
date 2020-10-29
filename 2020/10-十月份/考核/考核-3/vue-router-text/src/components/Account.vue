<template>
  <div>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td><a href="" @click.prevent="handleClick(item.id)">详情</a></td>
      </tr>
    </tbody>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "你好" },
        { id: 2, name: "好的" }
      ]
    };
  },
  methods: {
    handleClick(id) {
      this.$router.push("/userinfo/" + id);
    }
  }
};
</script>

<style>
</style>