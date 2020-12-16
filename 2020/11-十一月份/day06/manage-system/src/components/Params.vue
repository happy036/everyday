<template>
	<a-layout>
		<a-breadcrumb style="margin: 16px 0">
			<a-breadcrumb-item
				><router-link to="/home" style="font-weight: bold; color: #000"
					>首页</router-link
				></a-breadcrumb-item
			>
			<a-breadcrumb-item>商品管理</a-breadcrumb-item>
			<a-breadcrumb-item>参数列表</a-breadcrumb-item>
		</a-breadcrumb>
		<a-card>
			<a-alert
				message="注意: 只允许为第三级分类设置相关参数!"
				type="warning"
				show-icon
			/>
			<!-- 级联选择框 -->
			<a-row>
				<a-col :span="8">
					<span>选择商品分类: </span>
					<a-cascader
						v-model:value="cascader.value"
						:options="cascader.options"
						placeholder="请选择"
						style="margin: 24px 0"
						:fieldNames="cascader.config"
						@change="handleParamsList"
					/>
				</a-col>
			</a-row>
			<!-- 标签页 -->
			<a-tabs v-model:activeKey="tabs.activeKey" @change="handleTabs">
				<a-tab-pane key="many" tab="动态参数">
					<a-button type="primary" :disabled="isDisabled" @click="handleClick"
						>添加参数</a-button
					>
					<a-table
						style="margin-top: 24px"
						:columns="table.cols"
						:data-source="table.manyData"
						bordered
						:pagination="false"
						:row-key="(record) => record.attr_id"
					>
						<template #index="{ index }">
							{{ index + 1 }}
						</template>
						<template #expandedRowRender="{ record }">
							<!-- {{ record }} -->
							<a-tag
								closable
								color="blue"
								@close="handleClose($event, record, index)"
								v-for="(item, index) in record.attr_vals"
								:key="item"
							>
								{{ item }}
							</a-tag>
							<a-input
								v-if="record.inputVisible"
								ref="input"
								type="text"
								size="small"
								:style="{ width: '78px' }"
								v-model:value="record.inputValue"
								@blur="handleInputConfirm(record)"
							/>
							<a-tag
								v-else
								@click="showInput(record)"
								style="background: #fff; borderstyle: dashed"
							>
								<plus-outlined /> New Tag
							</a-tag>
						</template>
						<template #operation="{ record }">
							<!-- 编辑 -->
							<a-button type="primary" @click="showEdit(record)">
								<EditOutlined />
							</a-button>
							<!-- 删除 -->
							<a-button
								type="danger"
								style="margin: 0 10px"
								@click="handleDeleteParams(record)"
							>
								<DeleteOutlined
							/></a-button>
						</template>
					</a-table>
				</a-tab-pane>
				<a-tab-pane key="only" tab="静态属性">
					<a-button type="primary" :disabled="isDisabled" @click="handleClick"
						>添加属性</a-button
					>
					<a-table
						style="margin-top: 24px"
						:columns="table.cols"
						:data-source="table.onlyData"
						bordered
						:pagination="false"
						:row-key="(record) => record.attr_id"
					>
						<template #index="{ index }">
							{{ index + 1 }}
						</template>
						<template #expandedRowRender="{ record }">
							<!-- {{ record }} -->
							<a-tag
								closable
								color="blue"
								@close="handleClose($event, record, index)"
								v-for="(item, index) in record.attr_vals"
								:key="item"
							>
								{{ item }}
							</a-tag>
							<a-input
								v-if="record.inputVisible"
								ref="input"
								type="text"
								size="small"
								:style="{ width: '78px' }"
								v-model:value="record.inputValue"
								@blur="handleInputConfirm(record)"
							/>
							<a-tag
								v-else
								@click="showInput(record)"
								style="background: #fff; borderstyle: dashed"
							>
								<plus-outlined /> New Tag
							</a-tag>
						</template>
						<template #operation="{ record }">
							<!-- 编辑 -->
							<a-button type="primary" @click="showEdit(record)">
								<EditOutlined />
							</a-button>
							<!-- 删除 -->
							<a-button
								type="danger"
								style="margin: 0 10px"
								@click="handleDeleteParams(record)"
							>
								<DeleteOutlined
							/></a-button>
						</template>
					</a-table>
				</a-tab-pane>
			</a-tabs>
		</a-card>
		<!-- 添加参数模态框 -->
		<a-modal
			:title="'添加' + titleText"
			v-model:visible="params.visible"
			@ok="handleAddParams"
		>
			<a-form :model="params.Model" :rules="params.Rules" ref="AddParamsRef">
				<a-form-item required :label="titleText" name="attr_name">
					<a-input v-model:value="params.Model.attr_name"></a-input>
				</a-form-item>
			</a-form>
		</a-modal>
		<!-- 编辑模态框 -->
		<a-modal
			:title="'修改' + titleText"
			v-model:visible="params.Editvisible"
			@ok="handleEdit"
		>
			<a-form :model="params.Model" :rules="params.Rules" ref="AddParamsRef">
				<a-form-item required :label="titleText" name="attr_name2">
					<a-input v-model:value="params.Model.attr_name2"></a-input>
				</a-form-item>
			</a-form>
		</a-modal>
	</a-layout>
</template>

<script>
import { httpGet, httpPost, httpPut, httpDelete } from "@/utils/http";
import { goods } from "@/api";
import { message } from "ant-design-vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { createVNode } from "vue";
import { Modal } from "ant-design-vue";
// 小图标
import {
	EditOutlined,
	DeleteOutlined,
	PlusOutlined,
} from "@ant-design/icons-vue";
export default {
	data() {
		return {
			cascader: {
				value: [],
				options: [],
				config: {
					label: "cat_name",
					value: "cat_id",
					children: "children",
				},
			},
			tabs: {
				activeKey: "many",
			},
			table: {
				cols: [
					{ title: "#", key: "index", slots: { customRender: "index" } },
					{ title: "属性名称", dataIndex: "attr_name" },
					{
						title: "操作",
						key: "operation",
						slots: { customRender: "operation" },
					},
				],
				manyData: [],
				onlyData: [],
			},
			params: {
				visible: false,
				Editvisible: false,
				Model: {
					attr_name: "",
					attr_name2: "",
				},
				Rules: {
					attr_name: [
						{ required: true, message: "请填写参数", trigger: "blur" },
					],
				},
			},
			cat: "",
			vals: [],
		};
	},
	created() {
		this.handleReadCateList();
	},
	methods: {
		// 请求级联选择框列表
		handleReadCateList() {
			httpGet(goods.GetGoodsClassify)
				.then((res) => {
					// console.log(res);
					let { meta, data } = res;
					if (meta.status == 200) {
						this.cascader.options = data;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// 请求参数列表
		handleParamsList() {
			httpGet(`categories/${this.cateId}/attributes`, {
				sel: this.tabs.activeKey,
			})
				.then((res) => {
					// console.log(res);
					let { meta, data } = res;
					if (meta.status == 200) {
						if (this.tabs.activeKey == "many") {
							data.forEach((ele) => {
								ele.attr_vals =
									ele.attr_vals.length == 0 ? [] : ele.attr_vals.split(" ");
								ele.inputVisible = false;
							});
							this.table.manyData = data;
							// console.log(this.table.manyData);
						} else {
							data.forEach((ele) => {
								ele.attr_vals =
									ele.attr_vals.length == 0 ? [] : ele.attr_vals.split(" ");
								ele.inputVisible = false;
							});
							this.table.onlyData = data;
						}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// 监听tab切换
		handleTabs() {
			this.handleParamsList();
		},
		// 显示添加模态框
		handleClick() {
			this.params.visible = true;
		},
		// 添加参数
		handleAddParams() {
			httpPost(`categories/${this.cateId}/attributes`, {
				attr_name: this.params.Model.attr_name,
				attr_sel: this.tabs.activeKey,
			})
				.then((res) => {
					// console.log(res);
					let { meta } = res;
					if (meta.status == 201) {
						message.success(meta.msg);
						this.params.visible = false;
						this.handleParamsList();
						this.$refs.AddParamsRef.resetFields();
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// 删除标签
		handleClose(e, r, i) {
			r.attr_vals.splice(i, 1);
			httpPut(`categories/${this.cateId}/attributes/${r.attr_id}`, {
				attr_name: r.attr_name,
				attr_sel: r.attr_sel,
				attr_vals: r.attr_vals.join(" "),
			})
				.then((res) => {
					// console.log(res);
					let { meta } = res;
					if (meta.status == 200) {
						message.success(meta.msg);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		showInput(record) {
			record.inputVisible = true;
			this.$nextTick(() => {
				this.$refs.input.focus();
			});
		},
		// 添加标签
		handleInputConfirm(record) {
			record.attr_vals.push(record.inputValue);
			// console.log(record);
			httpPut(`categories/${this.cateId}/attributes/${record.attr_id}`, {
				attr_name: record.attr_name,
				attr_sel: record.attr_sel,
				attr_vals: record.attr_vals.join(" "),
			})
				.then((res) => {
					// console.log(res);
					let { meta } = res;
					if (meta.status == 200) {
						message.success(meta.msg);
						record.inputValue = "";
						record.inputVisible = false;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// 回显
		showEdit(record) {
			this.params.Editvisible = true;
			// console.log(record);
			this.params.Model.attr_name2 = record.attr_name;
			this.cat = record.attr_id;
			this.vals = record.attr_vals;
			// console.log(this.vals);
		},
		// 修改
		handleEdit() {
			httpPut(`categories/${this.cateId}/attributes/${this.cat}`, {
				attr_name: this.params.Model.attr_name2,
				attr_sel: this.tabs.activeKey,
				attr_vals: this.vals.join(" "),
			})
				.then((res) => {
					// console.log(res);
					let { meta } = res;
					if (meta.status == 200) {
						message.success(meta.msg);
						this.params.Editvisible = false;
						this.handleParamsList();
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// 删除
		handleDeleteParams(record) {
			let _this = this;
			Modal.confirm({
				title: "提示",
				icon: createVNode(ExclamationCircleOutlined),
				content: "您真的要删除吗?",
				onOk() {
					httpDelete(`categories/${_this.cateId}/attributes/${record.attr_id}`)
						.then((res) => {
							// console.log(res);
							let { meta } = res;
							if (meta.status == 200) {
								message.success(meta.msg);
								_this.handleParamsList();
							}
						})
						.catch((err) => {
							console.log(err);
						});
				},
			});
		},
	},
	computed: {
		// 控制按钮
		isDisabled() {
			return this.cascader.value.length !== 3;
		},
		cateId() {
			if (this.cascader.value.length == 3) {
				return this.cascader.value[this.cascader.value.length - 1];
			}
			return null;
		},
		titleText() {
			if (this.tabs.activeKey == "many") {
				return "动态参数";
			} else {
				return "静态属性";
			}
		},
	},
	components: {
		EditOutlined,
		DeleteOutlined,
		PlusOutlined,
	},
};
</script>

<style></style>
