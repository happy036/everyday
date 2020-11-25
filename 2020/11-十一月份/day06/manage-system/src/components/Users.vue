<template>
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
            <a-col class="gutter-row" :span="18">
              <a-input-search size="large" placeholder="请输入内容" />
            </a-col>
            <a-col class="gutter-row" :span="6">
              <a-button type="primary" size="large" @click="showModal">
                添加用户
              </a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-form>
    <!-- 添加用户 -->

    <!-- 表格 -->
    <a-table
      :columns="columns"
      :data-source="data"
      bordered
      :pagination="false"
      :row-key="(record) => record.id"
    >
      <template #mg_state="{ text }">
        <a-switch :checked="text.mg_state" />
      </template>
      <template #operation="{ record }">
        <!-- 编辑 -->
        <a-button type="primary" @click="handleReadUser(record.id)">
          <EditOutlined />
        </a-button>
        <!-- 删除 -->
        <a-button
          type="danger"
          style="margin-left: 15px"
          @click="handleDeleteUser(record.id)"
        >
          <DeleteOutlined />
        </a-button>
        <!-- 设置 -->
        <a-button
          style="background-color: #e6a23c; color: #fff; margin-left: 15px"
          ><SettingOutlined
        /></a-button>
      </template>
    </a-table>
    <!-- 表格 -->

    <!-- 分页 -->
    <a-pagination
      style="margin-top: 25px"
      v-model:current="current"
      :total="total"
      :show-total="(total) => `共 ${total} 条`"
      show-size-changer
      @showSizeChange="onShowSizeChange"
      :defaultPageSize="2"
      @change="handlechange"
      :page-size-options="pageSizeOptions"
      show-quick-jumper
      v-model:pageSize="pagesize"
    />
    <!-- 分页 -->
  </div>
  <!-- 添加用户弹出框 -->
  <a-modal
    title="添加用户"
    v-model:visible="addvisible"
    :confirm-loading="confirmLoading"
    cancelText="取消"
    okText="确认"
    @ok="handelUser"
    @cancel="cancelAddUser"
  >
    <a-form :model="addFormModel" :rules="addFormRules" ref="addFormRef">
      <a-row>
        <a-col :span="24">
          <a-form-item
            required
            has-feedback
            label="用户名"
            name="username"
            :labelCol="{ span: '4' }"
            :wrapperCol="{ span: '20' }"
          >
            <a-input type="text" v-model:value="addFormModel.username" />
          </a-form-item>
          <a-form-item
            required
            has-feedback
            label="密码"
            name="password"
            :labelCol="{ span: '4' }"
            :wrapperCol="{ span: '20' }"
          >
            <a-input type="password" v-model:value="addFormModel.password" />
          </a-form-item>
          <a-form-item
            required
            has-feedback
            label="邮箱"
            name="email"
            :labelCol="{ span: '4' }"
            :wrapperCol="{ span: '20' }"
          >
            <a-input type="text" v-model:value="addFormModel.email" />
          </a-form-item>
          <a-form-item
            required
            has-feedback
            label="手机号"
            name="mobile"
            :labelCol="{ span: '4' }"
            :wrapperCol="{ span: '20' }"
          >
            <a-input type="text" v-model:value="addFormModel.mobile" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
  <!-- 编辑用户弹出框 -->
  <a-modal
    title="编辑用户"
    v-model:visible="editvisible"
    :confirm-loading="confirmLoading"
    cancelText="取消"
    okText="确认"
    @ok="handelEditUser"
    @cancel="cancelEditUser"
  >
    <a-form :model="editFormModel" :rules="editFormRules" ref="editFormRef">
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="用户名"
            name="username"
            :labelCol="{ span: '4' }"
            :wrapperCol="{ span: '20' }"
          >
            <a-input
              type="text"
              disabled
              v-model:value="editFormModel.username"
            />
          </a-form-item>
          <a-form-item
            required
            has-feedback
            label="邮箱"
            name="email"
            :labelCol="{ span: '4' }"
            :wrapperCol="{ span: '20' }"
          >
            <a-input type="text" v-model:value="editFormModel.email" />
          </a-form-item>
          <a-form-item
            required
            has-feedback
            label="手机号"
            name="mobile"
            :labelCol="{ span: '4' }"
            :wrapperCol="{ span: '20' }"
          >
            <a-input type="text" v-model:value="editFormModel.mobile" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-modal>
</template>

<script>
// 引入小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons-vue";
// 引入请求方式
import { httpGet, httpPost, httpDelete, httpPut } from "../util/http";
// 引入请求路径
import { user } from "../api/index";
// 引入全局提示框
import { message, Modal } from "ant-design-vue";
// 引入虚拟dom
import { createVNode } from "vue";
export default {
  data() {
    // 自定义表单校验email
    let checkEmail = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入您的邮箱");
      } else if (
        !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)
      ) {
        return Promise.reject("您的邮箱格式错误!");
      } else {
        return Promise.resolve();
      }
    };
    // 自定义表单校验mobile
    let checkMobile = async (rule, value) => {
      if (value === "") {
        return Promise.reject("请输入您的手机号");
      } else if (!/^[1]([3-9])[0-9]{9}$/.test(value)) {
        return Promise.reject("您的手机号格式错误!");
      } else {
        return Promise.resolve();
      }
    };
    return {
      addvisible: false,
      editvisible: false,
      confirmLoading: false,
      columns: [
        {
          title: "#",
          dataIndex: "index",
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
          key: "mg_state",
          slots: { customRender: "mg_state" },
        },
        {
          title: "操作",
          key: "operation",
          slots: { customRender: "operation" },
        },
      ],
      data: [],
      current: 1,
      pagesize: 2,
      //一共有多少数据
      total: 0,
      pageSizeOptions: ["1", "2", "5", "10"],
      // 添加用户，模型对象
      addFormModel: {
        username: "",
        password: "",
        email: "",
        mobile: "",
      },
      // 规则
      addFormRules: {
        // 给那个字段添加什么规则
        username: [
          // required 必须的
          // trigger 啥时候触发
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 4, max: 16, message: "长度在4-16个字符之间", trigger: "blur" },
        ],
        password: [
          // required 必须的
          // trigger 啥时候触发
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在6-16个字符之间", trigger: "blur" },
        ],
        email: [{ validator: checkEmail, trigger: "change" }],
        mobile: [{ validator: checkMobile, trigger: "change" }],
      },
      editFormModel: {},
      editFormRules: {
        email: [{ validator: checkEmail, trigger: "change" }],
        mobile: [{ validator: checkMobile, trigger: "change" }],
      },
    };
  },
  created() {
    this.getTable();
  },
  methods: {
    getTable() {
      httpGet(user.loginTable, {
        pagenum: this.current,
        pagesize: this.pagesize,
      })
        .then((response) => {
          //   console.log(response);
          let { data, meta } = response;
          if (meta.status == 200) {
            this.data = data.users;
            this.current = data.pagenum;
            this.total = data.total;
            // 给数据添加序号
            this.data.forEach((ele, index) => {
              ele.index = index + 1;
            });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showModal() {
      this.addvisible = true;
    },
    onShowSizeChange(current, pageSize) {
      this.getTable(current, pageSize);
    },
    handlechange(page, pageSize) {
      this.getTable(page, pageSize);
    },
    // 添加用户
    handelUser() {
      // 表单校验拦截
      this.$refs.addFormRef
        .validate()
        .then(() => {
          // 获取请求参数
          let params = {
            username: this.addFormModel.username,
            password: this.addFormModel.password,
            email: this.addFormModel.email,
            mobile: this.addFormModel.mobile,
          };
          // console.log(params);
          // 发起请求
          httpPost(user.addUser, params)
            .then((response) => {
              // console.log(response);
              let { meta } = response;
              if (meta.status == 201) {
                this.addvisible = false;
                // 清空数据
                this.$refs.addFormRef.resetFields();
                message.success(meta.msg);
                this.getTable();
              }
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // 取消添加用户
    cancelAddUser() {
      this.$refs.addFormRef.resetFields();
    },
    // 删除用户
    handleDeleteUser(userId) {
      let _this = this;
      Modal.confirm({
        title: "提示",
        icon: createVNode(ExclamationCircleOutlined),
        content: "此操作将永久删除该用户,是否继续?",
        okText: "确认",
        cancelText: "取消",
        // 当点击确认按钮的回调
        onOk() {
          httpDelete(user.deleteUser + `/${userId}`)
            .then((response) => {
              // console.log(response);
              let { meta } = response;
              // 删除失败，提示用户
              if (meta.status == 400) {
                return message.error(meta.msg);
              }
              // 删除成功 提示用户
              if (meta.status == 200) {
                _this.getTable();
                return message.success(meta.msg);
              }
            })
            .catch((err) => {
              console.log(err);
            });
        },
        onCancel() {
          message.warning("已取消删除！！");
        },
      });
    },
    // 回显用户信息
    handleReadUser(userId) {
      // console.log(userId);
      this.editvisible = true;
      httpGet(user.getUser + `/${userId}`)
        .then((response) => {
          // console.log(response);
          let { data, meta } = response;
          if (meta.status == 200) {
            this.editFormModel = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 更新用户信息
    handelEditUser() {
      this.$refs.editFormRef
        .validate()
        .then(() => {
          // console.log(111);
          httpPut(
            user.putUsers + `/${this.editFormModel.id}`,
            this.editFormModel
          )
            .then((response) => {
              // console.log(response);
              let { meta } = response;
              if (meta.status == 200) {
                // 模态框消失
                this.editvisible = false;
                // 提示用户信息
                message.success(meta.msg);
                // 刷新表格数据
                this.getTable();
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
    cancelEditUser() {},
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },
};
</script>

<style></style>
