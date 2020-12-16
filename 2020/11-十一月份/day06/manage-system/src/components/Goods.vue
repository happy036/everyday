<template>
	<a-layout>
		<a-breadcrumb style="margin: 16px 0">
			<a-breadcrumb-item
				><router-link to="/home" style="font-weight: bold; color: #000"
					>首页</router-link
				></a-breadcrumb-item
			>
			<a-breadcrumb-item>商品管理</a-breadcrumb-item>
			<a-breadcrumb-item>商品列表</a-breadcrumb-item>
		</a-breadcrumb>
		<a-card>
			<a-form>
				<a-row>
					<a-col :span="12">
						<a-row :gutter="16">
							<a-col class="gutter-row" :span="16">
								<a-form-item :wrapperCol="{ span: 24 }">
									<a-input-search size="large" placeholder="请输入内容" />
								</a-form-item>
							</a-col>
							<a-col class="gutter-row" :span="8">
								<a-button type="primary" size="large">
									<router-link to="/goodsAdd">添加商品</router-link>
								</a-button>
							</a-col>
						</a-row>
					</a-col>
				</a-row>
			</a-form>
			<a-table
				:row-key="(record) => record.goods_id"
				:columns="table.col"
				:data-source="table.data"
				:pagination="false"
				bordered
			>
				<template #index="{ index }">
					{{ index + 1 }}
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
			<!-- 分页 -->
			<a-config-provider :locale="locale">
				<a-pagination
					style="margin-top: 25px"
					v-model:current="pagination.pagenum"
					:total="pagination.total"
					:show-total="(total) => `共 ${pagination.total} 条`"
					show-size-changer
					@showSizeChange="onShowSizeChange"
					:page-size-options="pagination.pageSizeOptions"
					:defaultPageSize="10"
					@change="handlePageChange"
					show-quick-jumper
					v-model:pageSize="pagination.pagesize"
				/>
			</a-config-provider>
		</a-card>
	</a-layout>
</template>

<script>
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";
// 引入请求路径
import { goods } from "@/api";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";
import zhCN from "ant-design-vue/es/locale/zh_CN";
export default {
	data() {
		return {
			locale: zhCN,
			// 分页数据
			pagination: {
				pagenum: 1,
				pagesize: 2,
				total: 0,
				pageSizeOptions: ["1", "2", "5", "10"],
			},
			//   表格数据
			table: {
				col: [
					{ title: "#", key: "index", slots: { customRender: "index" } },
					{ title: "商品名称", dataIndex: "goods_name", key: "goods_name" },
					{
						title: "商品价格(元)",
						dataIndex: "goods_price",
						key: "goods_price",
					},
					{ title: "商品重量", dataIndex: "goods_weight", key: "goods_weight" },
					{ title: "创建时间", dataIndex: "add_time", key: "add_time" },
					{
						title: "操作",
						key: "operation",
						slots: { customRender: "operation" },
					},
				],
				data: [],
			},
		};
	},
	created() {
		this.handleGoodsList();
	},
	methods: {
		handleGoodsList() {
			httpGet(goods.GetGoods, {
				pagenum: this.pagination.pagenum,
				pagesize: this.pagination.pagesize,
			})
				.then((res) => {
					//   console.log(res);
					let { data, meta } = res;
					if (meta.status == 200) {
						this.table.data = data.goods;
						this.pagination.total = data.total;
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// 根据每页显示多少条数据不同 重新渲染表格
		onShowSizeChange(current, pageSize) {
			// console.log(current, pageSize);
			this.pagination.pagenum = current;
			this.pagination.pagesize = pageSize;
			this.handleGoodsList();
		},
		// 页码改变的回调，参数是改变后的页码及每页条数
		handlePageChange(page, pageSize) {
			this.pagination.pagenum = page;
			this.pagination.pagesize = pageSize;
			this.handleGoodsList();
		},
	},
	components: {
		EditOutlined,
		DeleteOutlined,
	},
};
</script>

<style></style>
