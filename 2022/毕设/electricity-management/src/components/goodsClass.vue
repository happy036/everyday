<template>
  <el-button
    style="float: left"
    size="large"
    type="primary"
    plain
    @click="addOneCate"
    >添加一级分类</el-button
  >
  <el-tree
    :data="cateList"
    :props="defaultProps"
    node-key="cate_id"
    :expand-on-click-node="false"
    ref="tree"
    highlight-current
    :accordion="true"
  >
    <template #default="{ node, data }">
      <div class="custom-tree-node">
        <div class="title">{{ node.label }}</div>
        <div class="category-right">
          <Plus
            style="width: 1em; height: 1em; margin-right: 8px"
            @click="addClass(data.cate_id)"
            v-if="node.level === 1"
          />
          <Edit
            style="width: 1em; height: 1em; margin-right: 8px"
            @click="editCate(data)"
          />
          <Delete
            style="width: 1em; height: 1em; margin-right: 8px"
            v-if="node.level === 2"
            @click="delSubCategory(data.id)"
          />
        </div>
      </div>
    </template>
  </el-tree>
  <!--  弹出框-->
  <goodClassDialog
    v-model:goodClassVisible="goodClassVisible"
    :oneCate="oneCate"
    @handleaddClass="onGetCategory"
  />
  <EditGoodClassDialog
    v-if="cateInfo"
    v-model:editClassVisible="editClassVisible"
    :data="cateInfo"
    @handleEditClass="onGetCategory"
  />
</template>

<script>
import { onMounted, ref } from "vue";
import { deleteSubCate, getCategories } from "@/api/cate";
import { Edit, Delete, Plus } from "@element-plus/icons-vue";
import goodClassDialog from "@/components/Dialog/goodClassDialog";
import EditGoodClassDialog from "@/components/Dialog/EditGoodClassDialog";
import { ElMessage } from "element-plus";
export default {
  name: "goodClass",
  setup() {
    // 获取所有分类
    const cateList = ref();
    const onGetCategory = () => {
      getCategories().then((data) => {
        console.log(data.data);
        cateList.value = data.data;
      });
    };
    onMounted(onGetCategory);
    // 添加分类
    const goodClassVisible = ref(false);
    const oneCate = ref();
    const addClass = (id) => {
      goodClassVisible.value = true;
      oneCate.value = id;
    };
    const addOneCate = () => {
      goodClassVisible.value = true;
    };
    // 删除子分类
    const delSubCategory = (id) => {
      deleteSubCate(id).then((data) => {
        onGetCategory();
        ElMessage({
          message: data.msg,
          type: "success",
        });
      });
    };
    // 编辑分类
    const editClassVisible = ref(false);
    const cateInfo = ref();
    const editCate = (data) => {
      editClassVisible.value = true;
      cateInfo.value = data;
    };
    const defaultProps = {
      children: "children",
      label: "name",
    };
    return {
      cateList,
      defaultProps,
      addClass,
      goodClassVisible,
      oneCate,
      onGetCategory,
      addOneCate,
      delSubCategory,
      editCate,
      editClassVisible,
      cateInfo,
    };
  },
  components: {
    Edit,
    Plus,
    Delete,
    goodClassDialog,
    EditGoodClassDialog,
  },
};
</script>

<style lang="less">
.el-tree {
  margin-top: 44px;
}
.el-tree-node__expand-icon {
  font-size: 21px;
}
.el-tree-node__content {
  font-size: 24px;
  width: 100%;
  height: 50px;
}
.category-right {
  float: right;
  margin-top: 15px;
}
.title {
  float: left;
  margin-top: 25px;
}
.custom-tree-node {
  width: 100%;
  height: 100%;
}
</style>
