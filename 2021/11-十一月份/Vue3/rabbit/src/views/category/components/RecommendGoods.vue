<template>
  <div class="ref-goods" v-for="item in topCategory?.children" :key="item.id">
    <!--    推荐商品-->
    <div class="head">
      <h3>- {{ item.name }} -</h3>
      <p class="tag">{{ item.saleProperties }}</p>
      <XtxMore />
    </div>
    <div class="body">
      <GoodsItem :goods="goods" v-for="goods in item.goods" :key="goods.id" />
    </div>
  </div>
</template>

<script>
import GoodsItem from "@/views/category/components/GoodsItem";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { ref } from "vue";
import { getTopCategoryById } from "@/api/category";
export default {
  name: "CommandGoods",
  components: { GoodsItem },
  setup() {
    // 获取路由对象
    const route = useRoute();
    // 存储一级分类具体信息
    const topCategory = ref(null);
    // 获取一级分类并存储一级分类
    function getData(id) {
      getTopCategoryById(id).then((data) => {
        topCategory.value = data.result;
      });
    }
    // 首次进入路由时获取一级分类信息
    getData(route.params.id);
    // 当路由参数发生变化后再次获取一级分类信息
    onBeforeRouteUpdate((to) => {
      getData(to.params.id);
    });
    return {
      topCategory,
    };
  },
};
</script>
<style lang="less" scoped>
.ref-goods {
  background-color: #fff;
  margin-top: 20px;
  position: relative;
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .head {
    .xtx-more {
      position: absolute;
      top: 20px;
      right: 20px;
    }
    .tag {
      text-align: center;
      color: #999;
      font-size: 20px;
      position: relative;
      top: -20px;
    }
  }
  .body {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 0 65px 30px;
  }
}
</style>
