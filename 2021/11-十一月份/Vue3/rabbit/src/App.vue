<template>
  <router-view></router-view>
  <!--  <XtxMessage type="success" text="登录成功" />-->
  <!--  <button @click="$message({ type: 'success', text: '测试' })">button</button>-->
  <!--  <button @click="showMessage()">button</button>-->
  <!--  <button @click="showMessage(this)">button</button>-->
</template>
<script>
// import Message from "@/components/library/Message";
// import { getCurrentInstance } from "vue";
export default {
  setup() {
    // const onClickHandler = () => {
    //   Message({ type: "success", text: "登录成功" });
    // };
    // return {
    //   onClickHandler,
    // };
    // 获取当前组件实例
    // const { proxy } = getCurrentInstance();
    // const showMessage = () => {
    //   proxy.$message({ type: "error", text: "测试" });
    // };
    const showMessage = (instance) => {
      instance.$message({ type: "success", text: "测试" });
    };
    return {
      showMessage,
    };
  },
  // methods: {
  //   showMessage() {
  //     this.$message({ type: "error", text: "测试" });
  //   },
  // },
};
</script>
<style lang="less">
.box {
  color: @xtxColor;
}
</style>
