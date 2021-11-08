<template>
  <div>
    <!-- <p>{{ name }} | App.vue</p> -->
    <!-- 组件通讯 -->
    <!-- <Son :name="name" @onChangeMsg="onChangeMsg" /> -->
    <!-- <button @click="onClick">组件通讯</button><br /> -->

    <!-- 组件生命周期 -->
    <!-- <life v-if="show" /> -->
    <!-- <button @click="show = !show">组件生命周期</button> -->

    <!-- 与服务端通信 -->
    <!-- <server /> -->

    <!-- 获取DOM对象 -->
    <!-- <getDom /> -->

    <!-- provide、inject 函数 -->
    <!-- // 目标：掌握跨组件层级传递数据的方式 -->
    <!-- // 通过 provide、inject 函数的配合使用，可以实现跨组件传递数据（组件与组件存在嵌套关系） -->
    <!-- <father /> -->

    <!-- teleport 组件 -->
    <!-- teleport 组件可以将指定组件渲染到应用外部的其他位置。 -->
    <!-- 比如弹框组件，它可能在任意组件中使用，但它不属于任意组件，所以不能在使用它的组件中渲染它，我们需要将它渲染到指定位置。 -->
    <!-- <teleport to="#modal"> -->
    <!-- <Modal /> -->
    <!-- </teleport> -->
  </div>
</template>

<script>
import { ref } from "vue";
// import axios from "axios";
import Son from "./components/Son.vue";
import life from "./components/life.vue";
import server from "./components/server.vue";
import getDom from "./components/getDom.vue";
import father from "./components/father.vue";
import Modal from "./components/Modal.vue";
export default {
  setup() {
    const name = ref("张三");
    // 组件生命周期
    const show = ref(true);
    // 父传子
    const onClick = () => {
      name.value = "李四";
    };
    // 子传父
    const onChangeMsg = (data) => {
      name.value = data;
    };
    return {
      name,
      onClick,
      onChangeMsg,
      show,
    };
  },
  components: {
    Son,
    life,
    server,
    getDom,
    father,
    Modal,
  },
};
</script>

<style>
</style>