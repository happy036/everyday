<template>
  <div>
    <div class="item" v-for="item in list" :key="item.id">
      <img :src="item.img" />
      <div class="name">{{ item.name }}</div>
      <div class="change">
        <a href="" @click.prevent="sub(item.id)">－</a>
        <input
          type="text"
          class="num"
          :value="item.num"
          @blur="change(item.id, $event)"
        />
        <a href="" @click.prevent="add(item.id)">＋</a>
      </div>
      <div class="del" @click="$emit('del', item.id)">×</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"],
  methods: {
    change(id, event) {
      if (event.target.value < 0) {
        event.target.value = 0;
      }
      this.$emit("changenum", {
        id: id,
        type: "change",
        num: event.target.value
      });
    },
    add(id) {
      this.$emit("changenum", {
        id: id,
        type: "add"
      });
    },
    sub(id) {
      this.$emit("changenum", {
        id: id,
        type: "sub"
      });
    }
  }
};
</script>

<style>
</style>