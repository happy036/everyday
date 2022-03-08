<template>
  <el-dialog
    :title="data.$treeNodeId === 1 ? '修改一级分类名称' : '修改二级分类名称'"
    width="30%"
    :model-value="editClassVisible"
    @close="editClassCancel"
  >
    <el-form :rules="rules" :model="ruleForm" ref="ruleFormRef">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="editClassCancel">取消</el-button>
        <el-button type="primary" @click="onUpdateEditClass">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { computed, reactive, ref } from "vue";
import { editOneCate, editSubCate } from "@/api/cate";
import { ElMessage } from "element-plus";

export default {
  name: "EditGoodClassDialog",
  props: ["editClassVisible", "data"],
  emits: ["handleEditClass", "update:editClassVisible"],
  setup(props, { emit }) {
    const ruleFormRef = ref();
    const rules = reactive({
      name: [
        {
          required: true,
          message: "请输入分类名称",
          trigger: "blur",
        },
        {
          min: 2,
          max: 6,
          message: "分类名称长度在2到6个字之间",
          trigger: "blur",
        },
      ],
    });
    const ruleForm = computed(() => props.data);
    const editClassCancel = () => {
      emit("update:editClassVisible", false);
    };
    const onUpdateEditClass = () => {
      if (props.data.$treeNodeId === 1) {
        editOneCate(ruleForm.value).then((data) => {
          emit("handleEditClass");
          ElMessage({
            message: data.msg,
            type: "success",
          });
          emit("update:editClassVisible", false);
        });
      } else {
        editSubCate(ruleForm.value).then((data) => {
          emit("handleEditClass");
          ElMessage({
            message: data.msg,
            type: "success",
          });
          emit("update:editClassVisible", false);
        });
      }
    };
    return {
      editClassCancel,
      rules,
      ruleForm,
      onUpdateEditClass,
      ruleFormRef,
    };
  },
};
</script>

<style scoped></style>
