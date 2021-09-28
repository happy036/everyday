<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model="task"
      @keydown.enter="down"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    down() {
      if (this.task.trim().length === 0) {
        alert("任务名不能为空");
        return;
      }
      this.$emit("addTask", this.task);
      this.task = "";
    },
  },
};
</script>