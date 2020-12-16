<template>
	<a-layout>
		<!-- 面包屑导航 -->
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
			<!-- 主体 start -->
			<!-- 级联选择框 -->
			<a-row>
				<a-col :span="8">
					<span>选择分类: </span>
					<a-cascader
						v-model:value="cascader.value"
						:options="cascader.options"
						placeholder="请选择"
						:fieldNames="{
							label: 'cat_name',
							value: 'cat_id',
							children: 'children',
						}"
						@change="handleGetParams"
					/>
				</a-col>
			</a-row>
			<!-- tab -->
			<a-tabs v-model:activeKey="activeKey">
				<a-tab-pane key="many" tab="动态参数">
					<a-button type="primary" :disabled="isDisabled">添加参数</a-button>
					<a-table
						:columns="table.cols"
						:data-source="table.manyData"
						bordered
						:row-key="(record) => record.attr_id"
						style="margin-top: 10px"
						:pagination="false"
					>
						<template #index="{ index }">
							{{ index + 1 }}
						</template>
						<template #expandedRowRender="{ record }">
							{{ record }}
							<a-tag color="blue" v-for="item in record.attr_vals" :key="item">
								{{ item }}
							</a-tag>
							<a-input
								v-if="record.inputVisible"
								ref="input"
								type="text"
								size="small"
								:style="{ width: '78px' }"
								v-model:value="record.inputValue"
								@blur="handleInputConfirm"
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
							<a-button type="primary" style="margin-right: 10px"
								><EditOutlined
							/></a-button>
							<!-- 删除 -->
							<a-button type="danger" style="margin-right: 10px"
								><DeleteOutlined
							/></a-button>
						</template>
					</a-table>
				</a-tab-pane>
				<a-tab-pane key="only" tab="静态参数">
					<a-button type="primary" :disabled="isDisabled">添加属性</a-button>
					<a-table
						:columns="table.cols"
						:data-source="table.onlyData"
						bordered
						:row-key="(record) => record.attr_id"
						style="margin-top: 10px"
						:pagination="false"
					>
						<template #index="{ index }">
							{{ index + 1 }}
						</template>
						<template #expandedRowRender="{ record }">
							{{ record }}
							<a-tag color="blue" v-for="item in record.attr_vals" :key="item">
								{{ item }}
							</a-tag>
							<a-input
								v-if="record.inputVisible"
								ref="input"
								type="text"
								size="small"
								:style="{ width: '78px' }"
								v-model:value="record.inputValue"
								@blur="handleInputConfirm"
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
							<a-button type="primary" style="margin-right: 10px"
								><EditOutlined
							/></a-button>
							<!-- 删除 -->
							<a-button type="danger" style="margin-right: 10px"
								><DeleteOutlined
							/></a-button>
						</template>
					</a-table>
				</a-tab-pane>
			</a-tabs>
			<!-- 主体 end -->
		</a-card>
	</a-layout>
</template>

<script>
import { params } from "@/api";
import { httpGet } from "@/utils/http";
import {
	EditOutlined,
	DeleteOutlined,
	PlusOutlined,
} from "@ant-design/icons-vue";
export default {
	data() {
		return {
			cascader: {
				options: [],
				value: [],
			},
			table: {
				cols: [
					{
						title: "#",
						slots: { customRender: "index" },
						key: "index",
					},
					{
						title: "参数名称",
						key: "attr_name",
						dataIndex: "attr_name",
					},
					{
						title: "操作",
						slots: { customRender: "operation" },
						key: "operation",
					},
				],
				manyData: [],
				onlyData: [],
			},
			activeKey: "many",
		};
	},
	created() {
		this.handleReadCat();
	},
	methods: {
		// 获取分类数据
		handleReadCat() {
			httpGet(params.GetCat)
				.then((res) => {
					// console.log(res);
					let { data, meta } = res;
					if (meta.status == 200) {
						this.cascader.options = data;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// 获取参数
		handleGetParams() {
			httpGet(`categories/${this.cateId}/attributes`, {
				sel: this.activeKey,
			})
				.then((res) => {
					// console.log(res);
					let { meta, data } = res;
					if (meta.status == 200) {
						if (this.activeKey == "many") {
							data.forEach((ele) => {
								ele.attr_vals =
									ele.attr_vals.length == 0 ? [] : ele.attr_vals.split(" ");
							});
							this.table.manyData = data;
						} else {
							data.forEach((ele) => {
								ele.attr_vals =
									ele.attr_vals.length == 0 ? [] : ele.attr_vals.split(" ");
							});
							this.table.onlyData = data;
						}
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
	},
	computed: {
		isDisabled() {
			return this.cascader.value.length != 3;
		},
		cateId() {
			if (this.cascader.value.length == 3) {
				return this.cascader.value[this.cascader.value.length - 1];
			} else {
				return null;
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
