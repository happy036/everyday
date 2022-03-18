<template>
  <el-table :data="roleList" row-key="role_id" border>
    <el-table-column type="expand">
      <template #default="scope">
        <el-row
          v-for="(item1, index1) in scope.row.tree"
          :key="index1"
          class="vcenter"
          :class="['bdbottom', index1 === 0 ? 'bdtop' : '']"
        >
          <el-col :span="5">
            <el-tag>
              {{ item1.name }}
            </el-tag>
            <el-icon><CaretRight /></el-icon>
          </el-col>
          <el-col :span="19">
            <el-row v-for="(item2, index2) in item1.children" :key="index2">
              <el-col :span="6">
                <el-tag type="success">{{ item2.name }}</el-tag>
                <el-icon><CaretRight /></el-icon>
              </el-col>
              <el-col :span="18">
                <el-tag
                  type="warning"
                  v-for="(item3, index3) in item2.children2"
                  :key="index3"
                  >{{ item3.name }}
                </el-tag>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </template>
    </el-table-column>
    <el-table-column type="index"></el-table-column>
    <el-table-column label="角色名称" prop="role_name" />
    <el-table-column label="角色描述" prop="role_desc" />
  </el-table>
</template>

<script>
import { onMounted, ref } from "vue";
import { getRoleRights } from "@/api/rights";
import { CaretRight } from "@element-plus/icons-vue";
export default {
  name: "rolesList",
  setup() {
    const roleList = ref();
    const getRoleList = () => {
      getRoleRights().then((data) => {
        roleList.value = data.data;
      });
    };
    onMounted(getRoleList);
    return {
      roleList,
    };
  },
  components: {
    CaretRight,
  },
};
</script>

<style lang="less">
.el-table__row {
  height: 40px;
}
.el-table .el-table__cell {
  text-align: left;
}
.vcenter {
  display: flex;
  align-items: center;
}
//.el-row {
//  flex-wrap: nowrap;
//}
.bdtop {
  border-top: 1px solid #eee;
}
.bdbottom {
  border-bottom: 1px solid #eee;
}
.el-table td.el-table__cell div {
  padding-top: 3px;
  padding-bottom: 3px;
}
.el-tag--default {
  margin-left: 40px;
}
</style>
