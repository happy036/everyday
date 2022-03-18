<template>
  <el-row>
    <el-col :span="8">
      <el-input
        class="w-50 m-2 userInput"
        size="large"
        placeholder="请输入商品名称"
        style="
          border: none;
          height: 51px;
          margin-bottom: 27px;
          font-size: 18px;
          border-radius: 5px;
        "
        v-model="search"
        clearable
        @clear="getOrderList"
      ></el-input>
    </el-col>
    <el-button
      type="primary"
      size="large"
      style="height: 45px; width: 112px; font-size: 18px; margin-left: 10px"
      @click="getOrderList"
      >查找订单</el-button
    >
  </el-row>
  <el-table ref="multipleTableRef" :data="orderList" style="width: 100%" border>
    <el-table-column type="index" width="55" />
    <el-table-column label="商品图片" width="200">
      <template #default="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.picture"
        ></el-image>
      </template>
    </el-table-column>
    <el-table-column prop="name" label="商品名称" width="300" />
    <el-table-column prop="curPrice" label="商品价格" width="150" />
    <el-table-column prop="quanyity" label="商品数量" width="150" />
    <el-table-column prop="totalMoney" label="订单价格" width="150" />
    <el-table-column prop="postFee" label="邮费" width="150" />
    <el-table-column prop="orderState" label="订单状态" width="225">
      <template #default="scope">
        <el-tag v-if="scope.row.orderState === 1" size="large">待付款</el-tag>
        <el-tag
          v-else-if="scope.row.orderState === 2"
          type="success"
          size="large"
          >待发货</el-tag
        >
        <el-tag
          v-else-if="scope.row.orderState === 3"
          type="warning"
          size="large"
          >待收货</el-tag
        >
        <el-tag
          v-else-if="scope.row.orderState === 4"
          type="danger"
          size="large"
          >待评价</el-tag
        >
        <el-tag
          v-else-if="scope.row.orderState === 5"
          type="success"
          size="large"
          >已完成</el-tag
        >
        <el-tag v-else-if="scope.row.orderState === 6" type="info" size="large"
          >已取消</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column label="下单时间" width="260">
      <template #default="scope">
        {{
          dayjs(scope.row.createTime).format("YYYY-MM-DD hh:mm:ss")
        }}</template
      >
    </el-table-column>
  </el-table>
  <!--  分页-->
  <div class="demo-pagination-block">
    <el-pagination
      :currentPage="currentPage"
      :page-size="pageSize"
      :page-sizes="[1, 3, 5]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { findOrders, getOrders } from "@/api/order";
import dayjs from "dayjs";
export default {
  name: "orderList",
  setup() {
    // 分页数据
    // 默认显示第几页
    const currentPage = ref(1);
    // 总条数
    const totalCount = ref(1);
    // 默认每页显示的条数
    const pageSize = ref(2);
    const small = ref(false);
    const background = ref(false);
    const disabled = ref(false);
    const orderList = ref();
    const search = ref("");
    const getOrderList = () => {
      if (search.value.trim().length === 0) {
        let limit = {
          pagesize: pageSize.value,
          pagenum: currentPage.value,
        };
        getOrders(limit).then((data) => {
          orderList.value = data.limitData;
          totalCount.value = data.data.length;
        });
      } else {
        findOrders(search.value, pageSize.value, currentPage.value).then(
          (data) => {
            orderList.value = data.datalimit;
            totalCount.value = data.data.length;
          }
        );
      }
    };
    onMounted(getOrderList);
    const handleSizeChange = (val) => {
      // 改变每页显示的条数
      pageSize.value = val;
      // 在改变每页显示的条数时，要将页码显示到第一页
      currentPage.value = 1;
      getOrderList();
    };
    const handleCurrentChange = (val) => {
      currentPage.value = val;
      getOrderList();
    };
    return {
      orderList,
      dayjs,
      currentPage,
      totalCount,
      pageSize,
      small,
      background,
      disabled,
      handleSizeChange,
      handleCurrentChange,
      search,
      getOrderList,
    };
  },
};
</script>

<style lang="less">
.el-table {
  font-size: 17px;
  width: auto;
  .el-table__cell {
    text-align: center;
  }
}
.el-table__row {
  height: 60px;
}
.el-pagination {
  margin-top: 10px;
}
.el-input--large .el-input__inner {
  height: 46px;
}
</style>
