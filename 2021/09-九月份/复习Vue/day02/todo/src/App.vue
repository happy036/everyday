<template>
  <div class="todoapp">
    <TodoHeader @addTask="addTask"></TodoHeader>
    <TodoMain :list="list" @del="deleteTask"></TodoMain>
    <TodoFooter :list="list" @checkTask="changeTask"></TodoFooter>
  </div>
</template>

<script>
import "./styles/base.css";
import "./styles/index.css";
import TodoHeader from "./components/TodoHeader.vue";
import TodoMain from "./components/TodoMain.vue";
import TodoFooter from "./components/TodoFooter.vue";
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  data() {
    return {
      list: [
        { id: 100, name: "吃饭", isDone: true },
        { id: 201, name: "睡觉", isDone: false },
        { id: 103, name: "打豆豆", isDone: true },
      ],
      getTask: "all",
    };
  },
  methods: {
    // 添加任务
    addTask(taskName) {
      let id = Math.random();
      this.list.push({
        id: id,
        name: taskName,
        isDone: false,
      });
    },
    // 删除任务
    deleteTask(Id) {
      let index = this.list.findIndex((item) => item.id == Id);
      this.list.splice(index, 1);
    },
    // 数据切换
    changeTask(str) {
      this.getTask = str;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
