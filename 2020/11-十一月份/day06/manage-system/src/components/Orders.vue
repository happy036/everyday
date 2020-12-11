<template>
  <a-layout>
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>订单管理</a-breadcrumb-item>
      <a-breadcrumb-item>订单列表</a-breadcrumb-item>
    </a-breadcrumb>
    <!-- 表格 -->
    <a-card>
      <a-row>
        <a-col :span="8">
          <a-input-search placeholder="请输入搜索内容" size="large">
            <template #enterButton>
              <a-button> 搜索 </a-button>
            </template>
          </a-input-search>
        </a-col>
      </a-row>
      <a-table
        :row-key="record => record.order_id"
        :columns="table.cols"
        :data-source="table.data"
        :pagination="false"
        bordered
      >
        <template #index="{ index }">
          {{ index + 1 }}
        </template>
        <template #pay_status="{ record }">
          <a-tag color="pink" v-if="record.pay_status == 0">未付款</a-tag>
          <a-tag color="green" v-if="record.pay_status == 1">已付款</a-tag>
        </template>
        <template #operation>
          <a-button
            type="primary"
            style="margin-right: 10px"
            @click="handleAdress"
          >
            <template #icon>
              <EditOutlined />
            </template>
          </a-button>
          <a-button class="ant-green">
            <template #icon> <EnvironmentOutlined /> </template
          ></a-button>
        </template>
      </a-table>
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
      ></a-pagination>
    </a-card>
    <!-- 弹出框 -->
    <a-modal
      title="修改地址"
      v-model:visible="address.visible"
      @ok="handleUpdateAdress"
      :afterClose="handleCleanAdress"
    >
      <a-form
        :model="address.FormModel"
        :rules="address.FromRules"
        ref="addressRef"
      >
        <a-form-item required label="省市区/县" name="province">
          <a-cascader
            v-model:value="address.FormModel.province"
            :options="address.options"
            placeholder="请选择"
          />
        </a-form-item>
        <a-form-item label="详细地址" name="details" required>
          <a-input v-model:value="address.FormModel.details" />
        </a-form-item>
      </a-form>
    </a-modal>
  </a-layout>
</template>

<script>
// 引入请求方法 httpGet
import { httpGet } from "@/utils/http";
// 引入请求路径
import { orders } from "@/api";
import cityData from "@/api/citydata";
// 引入小图标
import { EditOutlined, EnvironmentOutlined } from "@ant-design/icons-vue";
export default {
  data() {
    return {
      // 分页数据
      pagination: {
        pagenum: 1,
        pagesize: 2,
        total: 0,
        // 指定每页可以显示多少条
        pageSizeOptions: ["1", "2", "5", "10"]
      },
      //   表格数据
      table: {
        cols: [
          { title: "#", key: "index", slots: { customRender: "index" } },
          { title: "订单编号", dataIndex: "order_number", key: "order_number" },
          { title: "订单价格", dataIndex: "order_price", key: "order_price" },
          {
            title: "是否付款",
            key: "pay_status",
            slots: { customRender: "pay_status" }
          },
          { title: "是否发货", dataIndex: "is_send", key: "is_send" },
          { title: "下单时间", dataIndex: "create_time", key: "create_time" },
          {
            title: "操作",
            key: "operation",
            slots: { customRender: "operation" }
          }
        ],
        data: []
      },
      // 弹出框
      address: {
        visible: false,
        FormModel: {
          province: [],
          details: ""
        },
        FromRules: {
          province: [
            {
              type: "array",
              required: true,
              message: "请选择省市地址",
              trigger: "blur"
            }
          ],
          details: [
            { required: true, message: "请填写详细地址", trigger: "blur" }
          ]
        },
        options: []
      }
    };
  },
  created() {
    this.handleGetOrders();
  },
  methods: {
    handleGetOrders() {
      httpGet(orders.GetOrders, {
        pagenum: this.pagination.pagenum,
        pagesize: this.pagination.pagesize
      })
        .then(res => {
          //   console.log(res);
          let { data, meta } = res;
          if (meta.status == 200) {
            this.pagination.pagenum = Number(data.pagenum);
            this.pagination.total = data.total;
            this.table.data = data.goods;
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
      this.handleGetOrders();
    },
    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagination.pagenum = page;
      this.pagination.pagesize = pageSize;
      this.handleGetOrders();
    },
    handleAdress() {
      this.address.visible = true;
      this.address.options = cityData;
    },
    // onChange(value) {
    //   console.log(value);
    //   console.log(this.address.FormModel.province);
    // },
    handleUpdateAdress() {
      this.$refs.addressRef
        .validate()
        .then(() => {
          console.log("成功");
          this.address.visible = false;
        })
        .catch(error => {
          console.log("error", error);
        });
    },
    handleCleanAdress() {
      this.$refs.addressRef.resetFields();
    }
  },
  components: {
    EditOutlined,
    EnvironmentOutlined
  }
};
</script>

<style>
.ant-green {
  background-color: #67c23a;
  color: #fff;
}

.ant-green:hover,
.ant-green:focus {
  background-color: #67c23a;
  color: #fff;
  border-color: transparent;
}
</style>
