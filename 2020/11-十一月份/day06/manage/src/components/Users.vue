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
            <a-col class="gutter-row" :span="16">
              <a-form-item :wrapperCol="{ span: 24 }">
                <a-input-search size="large" placeholder="请输入内容" />
              </a-form-item>
            </a-col>
            <a-col class="gutter-row" :span="8">
              <a-button type="primary" size="large"> 添加用户 </a-button>
            </a-col>
          </a-row>
        </a-col>
      </a-row>
    </a-form>
    <!-- 表格 -->
    <a-table
      :columns="tableColumns"
      :data-source="tableData"
      bordered
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
        <a-button type="danger" style="margin: 0 10px">
          <DeleteOutlined
        /></a-button>
        <!-- 权限 -->
        <a-button type="default" style="background-color: #e6a23c; color: #fff">
          <SettingOutlined
        /></a-button>
      </template>
    </a-table>
  </div>
</template>

<script>
// 引入请求方法
import { httpGet } from "@/utils/http";
// 引入请求路径
import { user } from "@/api";
// 引入菜单小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
} from "@ant-design/icons-vue";
export default {
  data() {
    return {
      tableColumns: [
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
      tableData: [],
    };
  },
  created() {
    // 调用获取用户数据的方法
    this.getUsers();
  },
  methods: {
    getUsers() {
      httpGet(user.GetUsers, {
        pagenum: 1,
        pagesize: 2,
      })
        .then((response) => {
          // console.log(response);
          let { meta, data } = response;
          if (meta.status == 200) {
            this.tableData = data.users;
            this.tableData.forEach((ele, index) => {
              ele.index = index + 1;
              // console.log(ele.index);
            });
          }
        })
        .catch((error) => {
          console.log(error);
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

<style>
</style>