<template>
  <div class="cart-sku" ref="target">
    <div class="attrs" @click="toggle">
      <span class="ellipsis">{{ attrsText }}</span>
      <i class="iconfont icon-angle-down"></i>
    </div>
    <div class="layer" v-if="visible">
      <div class="loading" v-if="loading"></div>
      <GoodsSku
        v-if="!loading && specsAndSkus"
        :skuId="skuId"
        :specs="specsAndSkus.specs"
        :skus="specsAndSkus.skus"
        @onSpecChanged="onSpecChanged"
      />
      <XtxButton
        @click="submitSku"
        v-if="specsAndSkus"
        type="primary"
        size="mini"
        style="margin-left: 60px"
        >确定</XtxButton
      >
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import { getSkuMessage } from "@/api/cart";
import GoodsSku from "@/views/goods/components/GoodsSku";
import XtxButton from "@/components/library/XtxButton";
import Message from "@/components/library/Message";
import { useStore } from "vuex";

export default {
  name: "CartSku",
  components: { XtxButton, GoodsSku },
  props: {
    attrsText: {
      type: Object,
    },
    skuId: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const store = useStore();
    // 控制弹层的显示和隐藏
    const visible = ref(false);
    // 获取弹层容器
    const target = ref(null);
    // 供用户选择的规格选项数据 所有可组合的规格组合
    const specsAndSkus = ref(null);
    // sku数据的加载状态
    const loading = ref(false);
    // 切换弹框
    const toggle = () => {
      visible.value = !visible.value;
      if (visible.value) {
        loading.value = true;
        getSkuMessage(props.skuId).then((data) => {
          specsAndSkus.value = data.result;
          loading.value = false;
        });
      }
    };
    // 在规格外部点击时
    onClickOutside(target, () => {
      visible.value = false;
    });
    // 存储用户选择的新的规格数据
    const newSku = ref(null);
    // 当用户选择了一个完整的规格的时候
    const onSpecChanged = (data) => {
      newSku.value = data;
    };
    // 提交规格
    const submitSku = () => {
      // 如果用户没有重新选择规格, 或者用户选择了规格, 但是选择的规格和之前是一样的
      if (
        !newSku.value ||
        (newSku.value && newSku.value.skuId === props.skuId)
      ) {
        // 用户提示
        Message({ type: "warn", text: "商品规格信息没有发生变化" });
        return;
      }
      store.dispatch("cart/updateGoodsSku", {
        oldSkuId: props.skuId,
        newSku,
      });
      visible.value = false;
    };
    return {
      toggle,
      visible,
      target,
      specsAndSkus,
      loading,
      onSpecChanged,
      submitSku,
    };
  },
};
</script>
<style scoped lang="less">
.cart-sku {
  height: 28px;
  border: 1px solid #f5f5f5;
  padding: 0 6px;
  position: relative;
  margin-top: 10px;
  display: inline-block;
  .attrs {
    line-height: 24px;
    display: flex;
    span {
      max-width: 230px;
      font-size: 14px;
      color: #999;
    }
    i {
      margin-left: 5px;
      font-size: 14px;
    }
  }
  .layer {
    position: absolute;
    left: -1px;
    top: 40px;
    z-index: 10;
    width: 400px;
    border: 1px solid @xtxColor;
    box-shadow: 2px 2px 4px lighten(@xtxColor, 50%);
    background: #fff;
    border-radius: 4px;
    font-size: 14px;
    padding: 20px;
    &::before {
      content: "";
      width: 12px;
      height: 12px;
      border-left: 1px solid @xtxColor;
      border-top: 1px solid @xtxColor;
      position: absolute;
      left: 12px;
      top: -8px;
      background: #fff;
      transform: scale(0.8, 1) rotate(45deg);
    }
    .loading {
      height: 224px;
      background: url(../../../assets/images/loading.gif) no-repeat center;
    }
  }
}
</style>
