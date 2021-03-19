<template>
	<div>
		<img alt="Vue logo" src="./assets/logo.png" />
		<aButton :aName="name"></aButton>
		<p>{{ msg }}</p>
	</div>
</template>

<script>
import aButton from "./components/aa.vue";
export default {
	data() {
		return {
			msg: "你好",
			name: "小白",
		};
	},
	methods: {},
	components: {
		aButton,
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