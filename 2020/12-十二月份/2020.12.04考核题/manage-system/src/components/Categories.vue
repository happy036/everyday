<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>商品管理</a-breadcrumb-item>
      <a-breadcrumb-item>商品分类</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <a-row style="margin-bottom: 24px">
        <a-col :span="24">
          <!-- 添加角色 -->
          <a-button type="primary"> 添加分类 </a-button>
        </a-col>
      </a-row>
      <a-table
        :row-key="(record) => record.cat_id"
        :columns="table.col"
        :data-source="table.data"
        :pagination="false"
        :expandIconColumnIndex="1"
        bordered
      >
        <template #index="{ record, index }">
          <span v-if="record.cat_level == 0">{{ index + 1 }}</span>
        </template>
        <template #cat_deleted="{ record }">
          <CheckCircleTwoTone
            v-if="record.cat_deleted == false"
            twoToneColor="#52c41a"
          />
        </template>
        <template #cat_level="{ record }">
          <a-tag color="blue" v-if="record.cat_level == 0">一级</a-tag>
          <a-tag color="green" v-if="record.cat_level == 1">二级</a-tag>
          <a-tag color="orange" v-if="record.cat_level == 2">三级</a-tag>
        </template>
        <template #operation>
          <!-- 编辑 -->
          <a-button size="small" type="primary">
            <EditOutlined />编辑
          </a-button>
          <a-button size="small" type="danger" style="margin: 0 10px">
            <DeleteOutlined />删除
          </a-button>
        </template>
      </a-table>
      <!-- 分页 -->
      <a-pagination
        style="margin-top: 25px"
        v-model:current="pagination.pagenum"
        :total="pagination.total"
        :show-total="(total) => `共 ${pagination.total} 条`"
        show-size-changer
        @showSizeChange="onShowSizeChange"
        :page-size-options="pagination.pageSizeOptions"
        :defaultPageSize="2"
        v-model:pageSize="pagination.pagesize"
        @change="handlePageChange"
        show-quick-jumper
      />
    </a-card>
  </a-layout>
</template>

<script>
// 引入请求路径
import { categories } from "@/api";
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";
import {
  CheckCircleTwoTone,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons-vue";
export default {
  data() {
    return {
      table: {
        col: [
          { title: "#", slots: { customRender: "index" }, key: "index" },
          { title: "分类名称", dataIndex: "cat_name", key: "cat_name" },
          {
            title: "是否有效",
            slots: { customRender: "cat_deleted" },
            key: "cat_deleted",
          },
          {
            title: "排序",
            slots: { customRender: "cat_level" },
            key: "cat_level",
          },
          {
            title: "操作",
            slots: { customRender: "operation" },
            key: "operation",
          },
        ],
        data: [],
      },
      pagination: {
        pagesize: 2,
        pagenum: 1,
        total: 0,
        pageSizeOptions: ["1", "2", "5", "10"],
      },
    };
  },
  created() {
    this.handleList();
  },
  methods: {
    handleList() {
      httpGet(categories.Getkind, {
        type: [1, 2, 3],
        pagenum: this.pagination.pagenum,
        pagesize: this.pagination.pagesize,
      })
        .then((res) => {
          //   console.log(res);
          let { data, meta } = res;
          if (meta.status == 200) {
            this.table.data = data.result;
            this.pagination.total = data.total;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 根据每页显示多少条数据不同 重新渲染表格
    onShowSizeChange(current, pageSize) {
      this.pagination.pagenum = current;
      this.pagination.pagesize = pageSize;
      //   this.handleGoods();
      this.handleList();
    },

    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagination.pagenum = page;
      this.pagination.pagesize = pageSize;
      //   this.handleGoods();
      this.handleList();
    },
  },
  components: {
    CheckCircleTwoTone,
    EditOutlined,
    DeleteOutlined,
  },
};
</script>

<style>
</style>