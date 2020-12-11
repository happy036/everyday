<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>权限管理</a-breadcrumb-item>
      <a-breadcrumb-item>角色列表</a-breadcrumb-item>
    </a-breadcrumb>

    <a-card>
      <a-row style="margin-bottom: 24px">
        <a-col :span="24">
          <!-- 添加角色 -->
          <a-button type="primary"> 添加角色 </a-button>
        </a-col>
      </a-row>

      <!-- 表格 -->
      <a-table
        :columns="rolesColumns"
        :data-source="rolesData"
        bordered
        :pagination="false"
        :row-key="(record) => record.id"
        childrenColumnName="abc"
      >
        <template #index="{ index }">
          {{ index + 1 }}
        </template>
        <template #expandedRowRender="{ record }">
          <a-row
            :class="['bdbottom vcenter', index1 == 0 ? 'bdtop' : '']"
            v-for="(item1, index1) in record.children"
            :key="item1.id"
          >
            <!-- 一级渲染 -->
            <a-col :span="5">
              <span>
                <a-tag
                  color="blue"
                  @close="handleCloseTag($event, record.id, item1.id)"
                  closable
                >
                  {{ item1.authName }}
                </a-tag>
                <CaretRightOutlined />
              </span>
            </a-col>
            <!-- 二三级渲染 -->
            <a-col :span="19">
              <!-- 二级渲染 -->
              <a-row
                :class="['bdbottom vcenter']"
                v-for="item2 in item1.children"
                :key="item2.id"
              >
                <a-col :span="6">
                  <span>
                    <a-tag
                      color="green"
                      @close="handleCloseTag($event, record.id, item2.id)"
                      closable
                    >
                      {{ item2.authName }}
                    </a-tag>
                    <CaretRightOutlined />
                  </span>
                </a-col>
                <!-- 三级菜单 -->
                <a-col :span="18">
                  <span>
                    <a-tag
                      color="orange"
                      v-for="item3 in item2.children"
                      :key="item3.id"
                      @close="handleCloseTag($event, record.id, item3.id)"
                      closable
                    >
                      {{ item3.authName }}
                    </a-tag>
                  </span>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
          <!-- {{ record }} -->
        </template>
        <template #operation="{ record }">
          <!-- 编辑 -->
          <a-button size="small" type="primary">
            <EditOutlined />编辑
          </a-button>
          <!-- 删除 -->
          <a-button size="small" type="danger" style="margin: 0 10px">
            <DeleteOutlined />删除
          </a-button>
          <!-- 角色 -->
          <a-button
            type="default"
            size="small"
            style="background-color: #e6a23c; color: #fff"
            @click="handleTreeShow(record)"
          >
            <SettingOutlined />分配权限</a-button
          >
        </template>
      </a-table>
    </a-card>
    <!-- 树形模态框 -->
    <a-modal
      title="分配权限"
      v-model:visible="tree.visible"
      :afterClose="handleClean"
    >
      <a-tree
        checkable
        :tree-data="tree.treeData"
        v-model:checkedKeys="tree.checkedKeys"
        defaultExpandAll
        :replaceFields="{ children: 'children', title: 'authName', key: 'id' }"
      />
    </a-modal>
  </a-layout>
</template>

<script>
// 导入接口
import { role, rights } from "@/api";
// 导入请求方法
import { httpGet, httpDelete } from "@/utils/http";
// 引入菜单小图标
import {
  EditOutlined,
  DeleteOutlined,
  SettingOutlined,
  CaretRightOutlined,
} from "@ant-design/icons-vue";
import { ExclamationCircleOutlined } from "@ant-design/icons-vue";
import { createVNode } from "vue";
import { Modal, message } from "ant-design-vue";
export default {
  data() {
    return {
      rolesColumns: [
        {
          // 列的名称
          title: "#",
          key: "index",
          // customRender自定义渲染
          slots: { customRender: "index" },
        },
        {
          // 列的名称
          title: "角色名称",
          dataIndex: "roleName",
        },
        {
          // 列的名称
          title: "角色描述",
          dataIndex: "roleDesc",
        },
        {
          // 列的名称
          title: "操作",
          key: "operation",
          // customRender自定义渲染
          slots: { customRender: "operation" },
        },
      ],
      rolesData: [],
      tree: {
        visible: false,
        treeData: [],
        checkedKeys: [],
      },
    };
  },
  created() {
    this.handleReadRoles();
  },
  methods: {
    handleReadRoles() {
      httpGet(role.GetRoles)
        .then((response) => {
          // console.log(response);
          let { data, meta } = response;

          if (meta.status == 200) {
            this.rolesData = data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleCloseTag(e, roleId, rightId) {
      const _this = this;
      e.preventDefault();
      Modal.confirm({
        title: "提示",
        icon: createVNode(ExclamationCircleOutlined),
        content: "真的要删除?",
        onOk() {
          httpDelete(`roles/${roleId}/rights/${rightId}`)
            .then((res) => {
              // console.log(res);
              let { meta } = res;
              if (meta.status == 200) {
                // 提示
                message.success(meta.msg);
                // 刷新页面
                _this.handleReadRoles();
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
    handleTreeShow(record) {
      this.tree.visible = true;
      httpGet(rights.GetTree)
        .then((res) => {
          // console.log(res);
          let { data, meta } = res;
          if (meta.status == 200) {
            this.tree.treeData = data;
            this.handleTree(record, this.tree.checkedKeys);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // node角色信息
    handleTree(node, arr) {
      if (!node.children) {
        // 看第一层有没有children
        return arr.push(node.id);
      }
      node.children.forEach((ele) => this.handleTree(ele, arr));
    },
    handleClean() {
      this.tree.checkedKeys = [];
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
