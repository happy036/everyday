<template>
	<div>
		<router-link to="/one">图片切换</router-link>
		<router-link to="/two">小目标列表</router-link>
		<router-link to="/three">留言板</router-link>
		<router-view></router-view>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "App",
});
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
