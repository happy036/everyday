<template>
	<a-layout>
		<a-breadcrumb style="margin: 16px 0">
			<a-breadcrumb-item
				><router-link to="/home" style="font-weight: bold; color: #000"
					>首页</router-link
				></a-breadcrumb-item
			>
			<a-breadcrumb-item>用户管理</a-breadcrumb-item>
			<a-breadcrumb-item>用户列表</a-breadcrumb-item>
		</a-breadcrumb>
		<a-card>
			<!-- 主体 start -->
			<!-- 添加用户 -->
			<a-row>
				<a-col :span="6">
					<a-input-search size="large" placeholder="请输入内容" enter-button />
				</a-col>
				<a-col :span="5">
					<a-button
						size="large"
						type="primary"
						style="margin-left: 10px"
						@click="handleAddUser"
					>
						添加用户
					</a-button>
				</a-col>
			</a-row>
			<!-- 添加用户 -->
			<!-- 表格 -->
			<a-table
				:columns="table.cols"
				:data-source="table.data"
				bordered
				:row-key="(record) => record.id"
				style="margin-top: 10px"
				:pagination="false"
			>
				<template #index="{ index }">
					{{ index + 1 }}
				</template>
				<template #mg_state="{ text }">
					<a-switch v-model:checked="text.mg_state" />
				</template>
				<template #operation="{ record }">
					<!-- 编辑 -->
					<a-button
						type="primary"
						style="margin-right: 10px"
						@click="handleEdit(record)"
						><EditOutlined
					/></a-button>
					<!-- 删除 -->
					<a-button
						type="danger"
						style="margin-right: 10px"
						@click="handleDeleteUser(record)"
						><DeleteOutlined
					/></a-button>
					<!-- 设置 -->
					<a-button style="background-color: #dca450"
						><AppstoreOutlined
					/></a-button>
				</template>
			</a-table>
			<!-- 表格 -->

			<!-- 分页 -->
			<a-pagination
				style="margin-top: 10px"
				@change="handleChange"
				show-quick-jumper
				v-model:current="pag.pagenum"
				:page-size-options="pag.pageSizeOptions"
				show-size-changer
				:total="pag.total"
				:show-total="(total) => `共 ${pag.total} 条`"
				@showSizeChange="onShowSizeChange"
				v-model:pageSize="pag.pagesize"
			/>
			<!-- 分页 -->

			<!-- 主体 end -->
		</a-card>
		<!-- 添加用户模态框 -->
		<a-modal
			title="添加用户"
			v-model:visible="modal.visible"
			@ok="handleAdd"
			okText="确定"
			cancelText="取消"
		>
			<a-form
				ref="ruleForm"
				:model="modal.UserModel"
				:rules="modal.UserRules"
				:wrapper-col="{ span: 20 }"
				labelAlign="right"
			>
				<a-form-item label="用户名" name="username">
					<a-input v-model:value="modal.UserModel.username" />
				</a-form-item>
				<a-form-item label="密码" name="password">
					<a-input v-model:value="modal.UserModel.password" />
				</a-form-item>
				<a-form-item label="邮箱" name="email">
					<a-input v-model:value="modal.UserModel.email" />
				</a-form-item>
				<a-form-item label="手机" name="mobile">
					<a-input v-model:value="modal.UserModel.mobile" />
				</a-form-item>
			</a-form>
		</a-modal>
		<!-- 编辑用户模态框 -->
		<a-modal
			title="用户编辑"
			v-model:visible="modal.Editvisible"
			okText="确定"
			cancelText="取消"
			@ok="handleEditUser"
		>
			<a-form
				ref="ruleForm"
				:model="modal.UserModel"
				:rules="modal.EditRules"
				:wrapper-col="{ span: 20 }"
				labelAlign="right"
			>
				<a-form-item label="用户名" name="username2">
					<a-input disabled v-model:value="modal.UserModel.username2" />
				</a-form-item>
				<a-form-item label="邮箱" name="email2">
					<a-input v-model:value="modal.UserModel.email2" />
				</a-form-item>
				<a-form-item label="手机" name="mobile2">
					<a-input v-model:value="modal.UserModel.mobile2" />
				</a-form-item>
			</a-form>
		</a-modal>
	</a-layout>
</template>
<script>
// 引入请求路径
import { user } from "@/api";
// 引入请求方式
import { httpGet, httpPost, httpPut, httpDelete } from "@/utils/http";
// 引入小图标
import {
	EditOutlined,
	DeleteOutlined,
	AppstoreOutlined,
} from "@ant-design/icons-vue";
// 引入全局提示框
import { message } from "ant-design-vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { createVNode } from "vue";
import { Modal } from "ant-design-vue";
export default {
	data() {
		return {
			// 分页数据
			pag: {
				pagenum: 1,
				pagesize: 1,
				total: 0,
				pageSizeOptions: ["1", "5", "10", "15"],
			},
			// 表格数据
			table: {
				cols: [
					{
						title: "#",
						slots: { customRender: "index" },
						key: "index",
					},
					{
						title: "姓名",
						dataIndex: "username",
						key: "username",
					},
					{
						title: "邮箱",
						dataIndex: "email",
						key: "email",
					},
					{
						title: "电话",
						dataIndex: "mobile",
						key: "mobile",
					},
					{
						title: "角色",
						dataIndex: "role_name",
						key: "role_name",
					},
					{
						title: "状态",
						slots: { customRender: "mg_state" },
						key: "mg_state",
					},
					{
						title: "操作",
						slots: { customRender: "operation" },
						key: "operation",
					},
				],
				data: [],
			},
			// 模态框数据
			modal: {
				visible: false,
				Editvisible: false,
				// 表单数据
				UserModel: {
					username: "",
					password: "",
					email: "",
					mobile: "",
					username2: "",
					email2: "",
					mobile2: "",
				},
				// 表单规则
				UserRules: {
					username: [
						{ required: true, message: "用户名不能为空", trigger: "blur" },
					],
					password: [
						{ required: true, message: "密码不能为空", trigger: "blur" },
					],
					email: [{ required: true, message: "邮箱不能为空", trigger: "blur" }],
					mobile: [
						{ required: true, message: "手机号不能为空", trigger: "blur" },
					],
				},
				EditRules: {
					username2: [{ message: "用户名不能为空", trigger: "blur" }],
					email2: [
						{ required: true, message: "邮箱不能为空", trigger: "blur" },
					],
					mobile2: [
						{ required: true, message: "手机号不能为空", trigger: "blur" },
					],
				},
				UserID: "",
			},
		};
	},
	created() {
		this.handleReadUserList();
	},
	methods: {
		// 获取用户列表
		handleReadUserList() {
			httpGet(user.GetUserList, {
				pagenum: this.pag.pagenum,
				pagesize: this.pag.pagesize,
			})
				.then((res) => {
					// console.log(res);
					let { data, meta } = res;
					if (meta.status == 200) {
						this.table.data = data.users;
						this.pag.total = data.total;
						this.pag.pagenum = Number(data.pagenum);
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		handleChange(page, pageSize) {
			this.pag.pagenum = page;
			this.pag.pagesize = pageSize;
			this.handleReadUserList();
		},
		onShowSizeChange(current, size) {
			this.pag.pagenum = current;
			this.pag.pagesize = size;
			this.handleReadUserList();
		},
		// 显示添加用户模态框
		handleAddUser() {
			this.modal.visible = true;
		},
		// 添加用户
		handleAdd() {
			httpPost(user.addUser, {
				username: this.modal.UserModel.username,
				password: this.modal.UserModel.password,
				email: this.modal.UserModel.email,
				mobile: this.modal.UserModel.mobile,
			})
				.then((res) => {
					// console.log(res);
					let { meta } = res;
					if (meta.status == 201) {
						// 提示
						message.success(meta.msg);
						// 清空表单
						this.$refs.ruleForm.resetFields();
						// 关闭模态框
						this.modal.visible = false;
						// 刷新页面
						this.handleReadUserList();
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// 用户编辑回显
		handleEdit(record) {
			this.modal.Editvisible = true;
			// console.log(record);
			this.UserID = record.id;
			this.modal.UserModel.username2 = record.username;
			this.modal.UserModel.email2 = record.email;
			this.modal.UserModel.mobile2 = record.mobile;
		},
		// 用户编辑
		handleEditUser() {
			httpPut(`users/${this.UserID}`, {
				email: this.modal.UserModel.email2,
				mobile: this.modal.UserModel.mobile2,
			})
				.then((res) => {
					// console.log(res);
					let { meta } = res;
					if (meta.status == 200) {
						this.modal.Editvisible = false;
						message.success(meta.msg);
						this.handleReadUserList();
					}
				})
				.catch((err) => {
					console.log(err);
				});
		},
		// 删除用户
		handleDeleteUser(record) {
			let _this = this;
			Modal.confirm({
				title: "提示",
				icon: createVNode(ExclamationCircleOutlined),
				content: "是否删除该用户,是否继续?",
				okText: "确定",
				cancelText: "取消",
				onOk() {
					httpDelete(`users/${record.id}`)
						.then((res) => {
							// console.log(res);
							let { meta } = res;
							if (meta.status == 200) {
								message.success(meta.msg);
								_this.handleReadUserList();
							}
						})
						.catch((err) => {
							console.log(err);
						});
				},
				onCancel() {
					message.warning("已取消删除!");
				},
			});
		},
	},
	components: {
		EditOutlined,
		DeleteOutlined,
		AppstoreOutlined,
	},
};
</script>

<style>
.anticon :hover :focus {
	color: #ffffff;
}
</style>

