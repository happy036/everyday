<template>
	<div class="title">{{ userName }}的商品</div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
	props: {
		userName: {
			type: String,
			required: true,
		},
	},
	setup() {},
});
</script>

<style>
</style>