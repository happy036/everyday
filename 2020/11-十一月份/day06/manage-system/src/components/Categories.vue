<template>
  <a-layout>
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
      <a-row>
        <a-col :span="5">
          <a-button style="margin-bottom: 10px" type="primary" size="large">
            添加分类
          </a-button>
        </a-col>
      </a-row>
      <a-table
        :row-key="record => record.cat_id"
        :columns="table.col"
        :data-source="table.data"
        :pagination="false"
        :expandIconColumnIndex="1"
        bordered
      >
        <template #index="{ index, record }">
          <span v-if="record.cat_level == 0">{{ index + 1 }}</span>
        </template>
        <template #cat_deleted="{ record }">
          <CloseCircleTwoTone
            v-if="record.cat_deleted == false"
            twoToneColor="#52c41a"
          />
          <CheckCircleTwoTone
            v-if="record.cat_deleted == true"
            twoToneColor="#c41a16"
          />
        </template>
        <template #cat_level="{ record }">
          <a-tag v-if="record.cat_level == 0" color="orange"> 三级 </a-tag>
          <a-tag v-if="record.cat_level == 1" color="red"> 二级 </a-tag>
          <a-tag v-if="record.cat_level == 2" color="blue"> 一级 </a-tag>
        </template>
        <template #operation>
          <!-- 编辑 -->
          <a-button type="primary" size="small">
            <EditOutlined />编辑
          </a-button>
          <!-- 删除 -->
          <a-button type="danger" size="small" style="margin: 0 10px">
            <DeleteOutlined />删除</a-button
          >
        </template>
      </a-table>
      <!-- 分页 -->
      <a-config-provider :locale="locale">
        <a-pagination
          style="margin-top: 25px"
          v-model:current="pagination.pagenum"
          :total="pagination.total"
          :show-total="total => `共 ${pagination.total} 条`"
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
import {
  CheckCircleTwoTone,
  EditOutlined,
  DeleteOutlined,
  CloseCircleTwoTone
} from "@ant-design/icons-vue";
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
        pageSizeOptions: ["1", "2", "5", "10"]
      },
      //   表格数据
      table: {
        col: [
          { title: "#", key: "index", slots: { customRender: "index" } },
          { title: "分类名称", dataIndex: "cat_name", key: "cat_name" },
          {
            title: "是否有效",
            slots: { customRender: "cat_deleted" },
            key: "cat_deleted"
          },
          {
            title: "排序",
            slots: { customRender: "cat_level" },
            key: "cat_level"
          },
          {
            title: "操作",
            key: "operation",
            slots: { customRender: "operation" }
          }
        ],
        data: []
      }
    };
  },
  created() {
    this.handleGoodsClassify();
  },
  methods: {
    handleGoodsClassify() {
      httpGet(goods.GetGoodsClassify, {
        type: [1, 2, 3],
        pagenum: this.pagination.pagenum,
        pagesize: this.pagination.pagesize
      })
        .then(res => {
          //   console.log(res);
          let { data, meta } = res;
          if (meta.status == 200) {
            this.table.data = data.result;
            this.pagination.total = data.total;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 根据每页显示多少条数据不同 重新渲染表格
    onShowSizeChange(current, pageSize) {
      // console.log(current, pageSize);
      this.pagination.pagenum = current;
      this.pagination.pagesize = pageSize;
      this.handleGoodsClassify();
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagination.pagenum = page;
      this.pagination.pagesize = pageSize;
      this.handleGoodsClassify();
    }
  },
  components: {
    CheckCircleTwoTone,
    EditOutlined,
    DeleteOutlined,
    CloseCircleTwoTone
  }
};
</script>

<style></style>
