<template>
  <div class="goods-hot" v-if="goodsHot">
    <h3>{{ title[type] }}</h3>
    <GoodsItem
      v-for="goods in goodsHot"
      :key="goods.id"
      :goods="goods"
    ></GoodsItem>
  </div>
</template>
<script>
import GoodsItem from "@/views/category/components/GoodsItem";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getGoodsHot } from "@/api/good";
export default {
  props: {
    type: {
      type: Number,
      default: 1,
    },
  },
  setup(props) {
    const { goodsHot, title } = useGoodsHot(props.type);
    return {
      goodsHot,
      title,
    };
  },
  name: "GoodsHot",
  components: { GoodsItem },
};
// 获取热销榜单数据
function useGoodsHot(type) {
  // 用于存储热销榜单数据
  const goodsHot = ref();
  // 获取路由信息对象
  const route = useRoute();
  const title = ref({
    1: "24小时榜",
    2: "周榜",
    3: "总榜",
  });
  // 用于获取热销榜单数据的方法
  const getData = () => {
    getGoodsHot({ id: route.params.id, type }).then((data) => {
      // 存储热销榜单数据
      goodsHot.value = data.result;
    });
  };
  getData();
  return { goodsHot, getData, title };
}
</script>
<style scoped lang="less">
.goods-hot {
  h3 {
    height: 70px;
    background: @helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }
  :deep(.goods-item) {
    background: #fff;
    width: 100%;
    margin-bottom: 10px;
    img {
      width: 200px;
      height: 200px;
    }
    p {
      margin: 0 10px;
    }
    &:hover {
      transform: none;
      box-shadow: none;
    }
  }
}
</style>
