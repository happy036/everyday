<template>
	<a-layout>
		<a-breadcrumb style="margin: 16px 0">
			<a-breadcrumb-item
				><router-link to="/home" style="font-weight: bold; color: #000"
					>首页</router-link
				></a-breadcrumb-item
			>
			<a-breadcrumb-item>商品管理</a-breadcrumb-item>
			<a-breadcrumb-item>添加商品</a-breadcrumb-item>
		</a-breadcrumb>
		<a-card>
			<!-- 提示信息 -->
			<a-alert message="添加商品信息" type="info" show-icon />
			<!-- 步骤条 -->
			<a-row>
				<a-col :span="20" :offset="2">
					<a-steps
						direction="horizontal"
						size="small"
						labelPlacement="vertical"
						:current="Number(activeKey)"
						style="margin-top: 24px"
					>
						<a-step title="基本信息" />
						<a-step title="商品参数" />
						<a-step title="商品属性" />
						<a-step title="商品图片" />
						<a-step title="商品内容" />
						<a-step title="完成" />
					</a-steps>
				</a-col>
			</a-row>
			<!-- tab标签页 -->
			<a-form
				layout="vertical"
				:model="addGoodsModel"
				:rules="addGoodsRules"
				ref="addGoodsRef"
			>
				<a-tabs
					tab-position="left"
					style="margin-top: 24px"
					:activeKey="activeKey"
					@change="handleTabsChange"
					@tabClick="handleTabClick"
				>
					<a-tab-pane key="0" tab="基本信息">
						<a-form-item required label="商品名称" name="goods_name">
							<a-input v-model:value="addGoodsModel.goods_name"></a-input>
						</a-form-item>
						<a-form-item required label="商品价格" name="goods_price">
							<a-input v-model:value="addGoodsModel.goods_price"></a-input>
						</a-form-item>
						<a-form-item required label="商品重量" name="goods_weight">
							<a-input v-model:value="addGoodsModel.goods_weight"></a-input>
						</a-form-item>
						<a-form-item required label="商品数量" name="goods_number">
							<a-input v-model:value="addGoodsModel.goods_number"></a-input>
						</a-form-item>
						<a-form-item required label="商品分类" name="goods_cat">
							<a-cascader
								v-model:value="addGoodsModel.goods_cat"
								:options="options"
								:fieldNames="{
									label: 'cat_name',
									value: 'cat_id',
									children: 'children',
								}"
								placeholder="请选择"
								@change="handleCascaderChange"
							/>
						</a-form-item>
					</a-tab-pane>
					<a-tab-pane key="1" tab="商品参数">
						<a-form-item
							:label="item.attr_name"
							:key="item.attr_id"
							v-for="item in manyData"
						>
							<a-checkbox-group
								v-model:value="item.attr_vals"
								:options="item.attr_vals"
							/>
						</a-form-item>
					</a-tab-pane>
					<a-tab-pane key="2" tab="商品属性">
						<a-form-item
							:label="item.attr_name"
							:key="item.attr_id"
							v-for="item in onlyData"
						>
							<a-input v-model:value="item.attr_vals"></a-input>
						</a-form-item>
					</a-tab-pane>
					<a-tab-pane key="3" tab="商品图片">
						<a-upload
							accept="image/*"
							action="http://www.wanlum.com:8888/api/private/v1/upload"
							list-type="picture"
							:headers="headObj"
							@change="handleUploadChange"
							@preview="handlePreview"
							:remove="handleUploadRemove"
						>
							<a-button type="primary"> <upload-outlined /> 上传图片 </a-button>
						</a-upload>
					</a-tab-pane>
					<a-tab-pane key="4" tab="商品内容">
						<ckeditor
							:editor="editor"
							v-model="addGoodsModel.goods_introduce"
						></ckeditor>

						<!-- 添加商品按钮 -->
						<a-button type="primary" @click="handleAddGoods">添加商品</a-button>
					</a-tab-pane>
				</a-tabs>
			</a-form>
		</a-card>
		<a-modal
			title="图片预览"
			:visible="previewVisible"
			:footer="null"
			@cancel="handleCancel"
		>
			<img alt="example" style="width: 100%" :src="previewPath" />
		</a-modal>
	</a-layout>
</template>

<script>
// 导入请求地址
import { goods } from "@/api";

// 导入请求方式
import { httpGet, httpPost } from "@/utils/http";
import { message } from "ant-design-vue";
import { UploadOutlined } from "@ant-design/icons-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import _ from "lodash";
export default {
	data() {
		return {
			addGoodsModel: {
				goods_name: "",
				goods_price: "",
				goods_weight: "",
				goods_number: "",
				goods_cat: [],
				goods_introduce: "",
				pics: [],
				attrs: [],
			},
			addGoodsRules: {
				goods_name: [
					{ required: true, message: "商品名称不能为空", trigger: "blur" },
				],
				goods_price: [
					{ required: true, message: "商品价格不能为空", trigger: "blur" },
				],
				goods_weight: [
					{ required: true, message: "商品重量不能为空", trigger: "blur" },
				],
				goods_number: [
					{ required: true, message: "商品数量不能为空", trigger: "blur" },
				],
				goods_cat: [
					{
						type: "array",
						required: true,
						message: "商品分类不能为空",
						trigger: "blur",
					},
				],
			},
			options: [],
			activeKey: "0",
			cate_id: "",
			manyData: [],
			onlyData: [],
			headObj: {
				Authorization: window.sessionStorage.getItem("token"),
			},
			previewVisible: false,
			previewPath: "",
			editor: ClassicEditor,
		};
	},
	created() {
		this.handleReadCates();
	},
	methods: {
		handleReadCates() {
			httpGet(goods.GetGoodsClassify)
				.then((res) => {
					// console.log(res);
					let { data, meta } = res;
					if (meta.status == 200) {
						this.options = data;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		handleTabsChange(activeKey) {
			// console.log(activeKey);
			if (activeKey !== "0" && this.addGoodsModel.goods_cat.length !== 3) {
				message.error("请先选择商品分类");
				this.activekey = "0";
			} else {
				this.activeKey = activeKey;
			}
		},
		handleTabClick(activeKey) {
			if (activeKey == "1") {
				httpGet(`categories/${this.cate_id}/attributes`, { sel: "many" })
					.then((res) => {
						// console.log(res);
						let { meta, data } = res;
						if (meta.status == 200) {
							data.forEach((ele) => {
								ele.attr_vals =
									ele.attr_vals.length == 0 ? [] : ele.attr_vals.split(" ");
							});
							this.manyData = data;
							// console.log(this.manyData);
						}
					})
					.catch((err) => {
						console.log(err);
					});
			}
			if (activeKey == "2") {
				httpGet(`categories/${this.cate_id}/attributes`, { sel: "only" })
					.then((res) => {
						// console.log(res);
						let { meta, data } = res;
						if (meta.status == 200) {
							this.onlyData = data;
						}
					})
					.catch((err) => {
						console.log(err);
					});
			}
		},
		handleCascaderChange(value) {
			if (value.length == 3) {
				this.cate_id = value[value.length - 1];
			}
		},
		handleUploadChange(file) {
			console.log(file);
			if (file.file.status == "done") {
				let { fileList } = file;
				let arr = [];
				fileList.forEach((item) => {
					arr.push({ pic: item.response.data.tmp_path });
				});
				this.addGoodsModel.pics = arr;
			}
		},
		// 预览图片
		handlePreview(file) {
			// console.log(file);
			this.previewPath = file.response.data.url.replace(
				/127.0.0.1/,
				"www.wanlum.com"
			);
			this.previewVisible = true;
		},
		handleUploadRemove(file) {
			let index = this.addGoodsModel.pics.findIndex(
				(item) => item.pic == file.response.data.tmp_path
			);
			this.addGoodsModel.pics.splice(index, 1);
		},
		handleCancel() {
			this.previewVisible = false;
		},
		handleAddGoods() {
			this.$refs.addGoodsRef
				.validate()
				.then(() => {
					let form = _.cloneDeep(this.addGoodsModel);
					form.goods_cat = form.goods_cat.join(",");
					this.manyData.forEach((item) => {
						form.attrs.push({
							attr_id: item.attr_id,
							attr_value: item.attr_vals.join(" "),
						});
					});
					this.onlyData.forEach((item) => {
						form.attrs.push({
							attr_id: item.attr_id,
							attr_value: item.attr_vals,
						});
					});
					httpPost(goods.AddGoods, form)
						.then((res) => {
							console.log(res);
							let { meta } = res;
							if (meta.status == 201) {
								message.success(meta.msg);
								this.$router.push("/goods");
							}
						})
						.catch((err) => {
							console.log(err);
						});
				})
				.catch((err) => {
					message.error("您还有未填完的项");
					console.log(err);
				});
		},
	},
	components: {
		UploadOutlined,
	},
};
</script>

<style></style>
