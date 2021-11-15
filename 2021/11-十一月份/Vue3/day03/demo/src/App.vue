<template>
  <div>
    <!-- {{ $store.state.username }} -->
    <!-- {{ $store.getters.newUsername }} -->
    <!-- mutations -->
    <!-- <button @click="$store.commit('updateUsername', '李四')">
      change username
    </button> -->

    <!-- actions -->
    <!-- <button @click="onClick">actions</button> -->

    <!-- module -->
    <!-- <module /> -->

    <!-- 双向数据绑定 -->
    <!-- 实现表单双向数据绑定 -->
    <!-- <inputModel /> -->
    <!-- 实现组件双向数据绑定 -->
    <!-- 普通版 -->
    <!-- <component-model
      :firstName="firstName"
      @onFirstNameChanged="onFirstNameChanged($event)"
    /> -->

    <!-- 升级版 -->
    <!-- <componentModel v-model="firstName" /><br /> -->
    <!-- <button @click="onClick">App</button> -->

    <!-- 终极版 -->
    <!-- <component-model
      v-model:firstName="firstName"
      v-model:lastName="lastName"
    />
    <button @click="onClickHandler">App</button> -->

    <!-- 防抖 -->
    <custom-ref />
  </div>
</template>

<script>
import { ref } from "vue";
// import { useStore } from "vuex";
import module from "./components/module.vue";
import inputModel from "./components/inputModel.vue";
import componentModel from "./components/componentModel.vue";
import customRef from "./components/customRef.vue";
export default {
  setup() {
    // const store = useStore();
    // console.log(store.state.username);
    // console.log(store.getters.newUsername);
    // const onClick = () => {
    //   store.dispatch("updateName");
    // };
    const firstName = ref("张三");
    const lastName = ref("李四");
    // 普通版
    const onFirstNameChanged = (event) => {
      firstName.value = event;
    };
    // 升级版
    const onClick = () => {
      firstName.value = "李四";
    };
    // 终极版
    const onClickHandler = () => {
      firstName.value = "孙悟空";
      lastName.value = "猪八戒";
    };
    return {
      onClick,
      firstName,
      onFirstNameChanged,
      lastName,
      onClickHandler,
    };
  },
  components: {
    module,
    inputModel,
    componentModel,
    customRef,
  },
};
</script>

<style></style>
