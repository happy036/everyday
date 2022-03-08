<template>
  <AppLayout>
    <div class="xtx-goods-page" v-if="goodsDetail">
      <div class="container">
        <!-- 面包屑 -->
        <XtxBread>
          <XtxBreadItem path="/"> 首页 </XtxBreadItem>
          <XtxBreadItem :path="`/category/${goodsDetail.categories[1].id}`">
            {{ goodsDetail.categories[1].name }}
          </XtxBreadItem>
          <XtxBreadItem :path="`/category/two/${goodsDetail.categories[0].id}`">
            {{ goodsDetail.categories[0].name }}
          </XtxBreadItem>
          <XtxBreadItem>
            {{ goodsDetail.name }}
          </XtxBreadItem>
        </XtxBread>
        <!-- 商品信息 -->
        <div class="goods-info">
          <!-- 左侧 -->
          <div class="media">
            <GoodsImages :images="goodsDetail.mainPictures" />
            <!--            商品销售信息组件-->
            <GoodsSales />
          </div>
          <!-- 右侧 -->
          <div class="spec">
            <!--            商品详情组件-->
            <GoodsInfo :goods="goodsDetail" />
            <!--            规格组件-->
            <!--            skuId="1369155864430120962"-->
            <GoodsSku
              :skus="goodsDetail.skus"
              :specs="goodsDetail.specs"
              @onSpecChanged="onSpecChanged"
              @onSpecHalfChanged="goodsDetail.currentSkuId = null"
            />
            <!--            商品数量选择组件-->
            <XtxNumberBox
              label="数量"
              :max="goodsDetail.inventory"
              v-model="count"
            />
            <!--            按钮-->
            <XtxButton
              type="primary"
              :style="{ 'margin-top': '20px' }"
              @click="addCart"
              >加入购物车</XtxButton
            >
          </div>
        </div>
        <!-- 商品推荐 -->
        <GoodsRelevant :goodsId="goodsDetail.id"></GoodsRelevant>
        <!-- 商品详情 -->
        <div class="goods-footer">
          <div class="goods-article">
            <!-- 商品+评价 -->
            <GoodsTab />
            <!-- 注意事项 -->
            <GoodsWarn />
          </div>
          <!-- 24热榜 -->
          <div class="goods-aside">
            <GoodsHot :type="1" />
            <GoodsHot :type="2" />
            <GoodsHot :type="3" />
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<script>
import GoodsRelevant from "@/views/goods/components/GoodsRelevant";
import AppLayout from "@/components/AppLayout";
import GoodsImages from "@/views/goods/components/GoodsImages";
import GoodsSales from "@/views/goods/components/GoodsSales";
import GoodsInfo from "@/views/goods/components/GoodsInfo";
import GoodsSku from "@/views/goods/components/GoodsSku";
import GoodsTab from "@/views/goods/components/GoodsTab";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { provide, ref } from "vue";
import { getGoodsDetailById } from "@/api/good";
import GoodsHot from "@/views/goods/components/GoodsHot";
import GoodsWarn from "@/views/goods/components/GoodsWarn";
import Message from "@/components/library/Message";
import { useStore } from "vuex";
export default {
  name: "GoodsDetailPage",
  components: {
    GoodsWarn,
    GoodsHot,
    GoodsSku,
    GoodsRelevant,
    AppLayout,
    GoodsImages,
    GoodsSales,
    GoodsInfo,
    GoodsTab,
  },
  setup() {
    const store = useStore();
    // 存储用户选择的商品数量
    const count = ref(1);
    const goodsDetail = useGoods();
    // 当用户选择完整的规格以后，更新视图
    const onSpecChanged = (data) => {
      goodsDetail.value.price = data.price;
      goodsDetail.value.oldPrice = data.oldPrice;
      goodsDetail.value.inventory = data.inventory;
      goodsDetail.value.currentSkuId = data.skuId;
      goodsDetail.value.currentAttrsText = data.attrsText;
    };
    // 将商品详情数据开放到子组件
    provide("goodsDetail", goodsDetail);
    // 将商品加入购物车
    const addCart = () => {
      // 判断用户是否选择了规格,没选,不能将商品加入购物车
      if (!goodsDetail.value.currentSkuId) {
        Message({ type: "warn", text: "请选择商品规格" });
        return;
      }
      // 收集商品信息
      const goods = {
        // 商品id
        id: goodsDetail.value.id,
        // 商品 skuId
        skuId: goodsDetail.value.currentSkuId,
        // 商品名称
        name: goodsDetail.value.name,
        // 商品规格属性文字
        attrsText: goodsDetail.value.currentAttrsText,
        // 商品图片
        picture: goodsDetail.value.mainPictures[0],
        // 商品原价
        price: goodsDetail.value.oldPrice,
        // 商品现价
        nowPrice: goodsDetail.value.price,
        // 是否选中
        selected: false,
        // 商品库存
        stock: goodsDetail.value.inventory,
        // 用户选择的商品数量
        count: count.value,
        // 是否为有效商品
        isEffective: true,
      };
      // 将商品加入购物车
      store.dispatch("cart/addGoodsToCart", goods);
    };
    return {
      goodsDetail,
      onSpecChanged,
      count,
      addCart,
    };
  },
};
// 用于获取商品详情的方法
function useGoods() {
  const route = useRoute();
  const goodsDetail = ref(null);
  const getGoodsDetail = (id) => {
    getGoodsDetailById(id).then((data) => {
      goodsDetail.value = data.result;
    });
  };
  // 初始获取商品信息
  getGoodsDetail(route.params.id);
  // 当路由发生变化时，重新获取商品信息
  onBeforeRouteUpdate((to) => {
    getGoodsDetail(to.params.id);
  });
  return goodsDetail;
}
</script>

<style scoped lang="less">
.goods-info {
  min-height: 600px;
  background: #fff;
  display: flex;
  .media {
    width: 580px;
    height: 600px;
    padding: 30px 50px;
  }
  .spec {
    flex: 1;
    padding: 30px 30px 30px 0;
  }
}
.goods-footer {
  display: flex;
  margin-top: 20px;
  .goods-article {
    width: 940px;
    margin-right: 20px;
  }
  .goods-aside {
    width: 280px;
    min-height: 1000px;
  }
}
.goods-tabs {
  min-height: 600px;
  background: #fff;
}
.goods-warn {
  min-height: 600px;
  background: #fff;
  margin-top: 20px;
}
</style>
