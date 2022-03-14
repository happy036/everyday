<template>
  <el-dialog
    :modelValue="adduserVisible"
    title="编辑用户"
    width="30%"
    @close="cancelAddUser"
  >
    <el-form
      label-position="right"
      label-width="100px"
      style="max-width: 460px"
      :rules="rules"
      :model="ruleForm"
      ref="ruleFormRef"
      show-message
    >
      <el-form-item label="姓名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="mobile">
        <el-input v-model="ruleForm.mobile"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email"></el-input>
      </el-form-item>
      <el-form-item label="角色" prop="role_id">
        <el-select v-model="ruleForm.role_id" placeholder="请选择角色">
          <el-option label="普通用户" value="1"></el-option>
          <el-option label="普通管理员" value="2"></el-option>
          <el-option label="超级管理员" value="3"></el-option>
          <el-option label="会员" value="4"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelAddUser">取消</el-button>
        <el-button type="primary" @click="updateUser">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { updateUserInfos } from "@/api/users";
import { ElMessage } from "element-plus";

export default {
  name: "addUserDialog",
  props: ["adduserVisible", "idUserList"],
  emits: ["handleEditInfo", "update:adduserVisible"],
  setup(props, { emit }) {
    const ruleFormRef = ref();
    const ruleForm = computed(() => props.idUserList);
    // 表单校验规则
    const rules = reactive({
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        {
          min: 6,
          max: 20,
          message: "字母开头且6-20个字符",
          trigger: "blur",
        },
      ],
      mobile: [
        {
          required: true,
          message: "请输入手机号",
          trigger: "blur",
        },
      ],
      email: [
        {
          required: true,
          message: "请输入邮箱",
          trigger: "blur",
        },
      ],
      role: [
        {
          required: true,
          message: "请选择其中一个",
          trigger: "change",
        },
      ],
    });

    // 关闭弹出框
    const cancelAddUser = () => {
      emit("update:adduserVisible", false);
    };
    const updateUser = () => {
      updateUserInfos(ruleForm.value).then(() => {
        emit("handleEditInfo");
        ElMessage({
          message: "修改用户信息成功",
          type: "success",
        });
      });
      emit("update:adduserVisible", false);
    };
    return {
      cancelAddUser,
      rules,
      ruleForm,
      updateUser,
      ruleFormRef,
    };
  },
};
</script>

<style scoped lang="less">
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
