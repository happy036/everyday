<template>
  <el-table border :data="rightsList" stripe style="width: 100%">
    <el-table-column type="index" label="#" width="50" height="300px" />
    <el-table-column prop="name" label="权限名称" width="530" height="100px" />
    <el-table-column prop="url" label="路径" width="530" height="100px" />
    <el-table-column prop="level" label="权限等级" width="530" height="100px">
      <template #default="scope">
        <el-tag size="large" v-if="scope.row.level === 1">一级</el-tag>
        <el-tag size="large" v-else-if="scope.row.level === 2" type="success"
          >二级</el-tag
        >
        <el-tag size="large" v-else type="warning">三级</el-tag>
      </template>
    </el-table-column>
  </el-table>
  <!--  分页-->
  <div class="demo-pagination-block">
    <el-pagination
      :currentPage="currentPage"
      :page-size="pageSize"
      :page-sizes="[5, 10, 15]"
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
import { getRights } from "@/api/rights";
import { onMounted, ref } from "vue";

export default {
  name: "rightsList",
  setup() {
    // 分页数据
    // 默认显示第几页
    const currentPage = ref(1);
    // 总条数
    const totalCount = ref(1);
    // 默认每页显示的条数
    const pageSize = ref(5);
    const small = ref(false);
    const background = ref(false);
    const disabled = ref(false);
    const rightsList = ref();
    const getAllRights = () => {
      getRights(pageSize.value, currentPage.value).then((data) => {
        rightsList.value = data.dataLimit;
        totalCount.value = data.data.length;
      });
    };
    onMounted(getAllRights);
    const handleSizeChange = (val) => {
      // 改变每页显示的条数
      pageSize.value = val;
      // 在改变每页显示的条数时，要将页码显示到第一页
      currentPage.value = 1;
      getAllRights();
    };
    const handleCurrentChange = (val) => {
      currentPage.value = val;
      getAllRights();
    };
    return {
      rightsList,
      currentPage,
      totalCount,
      pageSize,
      small,
      background,
      disabled,
      handleSizeChange,
      handleCurrentChange,
    };
  },
};
</script>

<style lang="less">
.el-table {
  font-size: 17px;
  .el-table__cell {
    text-align: center;
  }
}
.el-table__row {
  height: 60px;
}
</style>
