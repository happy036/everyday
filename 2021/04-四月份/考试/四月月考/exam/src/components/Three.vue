<template>
	<div id="app" class="container">
		<h3>留言板:</h3>
		<div class="form-group" style="max-height: 300px; overflow: auto">
			<div
				class="row list-group-item"
				v-for="item in searchList"
				:key="item.id"
			>
				<div class="col-md-1">{{ item.nickname }}:</div>
				<div class="col-md-5">{{ item.content }}</div>
				<div class="col-md-2">
					{{ item.date.toLocaleString("cn-GB", { hour12: false }) }}
				</div>
				<div class="col-md-4">
					<button
						class="btn btn-danger"
						type="button"
						@click="handleDelete(item.id)"
					>
						删除
					</button>
					<button
						class="btn btn-info"
						type="button"
						@click="handleEdit(item.id)"
					>
						修改
					</button>
				</div>
			</div>
		</div>
		<br /><br /><br />
		<form class="form-horizontal" v-show="isContent">
			<div class="form-group">
				<label for="search" class="col-sm-1 control-label">搜索</label>
				<div class="col-sm-11">
					<input
						type="text"
						class="form-control"
						id="search"
						placeholder="搜索留言"
						v-model="keywords"
					/>
				</div>
			</div>
			<div class="form-group">
				<label for="nikename" class="col-sm-1 control-label">昵称</label>
				<div class="col-sm-11">
					<input
						type="text"
						class="form-control"
						id="nikename"
						placeholder="请输入昵称"
						v-model="aname"
					/>
				</div>
			</div>
			<div class="form-group">
				<label for="content" class="col-sm-1 control-label">内容</label>
				<div class="col-sm-11">
					<textarea
						id="content"
						class="form-control"
						rows="3"
						v-model="acontent"
					></textarea>
				</div>
			</div>
			<button
				type="button"
				class="btn btn-success col-sm-1 col-sm-push-9"
				@click="add"
			>
				发表
			</button>
			<button
				type="button"
				class="btn btn-danger col-sm-1 col-sm-push-10"
				@click="handleClean"
			>
				清屏
			</button>
		</form>
		<!-- 修改 -->
		<form class="form-horizontal" v-show="isEdit">
			<input type="hidden" ref="hide" />
			<div class="form-group">
				<label class="col-sm-1 control-label">修改：</label>
				<div class="col-sm-11">
					<textarea
						class="form-control"
						rows="3"
						v-model="editvalue"
					></textarea>
				</div>
			</div>
			<button
				type="button"
				class="btn btn-success col-sm-1 col-sm-push-11"
				@click="handleEditOk"
			>
				确认修改
			</button>
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from "vue";

export default defineComponent({
	setup() {
		type listType = {
			id: number;
			nickname: string;
			content: string;
			date: Date;
		};
		// 给定数据
		const list: Array<listType> = reactive([
			{
				id: 1,
				nickname: "笑话",
				content: "今天天气真好",
				date: new Date(),
			},
			{
				id: 2,
				nickname: "小草",
				content: "是呀，那咱们出去晒太阳吧",
				date: new Date(),
			},
		]);
		// 添加
		const aname = ref<string>("");
		const acontent = ref<string>("");
		const add = () => {
			if (aname.value.trim().length == 0 || acontent.value.trim().length == 0)
				return alert("不能为空");
			list.push({
				id: Math.random(),
				nickname: aname.value,
				content: acontent.value,
				date: new Date().toLocaleString(),
			});
			aname.value = "";
			acontent.value = "";
		};
		// 修改
		const isEdit = ref<boolean>(false);
		const isContent = ref<boolean>(true);
		const editvalue = ref<string>("");
		const editId = ref<number>();
		const handleEdit = (id) => {
			let index = list.findIndex((item) => item.id == id);
			editvalue.value = list[index].content;
			editId.value = list[index].id;
			isEdit.value = true;
			isContent.value = false;
		};
		// 确认修改
		const handleEditOk = () => {
			list.some((item) => {
				if (item.id == editId.value) {
					item.content = editvalue.value;
					isEdit.value = false;
					isContent.value = true;
				}
			});
		};
		// 清屏
		const handleClean = () => {
			list.splice(0, list.length);
		};
		// 搜索
		const keywords = ref<string>("");
		const searchList = computed(() => {
			return list.filter((item) => {
				return (
					item.nickname.includes(keywords.value) ||
					item.content.includes(keywords.value)
				);
			});
		});
		// 删除
		const handleDelete = (id) => {
			let index = list.findIndex((item) => item.id == id);
			list.splice(index, 1);
		};
		return {
			list,
			aname,
			acontent,
			add,
			handleEdit,
			isEdit,
			isContent,
			editvalue,
			editId,
			handleEditOk,
			handleClean,
			keywords,
			searchList,
			handleDelete,
		};
	},
});
</script>

<style>
</style>