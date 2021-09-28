<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters" @click="checkTask">
      <li>
        <a :class="{ selected: isCheck === 'all' }" href="javascript:;">全部</a>
      </li>
      <li>
        <a :class="{ selected: isCheck === 'no' }" href="javascript:;"
          >未完成</a
        >
      </li>
      <li>
        <a :class="{ selected: isCheck === 'yes' }" href="javascript:;"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed">清除已完成</button>
  </footer>
</template>

<script>
export default {
  props: ["list"],
  data() {
    return {
      isCheck: "all",
    };
  },
  computed: {
    count() {
      return this.list.length;
    },
  },
  methods: {
    checkTask() {
      this.$emit("checkTask", this.isCheck);
    },
  },
};
</script>