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
              <a-modal
                title="添加用户"
                v-model:visible="visible"
                :confirm-loading="confirmLoading"
                cancelText="取消"
                okText="确认"
              >
                <a-form>
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
                        <a-input type="text" />
                      </a-form-item>
                      <a-form-item
                        required
                        has-feedback
                        label="密码"
                        name="password"
                        :labelCol="{ span: '4' }"
                        :wrapperCol="{ span: '20' }"
                      >
                        <a-input type="password" />
                      </a-form-item>
                      <a-form-item
                        required
                        has-feedback
                        label="邮箱"
                        name="email"
                        :labelCol="{ span: '4' }"
                        :wrapperCol="{ span: '20' }"
                      >
                        <a-input type="text" />
                      </a-form-item>
                      <a-form-item
                        required
                        has-feedback
                        label="手机号"
                        name="mobile"
                        :labelCol="{ span: '4' }"
                        :wrapperCol="{ span: '20' }"
                      >
                        <a-input type="text" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-form>
              </a-modal>
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
      <template #operation>
        <!-- 编辑 -->
        <a-button type="primary">
          <EditOutlined />
        </a-button>
        <!-- 删除 -->
        <a-button type="danger" style="margin-left: 15px">
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
    />
    <!-- 分页 -->
  </div>
</template>

<script>
// 引入小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
// 引入请求方式
import { httpGet } from "../util/http";
// 引入请求路径
import { user } from "../api/index";
export default {
  data() {
    return {
      visible: false,
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
      //一共有多少数据
      total: 0,
      pageSizeOptions: ["1", "2", "5", "10"],
    };
  },
  created() {
    this.getTable();
  },
  methods: {
    getTable(pagenum = 1, pagesize = 2) {
      httpGet(user.loginTable, {
        pagenum: pagenum,
        pagesize: pagesize,
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
      this.visible = true;
    },
    onShowSizeChange(current, pageSize) {
      this.getTable(current, pageSize);
    },
    handlechange(page, pageSize) {
      this.getTable(page, pageSize);
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
  },
};
</script>

<style>
</style>