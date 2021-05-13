<template>
	<div id="app" class="main">
		<h2>小目标列表</h2>
		<div class="list">
			<h3>添加小目标</h3>
			<input
				type="text"
				class="text-keyword"
				placeholder="输入小目标后，按回车确认"
				v-model="show"
				@keyup.enter="handleAdd"
			/>
			<p>共有{{ sum }}个目标，已完成{{ okok }}，还有{{ nono }}条未完成</p>
		</div>
		<ul>
			<li class="li1" v-for="item in list" :key="item.id">
				<div>
					<span
						class="type-span"
						@click="handleOk(item.id)"
						:class="item.status ? 'active' : ''"
					></span>
					<span>{{ item.name }}</span>
					<span class="close" @click="handleDelete(item.id)">X</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";

export default defineComponent({
	setup() {
		type listItem = {
			id: number;
			name: string;
			status: boolean;
		};
		// 数据
		const list: Array<listItem> = reactive([
			{
				id: 0,
				name: "干嘛呀？",
				status: false,
			},
		]);
		const show = ref<string>("");
		// 添加数据
		const handleAdd = () => {
			if (show.value.trim().length == 0) return alert("输入内容不能为空!");
			list.push({
				id: Math.random(),
				name: show.value,
				status: false,
			});
			show.value = "";
		};
		// 总目标
		const sum = computed(() => {
			return list.length;
		});
		// 是否选中
		const handleOk = (id) => {
			let index = list.findIndex((item) => item.id == id);
			list[index].status = !list[index].status;
		};
		// 已完成
		const okok = computed(() => {
			let sum = list.filter((item) => item.status);
			// console.log(sum);
			return sum.length;
		});
		// 未完成
		const nono = computed(() => {
			let sum1 = list.filter((item) => !item.status);
			return sum1.length;
		});
		// 删除
		const handleDelete = (id) => {
			let index = list.findIndex((item) => item.id == id);
			list.splice(index, 1);
		};
		return {
			list,
			show,
			handleAdd,
			sum,
			handleOk,
			nono,
			okok,
			handleDelete,
		};
	},
});
</script>

<style>
body {
	font-family: "微软雅黑";
	font-size: 14px;
}
input {
	font-size: 14px;
}
body,
ul,
div,
html {
	padding: 0;
	margin: 0;
}
.hidden {
	display: none;
}
.main {
	width: 800px;
	margin: 0 auto;
}
li {
	list-style-type: none;
	line-height: 40px;
	position: relative;
	border: 1px solid transparent;
	padding: 0 20px;
}
li .type-span {
	display: block;
	width: 10px;
	height: 10px;
	background: #ccc;
	margin: 14px 10px 0 0;
	float: left;
}
li .close {
	position: absolute;
	color: #f00;
	font-size: 20px;
	line-height: 40px;
	height: 40px;
	right: 20px;
	cursor: pointer;
	display: none;
	top: 0;
}
li:hover {
	border: 1px solid #09f;
}
li:hover .close {
	display: block;
}
li .text-keyword {
	height: 40px;
	padding-left: 10px;
	box-sizing: border-box;
	margin-left: 10px;
	width: 80%;
	display: none;
}
.text-keyword {
	box-sizing: border-box;
	width: 100%;
	height: 40px;
	padding-left: 10px;
	outline: none;
}
li div .active {
	background-color: red;
}
</style>