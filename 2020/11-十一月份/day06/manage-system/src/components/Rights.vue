<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>权限管理</a-breadcrumb-item>
      <a-breadcrumb-item>权限列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-table
      :row-key="(record) => record.id"
      :columns="tableColumns"
      :data-source="tableData"
      :pagination="false"
      bordered
    >
      <template #index="{ index }">
        {{ index + 1 }}
      </template>

      <template #level="{ record }">
        <a-tag v-if="record.level == 0" color="red"> 一级 </a-tag>
        <a-tag v-else-if="record.level == 1" color="orange"> 二级 </a-tag>
        <a-tag v-else-if="record.level == 2" color="green"> 三级 </a-tag>
      </template>
    </a-table>
  </a-layout>
</template>

<script>
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";

// 引入请求路径
import { rights } from "@/api";
export default {
  data() {
    return {
      tableColumns: [
        { title: "#", key: "index", slots: { customRender: "index" } },
        { title: "权限名称", dataIndex: "authName", key: "authName" },
        { title: "路径", dataIndex: "path", key: "path" },
        { title: "权限等级", key: "level", slots: { customRender: "level" } },
      ],
      tableData: [],
    };
  },
  created() {
    this.getRights();
  },
  methods: {
    getRights() {
      httpGet(rights.GetRights)
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
  },
};
</script>

<style>
</style>