<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>权限管理</a-breadcrumb-item>
      <a-breadcrumb-item>角色列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-row>
      <a-col :span="5">
        <a-button
          style="margin-bottom: 10px"
          type="primary"
          size="large"
          @click="showmodal"
        >
          添加用户
        </a-button>
        <!-- 添加用户模态框 -->
        <a-modal
          title="添加角色"
          cancelText="取消"
          okText="确定"
          v-model:visible="rolevisible"
          @ok="handleRoleUser"
        >
          <a-form ref="ruleForm" :model="RoleUserModel" :rules="RoleUserRules">
            <a-row>
              <a-col :span="24">
                <!-- 用户名 -->
                <a-form-item
                  required
                  has-feedback
                  label="角色名称"
                  name="roleName"
                  :labelCol="{ span: 4 }"
                  :wrapperCol="{ span: 20 }"
                >
                  <a-input type="text" v-model:value="RoleUserModel.roleName" />
                </a-form-item>
                <!-- 手机号 -->
                <a-form-item
                  label="角色描述"
                  name="roleDesc"
                  :labelCol="{ span: 4 }"
                  :wrapperCol="{ span: 20 }"
                >
                  <a-input type="text" v-model:value="RoleUserModel.roleDesc" />
                </a-form-item>
              </a-col>
            </a-row>
          </a-form>
        </a-modal>
      </a-col>
    </a-row>
    <a-table
      :row-key="(record) => record.id"
      :columns="tableColumns"
      :data-source="tableData"
      :pagination="false"
      childrenColumnName="abc"
      bordered
    >
      <template #expandedRowRender="{ record }">
        <!-- {{ record }} -->
        <a-row
          :class="['vcenter bdbottom', index1 == 0 ? 'bdtop' : '']"
          v-for="(item1, index1) in record.children"
          :key="item1.id"
        >
          <!-- 一级 -->
          <a-col :span="5">
            <span>
              <a-tag color="blue" closable>{{ item1.authName }} </a-tag
              ><CaretRightOutlined />
            </span>
          </a-col>
          <a-col :span="19">
            <a-row
              :class="[index2 == item1.children.length - 1 ? '' : 'bdbottom']"
              v-for="(item2, index2) in item1.children"
              :key="item2.id"
            >
              <a-col :span="8">
                <span>
                  <a-tag color="green" closable>{{ item2.authName }} </a-tag
                  ><CaretRightOutlined />
                </span>
              </a-col>
              <a-col :span="16">
                <a-tag
                  v-for="item3 in item2.children"
                  :key="item3.id"
                  color="orange"
                  closable
                  >{{ item3.authName }}
                </a-tag>
              </a-col>
            </a-row>
          </a-col>
        </a-row>
      </template>
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
        <!-- 权限 -->
        <a-button type="default" style="background-color: #e6a23c; color: #fff">
          <SettingOutlined
        /></a-button>
      </template>
    </a-table>
  </a-layout>
</template>

<script>
// 引入请求方法 httpGet
import { httpGet, httpPost } from "@/utils/http";

// 引入请求路径
import { roles } from "@/api";
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  CaretRightOutlined,
} from "@ant-design/icons-vue";
import { message } from "ant-design-vue";
export default {
  data() {
    return {
      tableColumns: [
        { title: "#", key: "index", slots: { customRender: "index" } },
        { title: "角色名称", dataIndex: "roleName", key: "roleName" },
        { title: "角色描述", dataIndex: "roleDesc", key: "roleDesc" },
        {
          title: "操作",
          key: "operation",
          slots: { customRender: "operation" },
        },
      ],
      tableData: [],
      RoleUserModel: {
        roleName: "",
        roleDesc: "",
      },
      RoleUserRules: {
        roleName: [
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
      },
      rolevisible: false,
    };
  },
  created() {
    this.handlegetRoles();
  },
  methods: {
    handlegetRoles() {
      httpGet(roles.getRoles)
        .then((res) => {
          //   console.log(res);
          let { data, meta } = res;
          if (meta.status == 200) {
            this.tableData = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    showmodal() {
      this.rolevisible = true;
    },
    handleRoleUser() {
      this.$refs.ruleForm
        .validate()
        .then(() => {
          let params = {
            roleName: this.RoleUserModel.roleName,
            roleDesc: this.RoleUserModel.roleDesc,
          };
          httpPost(roles.addRoles, params)
            .then((res) => {
              //   console.log(res);
              let { meta } = res;
              if (meta.status == 201) {
                this.rolevisible = false;
                // 清空
                this.$refs.ruleForm.resetFields();
                message.success(meta.msg);
                this.handlegetRoles();
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
  },
  components: {
    EditOutlined,
    DeleteOutlined,
    SettingOutlined,
    CaretRightOutlined,
  },
};
</script>

<style>
.ant-tag {
  padding: 2px 14px;
  font-size: 14px;
}

.ant-tag {
  margin: 7px;
}

.bdtop {
  border-top: 1px solid #eee;
}

.bdbottom {
  border-bottom: 1px solid #eee;
}

.vcenter {
  display: flex;
  align-items: center;
}
</style>