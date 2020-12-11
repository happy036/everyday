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
      <a-breadcrumb-item>商品列表</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 添加用户 -->
    <a-card>
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
      <a-table
        :row-key="(record) => record.goods_id"
        :columns="table.col"
        :data-source="table.data"
        :pagination="false"
        bordered
      >
        <template #index="{ index }">
          {{ index + 1 }}
        </template>
        <template #operation>
          <!-- 编辑 -->
          <a-button size="small" type="primary">
            <EditOutlined />
          </a-button>
          <a-button size="small" type="danger" style="margin: 0 10px">
            <DeleteOutlined />
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
import { goods } from "@/api";
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";
export default {
  data() {
    return {
      pagination: {
        pagesize: 2,
        pagenum: 1,
        total: 0,
        pageSizeOptions: ["1", "2", "5", "10"],
      },
      table: {
        col: [
          { title: "#", slots: { customRender: "index" }, key: "index" },
          { title: "商品名称", dataIndex: "goods_name", key: "goods_name" },
          {
            title: "商品价格(元)",
            dataIndex: "goods_price",
            key: "goods_price",
          },
          { title: "商品重量", dataIndex: "goods_weight", key: "goods_weight" },
          { title: "创建时间", dataIndex: "upd_time", key: "upd_time" },
          {
            title: "操作",
            slots: { customRender: "operation" },
            key: "operation",
          },
        ],
        data: [],
      },
    };
  },
  created() {
    this.handleGoods();
  },
  methods: {
    handleGoods() {
      httpGet(goods.Getgoods, {
        pagenum: this.pagination.pagenum,
        pagesize: this.pagination.pagesize,
      })
        .then((res) => {
          // console.log(res);
          let { data, meta } = res;
          if (meta.status == 200) {
            this.table.data = data.goods;
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
      this.handleGoods();
    },

    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagination.pagenum = page;
      this.pagination.pagesize = pageSize;
      this.handleGoods();
    },
  },
  components: {
    EditOutlined,
    DeleteOutlined,
  },
};
</script>

<style>
</style>