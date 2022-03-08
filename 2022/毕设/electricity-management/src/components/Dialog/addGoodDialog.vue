<template>
  <el-dialog
    title="更改商品信息"
    width="30%"
    :modelValue="addGoodVisible"
    @close="cancelAddGood"
  >
    <el-form
      label-position="right"
      label-width="108px"
      style="max-width: 480px"
      ref="ruleFormRef"
      show-message
      :model="ruleForm"
      :rules="rules"
    >
      <el-form-item label="商品图片">
        <el-input v-model="ruleForm.goodsimg" v-if="false"></el-input>
        <el-upload
          class="avatar-uploader"
          action="http://localhost:3000/goods/addGood"
          :show-file-list="false"
          :on-change="handleChange"
          :auto-upload="false"
        >
          <img
            v-if="ruleForm.goodsimg"
            :src="ruleForm.goodsimg"
            class="avatar"
            alt=""
          />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="商品描述" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="库存" prop="inventory">
        <el-input v-model="ruleForm.inventory"></el-input>
      </el-form-item>
      <el-form-item label="销量" prop="sales_volume">
        <el-input v-model="ruleForm.sales_volume"></el-input>
      </el-form-item>
      <el-form-item label="商品是否有效" prop="effective">
        <el-select v-model="ruleForm.effective" placeholder="请选择">
          <el-option label="有效" value="1"></el-option>
          <el-option label="失效" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品类型" prop="cate_id">
        <el-select v-model="ruleForm.cate_id" placeholder="请选择商品类型">
          <el-option
            v-for="item in cate"
            :key="item.id"
            :label="item.name"
            :value="item.cate_id"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancelAddGood">取消</el-button>
        <el-button type="primary" @click="onAddGood">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { onMounted, reactive, ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
import { addGood, getCate } from "@/api/goods";
// import { updateGoods } from "@/api/goods";
// import { ElMessage } from "element-plus";
// import { updateGoods } from "@/api/goods";
// import { updateGoods } from "@/api/goods";

export default {
  name: "EditGoods",
  props: ["addGoodVisible"],
  emits: ["handleEditGood", "update:addGoodVisible"],
  setup(props, { emit }) {
    const ruleFormRef = ref();
    const ruleForm = reactive({
      name: "",
      desc: "",
      price: "",
      inventory: "",
      sales_volume: "",
      effective: "",
      cate_id: "",
      goodsimg: "",
    });
    // 表单校验规则
    const rules = reactive({
      name: [
        {
          required: true,
          message: "请输入商品名",
          trigger: "blur",
        },
        {
          min: 10,
          max: 20,
          message: "名称长度在10到20之间",
          trigger: "blur",
        },
      ],
      desc: [
        {
          required: true,
          message: "请输入商品描述",
          trigger: "blur",
        },
        {
          min: 10,
          max: 100,
          message: "商品描述字数在10到100之间",
          trigger: "blur",
        },
      ],
      price: [
        {
          required: true,
          message: "请输入价格",
          trigger: "blur",
        },
      ],
      inventory: [
        {
          required: true,
          message: "请输入库存",
          trigger: "blur",
        },
      ],
      effective: [
        {
          required: true,
          message: "请选择商品是否有效",
          trigger: "change",
        },
      ],
      cate_id: [
        {
          required: true,
          message: "请选择商品类型",
          trigger: "change",
        },
      ],
      sales_volume: [
        {
          required: true,
          message: "请填写商品销量",
          trigger: "blur",
        },
      ],
    });
    // 关闭弹出框
    const cancelAddGood = () => {
      emit("update:addGoodVisible", false);
    };
    // 添加商品
    const imageUrl = ref("");
    const onAddGood = () => {
      addGood(ruleForm).then((data) => {
        console.log(data);
      });
      emit("update:addGoodVisible", false);
    };
    // 获取分类
    const cate = ref();
    const getCategory = () => {
      getCate().then((data) => {
        cate.value = data.data;
      });
    };
    onMounted(getCategory);
    const handleChange = (params) => {
      let image = new Image();
      image.src = URL.createObjectURL(params.raw);
      image.onload = () => {
        ruleForm.goodsimg = getBase64Image(image);
      };
    };
    return {
      imageUrl,
      onAddGood,
      ruleForm,
      ruleFormRef,
      rules,
      handleChange,
      cancelAddGood,
      getCategory,
      cate,
    };
  },
  components: {
    Plus,
  },
};
function getBase64Image(img) {
  let canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, img.width, img.height);
  let ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
  let dataURL = canvas.toDataURL("image/" + ext);
  return dataURL;
}
</script>

<style lang="less">
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  width: 100px;
  height: 100px;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
</style>
