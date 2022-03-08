<template>
  <el-row>
    <el-col :span="8">
      <el-input
        class="w-50 m-2 userInput"
        size="large"
        placeholder="请输入商品名称"
        v-model="search"
        style="
          border: none;
          height: 51px;
          margin-bottom: 27px;
          font-size: 18px;
          border-radius: 5px;
        "
      ></el-input>
    </el-col>
    <el-button
      type="primary"
      size="large"
      style="height: 45px; width: 112px; font-size: 18px; margin-left: 10px"
      @click="onSearchGoods"
      >查找商品</el-button
    >
    <el-button
      type="primary"
      size="large"
      style="height: 45px; width: 112px; font-size: 18px; margin-left: 10px"
      @click="onAddGoods"
      >添加商品</el-button
    >
  </el-row>
  <!--  表格-->
  <el-table :data="goodsList" border style="width: auto">
    <el-table-column type="index" width="50" />
    <el-table-column label="商品图片" width="180">
      <template #default="scope">
        <el-image
          style="width: 100px; height: 100px"
          :src="scope.row.goodsimg"
        ></el-image>
      </template>
    </el-table-column>
    <el-table-column label="商品名称" prop="name" width="180" />
    <el-table-column prop="desc" label="商品描述" width="300" />
    <el-table-column prop="price" label="价格" width="180" />
    <el-table-column label="库存" width="180" prop="inventory" />
    <el-table-column label="销量" width="180" prop="sales_volume" />
    <el-table-column label="商品是否有效" width="180" prop="effective">
      <template #default="scope">
        <el-tag v-if="scope.row.effective > 0" size="large">有效</el-tag>
        <el-tag v-else type="info" size="large">失效</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作" #default="scope">
      <el-button
        type="primary"
        :icon="Edit"
        @click="editGood(scope.row.id)"
      ></el-button>
      <el-button
        type="danger"
        :icon="Delete"
        @click="onDeleteGood(scope.row.id)"
      ></el-button>
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
  <!--  编辑商品弹出框-->
  <EditGoods
    v-if="idGood"
    v-model:editGoodVisible="editGoodVisible"
    :idGood="idGood"
    @handleEditGood="onGetGoodsList"
  />
  <!--  添加商品弹出框-->
  <add-good-dialog v-model:addGoodVisible="addGoodVisible" />
</template>

<script>
import { onMounted, ref } from "vue";
import { deleteGood, findGoods, getGoodInfo, getGoodsList } from "@/api/goods";
import { ElMessage } from "element-plus";
import EditGoods from "@/components/Dialog/EditGoods";
import addGoodDialog from "@/components/Dialog/addGoodDialog";
export default {
  name: "goodList",
  components: { EditGoods, addGoodDialog },
  setup() {
    const { Edit, Delete } = require("@element-plus/icons-vue");
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
    const goodsList = ref();
    // 获取所有商品
    const onGetGoodsList = () => {
      let limit = {
        pagesize: pageSize.value,
        pagenum: currentPage.value,
      };
      getGoodsList(limit).then((data) => {
        goodsList.value = data.getlimitData;
        totalCount.value = data.data.length;
      });
    };
    onMounted(onGetGoodsList);
    // 每页显示的条数
    const handleSizeChange = (val) => {
      console.log(val);
      // 改变每页显示的条数
      pageSize.value = val;
      // 在改变每页显示的条数时，要将页码显示到第一页
      currentPage.value = 1;
      onGetGoodsList();
    };
    // 显示第几页
    const handleCurrentChange = (val) => {
      currentPage.value = val;
      onGetGoodsList();
    };
    // 查找商品
    const search = ref("");
    const onSearchGoods = () => {
      findGoods(search.value, pageSize.value, currentPage.value).then(
        (data) => {
          goodsList.value = data.data;
          totalCount.value = data.data.length;
          search.value = "";
        }
      );
    };
    // 删除商品
    const onDeleteGood = (id) => {
      deleteGood(id).then((data) => {
        onGetGoodsList();
        ElMessage({
          message: data.msg,
          type: "success",
        });
      });
    };
    // 编辑商品 弹出框
    const editGoodVisible = ref(false);
    const idGood = ref();
    const editGood = (id) => {
      editGoodVisible.value = true;
      getGoodInfo(id).then((data) => {
        idGood.value = data.data[0];
      });
    };
    // 添加商品
    const addGoodVisible = ref(false);
    const onAddGoods = () => {
      addGoodVisible.value = true;
    };
    return {
      Edit,
      Delete,
      goodsList,
      onGetGoodsList,
      currentPage,
      totalCount,
      pageSize,
      small,
      background,
      disabled,
      handleSizeChange,
      handleCurrentChange,
      search,
      onSearchGoods,
      onDeleteGood,
      editGoodVisible,
      editGood,
      idGood,
      onAddGoods,
      addGoodVisible,
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

.el-input--large .el-input__inner {
  height: 46px;
}

.select-trigger {
  border-radius: 5px;
}
.el-pagination {
  margin-top: 10px;
}
.cell .el-button:hover {
  color: #409eff;
  border: 1px solid #b3d8ff;
  background-color: #ecf5ff;
}
</style>
