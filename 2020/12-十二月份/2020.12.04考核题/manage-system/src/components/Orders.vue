<template>
  <a-layout>
    <!-- 面包屑导航 -->
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item
        ><router-link to="/home" style="font-weight: bold; color: #000"
          >首页</router-link
        ></a-breadcrumb-item
      >
      <a-breadcrumb-item>订单管理</a-breadcrumb-item>
      <a-breadcrumb-item>订单列表</a-breadcrumb-item>
    </a-breadcrumb>
    <a-card>
      <a-row>
        <a-col :span="9">
          <a-input-search placeholder="请输入搜索内容" size="large">
            <template #enterButton>
              <a-button> 搜索 </a-button>
            </template>
          </a-input-search>
        </a-col>
      </a-row>
      <a-table
        :row-key="(record) => record.order_id"
        :columns="table.col"
        :data-source="table.data"
        :pagination="false"
        bordered
      >
        <template #index="{ index }">
          {{ index + 1 }}
        </template>
        <template #order_pay="{ record }">
          <a-tag color="red" v-if="record.order_pay == 0">未付款</a-tag>
          <a-tag color="green" v-if="record.order_pay == 1"> 已付款 </a-tag>
        </template>
        <template #operation>
          <!-- 编辑 -->
          <a-button size="small" type="primary" @click="handleShow">
            <EditOutlined />
          </a-button>
          <a-button size="small" type="danger" style="margin: 0 10px">
            <EnvironmentOutlined />
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
    <a-modal
      title="分配地址"
      v-model:visible="address.visible"
      cancelText="取消"
      okText="确定"
      @ok="handleAdress"
    >
      <a-form
        :model="addressFormModel"
        :rules="addressFormRules"
        ref="addressFormRef"
      >
        <a-form-item label="省市区/县" name="province" required>
          <a-cascader
            v-model:value="addressFormModel.province"
            :options="options"
            placeholder="请选择"
          />
        </a-form-item>
        <a-form-item required label="详细地址" name="details">
          <a-input type="text" v-model:value="addressFormModel.details" />
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
import { EditOutlined, EnvironmentOutlined } from "@ant-design/icons-vue";
export default {
  data() {
    return {
      // 表格数据
      table: {
        col: [
          { title: "#", slots: { customRender: "index" }, key: "index" },
          { title: "订单编号", dataIndex: "order_number", key: "order_number" },
          { title: "订单价格", dataIndex: "order_price", key: "order_price" },
          {
            title: "是否付款",
            slots: { customRender: "order_pay" },
            key: "order_pay",
          },
          { title: "是否发货", dataIndex: "is_send", key: "is_send" },
          { title: "下单时间", dataIndex: "create_time", key: "create_time" },
          {
            title: "操作",
            slots: { customRender: "operation" },
            key: "operation",
          },
        ],
        data: [],
      },
      //   分页数据
      pagination: {
        pagesize: 2,
        pagenum: 1,
        total: 0,
        pageSizeOptions: ["1", "2", "5", "10"],
      },
      //   模态框
      address: {
        visible: false,
      },
      addressFormModel: {
        province: [],
        details: "",
      },
      addressFormRules: {
        province: [
          {
            type: "array",
            required: true,
            message: "请选择省市地址",
            trigger: "blur",
          },
        ],
        details: [
          {
            required: true,
            message: "请填写地址",
            trigger: "blur",
          },
        ],
      },
      options: [],
    };
  },
  created() {
    this.handleOrders();
  },
  methods: {
    handleOrders() {
      httpGet(orders.GetOrders, {
        pagesize: this.pagination.pagesize,
        pagenum: this.pagination.pagenum,
      })
        .then((res) => {
          //   console.log(res);
          let { data, meta } = res;
          if (meta.status == 200) {
            //   赋值
            this.table.data = data.goods;
            // 总条数
            this.pagination.total = data.total;
            // this.pagination.pagesize = data.pagesize;
            // 页码
            this.pagination.pagenum = Number(data.pagenum);
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
      this.handleOrders();
    },

    // 页码改变的回调，参数是改变后的页码及每页条数
    handlePageChange(page, pageSize) {
      this.pagination.pagenum = page;
      this.pagination.pagesize = pageSize;
      this.handleOrders();
    },
    handleShow() {
      this.address.visible = true;
      this.options = cityData;
    },
    handleAdress() {
      this.$refs.addressFormRef
        .validate()
        .then(() => {
          console.log("成功");
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
  components: {
    EditOutlined,
    EnvironmentOutlined,
  },
};
</script>

<style></style>
