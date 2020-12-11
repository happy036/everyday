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
						<template #operation>
							<!-- 编辑 -->
							<a-button type="primary">
								<EditOutlined />
							</a-button>
							<!-- 删除 -->
							<a-button type="danger" style="margin: 0 10px">
								<DeleteOutlined
							/></a-button>
						</template>
					</a-table>
				</a-tab-pane>
				<a-tab-pane key="only" tab="静态属性">
					<a-button type="primary" :disabled="isDisabled" @click="handleClick"
						>添加属性</a-button
					>
				</a-tab-pane>
			</a-tabs>
		</a-card>
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
	</a-layout>
</template>

<script>
import { httpGet, httpPost, httpPut } from "@/utils/http";
import { goods } from "@/api";
import { message } from "ant-design-vue";
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
				Model: {
					attr_name: "",
				},
				Rules: {
					attr_name: [
						{ required: true, message: "请填写参数", trigger: "blur" },
					],
				},
			},
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
									ele.attr_vals.length == 0 ? [] : ele.attr_vals.split("");
								ele.inputVisible = false;
							});
							this.table.manyData = data;
						} else {
							this.table.onlyData = data;
						}
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		handleTabs(activeKey) {
			console.log(activeKey);
		},
		handleClick() {
			this.params.visible = true;
		},
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
		handleClose(e, r, i) {
			r.attr_vals.splice(i, 1);
			httpPut(`categories/${this.cateId}/attributes/${r.attr_id}`, {
				attr_name: r.attr_name,
				attr_sel: r.attr_sel,
				attr_vals: r.attr_vals.join(" "),
			})
				.then((res) => {
					console.log(res);
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
		handleInputConfirm(record) {
			record.attr_vals.push(record.inputValue);
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
