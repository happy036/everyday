<template>
  <el-row>
    <el-col :span="8">
      <el-input
        class="w-50 m-2 userInput"
        size="large"
        placeholder="请输入用户姓名"
        v-model="searchName"
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
      @click="searchUser"
      >查找用户</el-button
    >
  </el-row>
  <!--  表格-->
  <el-table :data="userList" border style="width: auto">
    <el-table-column prop="id" label="#" width="50" />
    <el-table-column label="姓名" width="180">
      <template #default="scope">
        <div style="display: flex; align-items: center">
          <el-icon color="#fc5531"><Cherry /></el-icon>
          <span style="margin-left: 10px">{{ scope.row.username }}</span>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="email" label="邮箱" width="300" />
    <el-table-column prop="mobile" label="电话" width="180" />
    <el-table-column label="角色" width="180" id="roleButton">
      <template #default="scope">
        <el-button type="primary" plain>{{ scope.row.role }}</el-button>
      </template>
    </el-table-column>
    <el-table-column label="操作" #default="scope">
      <el-button
        type="primary"
        :icon="Edit"
        @click="editUser(scope.row.id)"
      ></el-button>
      <el-button
        type="danger"
        :icon="Delete"
        @click="deleteUser(scope.row.id)"
      ></el-button>
    </el-table-column>
  </el-table>
  <!--  分页-->
  <div class="demo-pagination-block">
    <el-pagination
      :currentPage="currentPage"
      :page-size="pageSize"
      :page-sizes="[2, 4, 6, 8]"
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
  <!--  添加用户弹出框-->
  <add-user-dialog
    v-if="idUserList"
    v-model:adduserVisible="adduserVisible"
    :idUserList="idUserList"
    @handleEditInfo="onGetAllUsers"
  />
</template>

<script>
import { Cherry, Search } from "@element-plus/icons-vue";
import {
  getAllUsers,
  getIdUser,
  onDeleteUser,
  onSearchUser,
} from "@/api/users";
import { onMounted, ref } from "vue";
import AddUserDialog from "@/components/Dialog/addUserDialog";
import { ElMessage } from "element-plus";
export default {
  name: "userList",
  setup() {
    // 用户列表
    const userList = ref();
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
    // 获取所有用户数据
    const onGetAllUsers = () => {
      let limit = {
        pagesize: pageSize.value,
        pagenum: currentPage.value,
      };
      // console.log(limit);
      getAllUsers(limit).then((data) => {
        userList.value = data.allUsersLimit;
        totalCount.value = data.allUsersList.length;
      });
    };
    onMounted(onGetAllUsers);
    const { Edit, Delete } = require("@element-plus/icons-vue");
    // 每页显示的条数
    const handleSizeChange = (val) => {
      console.log(val);
      // 改变每页显示的条数
      pageSize.value = val;
      // 在改变每页显示的条数时，要将页码显示到第一页
      currentPage.value = 1;
      onGetAllUsers();
    };
    // 显示第几页
    const handleCurrentChange = (val) => {
      currentPage.value = val;
      onGetAllUsers();
    };
    // 添加用户弹出框是否出现
    const adduserVisible = ref(false);
    const idUserList = ref();
    // 添加用户弹出框
    const editUser = (id) => {
      adduserVisible.value = true;
      getIdUser(id).then((data) => {
        idUserList.value = data.userList[0];
      });
    };
    // 搜索用户
    const searchName = ref("");
    const searchUser = () => {
      onSearchUser(searchName.value).then((data) => {
        // console.log(data.data);
        userList.value = data.data;
        console.log(userList.value);
      });
    };
    // 删除用户
    const deleteUser = (id) => {
      onDeleteUser(id).then((data) => {
        onGetAllUsers();
        ElMessage({
          message: data.msg,
          type: "success",
        });
      });
    };
    return {
      userList,
      Edit,
      Delete,
      currentPage,
      totalCount,
      pageSize,
      handleSizeChange,
      handleCurrentChange,
      small,
      background,
      disabled,
      Search,
      editUser,
      adduserVisible,
      idUserList,
      onGetAllUsers,
      searchUser,
      deleteUser,
      searchName,
    };
  },
  components: {
    AddUserDialog,
    Cherry,
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
//.select-trigger {
//  border: 1px solid #ccc;
//}
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
