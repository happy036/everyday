<template>
  <div>
    <div v-if="loading">loding...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else-if="data && data.length > 0">
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.title }}</li>
      </ul>
    </div>
    <div v-else>暂无数据</div>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
export default {
  setup() {
    // 与服务端通信
    const { data, loading, error, getPosts } = usePosts();
    // 调用方法，发送请求
    getPosts();
    // 返回模板所需数据
    return {
      data,
      loading,
      error,
      getPosts,
    };
  },
};
function usePosts() {
  // 用于存储列表数据
  const data = ref();
  // 用于标识加载状态
  const loading = ref(false);
  // 用于存储错误信息
  const error = ref();
  // 用于发送请求的方法
  async function getPosts() {
    // 更新加载状态
    loading.value = true;
    try {
      // 发送请求
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      // console.log(response);
      // 存储列表数据
      data.value = response.data;
    } catch (err) {
      // 存储错误信息
      // console.log(err);
      error.value = err.message;
    }
    // 更新加载状态
    loading.value = false;
  }
  return { data, loading, error, getPosts };
}
</script>

<style>
</style>