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
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <!-- 添加用户 -->
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
                <a-button type="primary" size="large" @click="addUserModal">
                  添加用户
                </a-button>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-form>
      <!-- 表格 -->
      <a-table
        :row-key="(record) => record.id"
        :columns="tableColumns"
        :data-source="tableData"
        :pagination="false"
        bordered
      >
        <template #mg_state="{ text }">
          <a-switch
            v-model:checked="text.mg_state"
            :id="text.id"
            @click="handleState"
          />
        </template>

        <template #operation="{ record }">
          <!-- 编辑 -->
          <a-button type="primary" @click="handleReadUser(record.id)">
            <EditOutlined />
          </a-button>
          <!-- 删除 -->
          <a-button
            type="danger"
            style="margin: 0 10px"
            @click="handleDeleteUser(record.id)"
          >
            <DeleteOutlined
          /></a-button>
          <!-- 权限 -->
          <a-button
            type="default"
            style="background-color: #e6a23c; color: #fff"
            @click="handleReadRole(record)"
          >
            <SettingOutlined
          /></a-button>
        </template>
      </a-table>
      <!-- 分页 -->
      <a-pagination
        style="margin-top: 25px"
        v-model:current="current"
        :total="total"
        :show-total="(total) => `共 ${total} 条`"
        show-size-changer
        @showSizeChange="onShowSizeChange"
        :page-size-options="pageSizeOptions"
        :defaultPageSize="2"
        @change="handlePageChange"
        show-quick-jumper
        v-model:pageSize="pagesize"
      />
    </div>
    <!-- 添加用户弹出框 -->
    <a-modal
      title="添加用户"
      cancelText="取消"
      okText="确定"
      v-model:visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleAddUser"
    >
      <a-form ref="ruleForm" :model="addUserModel" :rules="addUserRules">
        <a-row>
          <a-col :span="24">
            <!-- 用户名 -->
            <a-form-item
              required
              has-feedback
              label="用户名"
              name="username"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input type="text" v-model:value="addUserModel.username" />
            </a-form-item>
            <!-- 密码 -->
            <a-form-item
              required
              has-feedback
              label="密码"
              name="password"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input-password
                type="password"
                v-model:value="addUserModel.password"
              />
            </a-form-item>

            <!-- 邮箱 -->
            <a-form-item
              required
              has-feedback
              label="邮箱"
              name="email"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input type="text" v-model:value="addUserModel.email" />
            </a-form-item>

            <!-- 手机号 -->
            <a-form-item
              required
              has-feedback
              label="手机号"
              name="mobile"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input type="text" v-model:value="addUserModel.mobile" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
    <!-- 添加编辑弹出框 -->
    <a-modal
      title="添加用户"
      cancelText="取消"
      okText="确定"
      v-model:visible="editvisible"
      @ok="handleEditUser"
    >
      <a-form ref="editruleForm" :model="editUserModel" :rules="editUserRules">
        <a-row>
          <a-col :span="24">
            <!-- 用户名 -->
            <a-form-item
              label="用户名"
              name="username"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input
                type="text"
                disabled
                v-model:value="editUserModel.username"
              />
            </a-form-item>

            <!-- 邮箱 -->
            <a-form-item
              required
              has-feedback
              label="邮箱"
              name="email"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input type="text" v-model:value="editUserModel.email" />
            </a-form-item>

            <!-- 手机号 -->
            <a-form-item
              required
              has-feedback
              label="手机号"
              name="mobile"
              :labelCol="{ span: 4 }"
              :wrapperCol="{ span: 20 }"
            >
              <a-input type="text" v-model:value="editUserModel.mobile" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </a-modal>
    <!-- 分配角色弹出框 -->
    <a-modal
      v-model:visible="rolevisible"
      title="分配角色"
      ok-text="确认"
      cancel-text="取消"
      @ok="handleEditRole"
    >
      <p>当前的用户：{{ userInfo.username }}</p>
      <p>当前的角色：{{ userInfo.role_name }}</p>
      <p>
        分配新角色：
        <a-select
          v-model:value="selectrole"
          style="width: 120px"
          ref="select"
          placeholder="请选择"
        >
          <a-select-option
            v-for="item in roleList"
            :key="item.id"
            :value="item.id"
          >
            {{ item.roleName }}
          </a-select-option>
        </a-select>
      </p>
    </a-modal>
  </a-layout>
</template>

<script>
// 引入请求方法 httpGet
import { httpGet, httpPost, httpDelete, httpPut } from "@/utils/http";

// 引入请求路径
import { user, roles } from "@/api";
// 引入小图标
// 引入菜单小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
// 引入全局提示消息框
import { message, Modal } from "ant-design-vue";
import { createVNode } from "vue";
export default {
  created() {
    // 调用获取用户数据的方法
    this.getUsers();
  },
  data() {
    let checkemail = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入您的邮箱");
      } else if (
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
      ) {
        return Promise.reject("您的邮箱格式不正确");
      } else {
        return Promise.resolve();
      }
    };
    let checkmobile = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入您的手机号");
      } else if (!/^[1]([3-9])[0-9]{9}$/.test(value)) {
        return Promise.reject("您的手机号格式不正确");
      } else {
        return Promise.resolve();
      }
    };
    return {
      // 表格列配置
      tableColumns: [
        { title: "#", dataIndex: "index", key: "index" },
        { title: "姓名", dataIndex: "username", key: "username" },
        { title: "邮箱", dataIndex: "email", key: "email" },
        { title: "电话", dataIndex: "mobile", key: "mobile" },
        { title: "角色", dataIndex: "role_name", key: "role_name" },
        { title: "状态", key: "mg_state", slots: { customRender: "mg_state" } },
        {
          title: "操作",
          key: "operation",
          slots: { customRender: "operation" },
        },
      ],
      // 表格数据
      tableData: [],
      // 分页
      current: 1,
      pagesize: 2,
      total: 0,
      // 指定每页可以显示多少条
      pageSizeOptions: ["1", "2", "5", "10"],

      // 添加用户弹出框
      visible: false,
      confirmLoading: false,
      addUserModel: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      addUserRules: {
        username: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur",
          },
          {
            min: 4,
            max: 16,
            message: "长度在4~16之间",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur",
          },
          {
            min: 6,
            max: 16,
            message: "长度在6~16之间",
            trigger: "blur",
          },
        ],
        email: [{ validator: checkemail, trigger: "change" }],
        mobile: [{ validator: checkmobile, trigger: "change" }],
      },
      // 编辑用户
      editUserModel: {},
      editUserRules: {
        email: [{ validator: checkemail, trigger: "change" }],
        mobile: [{ validator: checkmobile, trigger: "change" }],
      },
      editvisible: false,
      // 分配角色
      rolevisible: false,
      userInfo: {},
      selectrole: null,
      roleList: [],
    };
  },
  methods: {
    // 获取用户数据
    getUsers() {
      httpGet(user.GetUsers, {
        pagenum: this.current,
        pagesize: this.pagesize,
      })
        .then((response) => {
          // console.log(response);
          let { meta, data } = response;
          // 如果后台返回的状态码为200,则代表请求成
          if (meta.status == 200) {
            // 设置表格数据
            this.tableData = data.users;
            // 设置当前页码
            this.current = data.pagenum;
            // 设置数据总数
            this.total = data.total;
            // 给每条数据添加序号(index)属性
            this.tableData.forEach((ele, index) => {
              ele.index = index + 1;
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 根据每页显示多少条数据不同 重新渲染表格
    onShowSizeChange(current, pageSize) {
      // console.log(current, pageSize);
      this.getUsers(current, pageSize);
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.getUsers(page, pageSize);
    },
    // 显示模态框
    addUserModal() {
      this.visible = true;
    },
    // 添加用户
    handleAddUser() {
      this.$refs.ruleForm
        .validate()
        .then(() => {
          let params = {
            username: this.addUserModel.username,
            password: this.addUserModel.password,
            email: this.addUserModel.email,
            mobile: this.addUserModel.mobile,
          };
          httpPost(user.AddUsers, params)
            .then((res) => {
              let { meta } = res;
              if (meta.status == 400) {
                return message.success(meta.msg);
              }
              if (meta.status == 201) {
                // 模态框消失
                this.visible = false;
                message.success(meta.msg);
                this.$refs.ruleForm.resetFields();
                this.getUsers();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 删除用户
    handleDeleteUser(id) {
      let _this = this;
      Modal.confirm({
        title: "提示",
        icon: createVNode(ExclamationCircleOutlined),
        content: "您真的要删除吗?",
        cancelText: "取消",
        okText: "确定",
        onOk() {
          httpDelete(user.DeleteUsers + `/${id}`)
            .then((res) => {
              // console.log(res);
              let { meta } = res;
              if (meta.status == 400) {
                // 失败提示
                return message.error(meta.msg);
              }
              if (meta.status == 200) {
                // 成功提示
                message.success(meta.msg);
                // 刷新页面
                _this.getUsers();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
        onCancel() {},
      });
    },
    // 回显用户信息
    handleReadUser(id) {
      this.editvisible = true;
      httpGet(user.GetUser + `/${id}`)
        .then((res) => {
          // console.log(res);
          let { data, meta } = res;
          if (meta.status == 200) {
            this.editUserModel = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 更新用户
    handleEditUser() {
      this.$refs.editruleForm
        .validate()
        .then(() => {
          httpPut(
            user.EditUser + `/${this.editUserModel.id}`,
            this.editUserModel
          )
            .then((res) => {
              // console.log(res);
              let { meta } = res;
              if (meta.status == 200) {
                this.editvisible = false;
                message.success(meta.msg);
                this.getUsers();
              }
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 回显角色信息
    handleReadRole(user) {
      this.rolevisible = true;
      this.userInfo = user;
      // console.log(this.userInfo);
      httpGet(roles.getRoles)
        .then((res) => {
          // console.log(res);
          let { data, meta } = res;
          if (meta.status == 200) {
            this.roleList = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 更改角色
    handleEditRole() {
      httpPut(`users/${this.userInfo.id}/role`, { rid: this.selectrole })
        .then((res) => {
          // console.log(res);
          let { meta } = res;
          if (meta.status == 400) {
            return message.error(meta.msg);
          }
          if (meta.status == 200) {
            this.rolevisible = false;
            message.success(meta.msg);
            this.selectrole = null;
            this.getUsers();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 更改状态
    handleState(checked, event) {
      httpPut(`users/${event.target.id}/state/${checked}`)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },
};
</script>

<style></style>
