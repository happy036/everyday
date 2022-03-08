<template>
  <el-dialog
    :title="oneCate ? '添加二级分类' : '添加一级分类'"
    width="30%"
    :model-value="goodClassVisible"
    @close="goodClassCancel"
  >
    <el-form :rules="rules" :model="ruleForm">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="goodClassCancel">取消</el-button>
        <el-button type="primary" @click="onUpdateGoodClass">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { reactive } from "vue";
import { addOneCategory, addSubCategory } from "@/api/cate";
import { ElMessage } from "element-plus";

export default {
  name: "goodClassDialog",
  props: ["goodClassVisible", "oneCate"],
  emits: ["handleaddClass", "update:goodClassVisible"],
  setup(props, { emit }) {
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
    const ruleForm = reactive({ name: "" });
    const goodClassCancel = () => {
      emit("update:goodClassVisible", false);
    };
    const onUpdateGoodClass = () => {
      if (props.oneCate) {
        addSubCategory(ruleForm.name, props.oneCate).then((data) => {
          emit("handleaddClass");
          ElMessage({
            message: data.msg,
            type: "success",
          });
          ruleForm.name = "";
        });
        emit("update:goodClassVisible", false);
      } else {
        addOneCategory(ruleForm.name).then((data) => {
          emit("handleaddClass");
          ElMessage({
            message: data.msg,
            type: "success",
          });
          ruleForm.name = "";
        });
        emit("update:goodClassVisible", false);
      }
    };
    return {
      goodClassCancel,
      onUpdateGoodClass,
      rules,
      ruleForm,
    };
  },
};
</script>

<style scoped></style>
