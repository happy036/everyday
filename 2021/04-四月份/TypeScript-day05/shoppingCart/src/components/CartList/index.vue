<template>
	<!-- 列表 -->
	<div>
		<div class="item" v-for="item in productList" :key="item.id">
			<img :src="item.img" />
			<div class="name">{{ item.name }}</div>
			<div class="change">
				<a href="" @click.prevent="sub(item.id)">－</a>
				<input
					type="text"
					class="num"
					:value="item.num"
					@blur="handleChangeProduct($event, item.id)"
				/>
				<a href="" @click.prevent="add(item.id)">＋</a>
			</div>
			<div class="del" @click="handleDeleteProduct($event, item.id)">×</div>
		</div>
	</div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
	props: {
		productList: {
			type: Array,
			required: true,
		},
	},
	setup(props, { emit }) {
		// 删除
		const handleDeleteProduct = function (event: MouseEvent, id) {
			emit("del", id);
		};
		const handleChangeProduct = function (event: any, id) {
			if (event.target.value < 0) {
				alert("输入的值不能为负数");
				return;
			}
			emit("change-num", {
				id: id,
				type: "change",
				num: event.target.value,
			});
		};
		const add = function (id) {
			emit("change-num", {
				id: id,
				type: "add",
			});
		};
		const sub = function (id) {
			emit("change-num", {
				id: id,
				type: "sub",
			});
		};
		return {
			handleDeleteProduct,
			handleChangeProduct,
			add,
			sub,
		};
	},
});
</script>

<style>
</style>