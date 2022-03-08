import {
  addGoodsToCart,
  deleteGoodsCart,
  getCartList,
  mergeCart,
  selectOrUnselectCartGoods,
  updateGoodsOfCartBySkuId,
  updateLocalCart,
} from "@/api/cart";
export default {
  namespaced: true,
  state() {
    return {
      // 存储购物车列表
      list: [],
    };
  },
  mutations: {
    // 将商品加入购物车（本地）
    addGoodsToCart(state, goods) {
      // console.log(goods);
      // 查看当前要添加的商品是否已经在购物车中
      const index = state.list.findIndex((item) => item.skuId === goods.skuId);
      if (index > -1) {
        // 找到了累加商品数量
        state.list[index].count += goods.count;
        // 将商品添加到购物车列表的顶部
        state.list.unshift(state.list.splice(index, 1)[0]);
      } else {
        // 没找到直接将商品添加到购物车列表的顶部
        state.list.unshift(goods);
      }
    },
    // 删除购物车中的商品
    deleteCartGoods(state, skuId) {
      // 获取要被删除的商品的索引
      const index = state.list.findIndex((item) => item.skuId === skuId);
      // 删除商品
      state.list = [
        ...state.list.slice(0, index),
        ...state.list.slice(index + 1),
      ];
    },
    // 更新本地购物车商品信息
    updateGoodsBySkuId(state, partOfGoods) {
      // 根据skuId查找商品
      const index = state.list.findIndex(
        (item) => item.skuId === partOfGoods.skuId
      );
      // state.list[index] = {
      //   ...state.list[index],
      //   ...partOfGoods,
      // };
      if (state.list[index]) {
        state.list[index] = { ...state.list[index], ...partOfGoods };
      }
    },
    // 设置状态
    setCart(state, payload) {
      state.list = payload;
    },
  },
  actions: {
    // 将商品加入购物车（服务端和本地）
    async addGoodsToCart({ rootState, commit, dispatch }, goods) {
      // 如果要加入购物车的商品已经在购物车了，累加该商品的数量
      // 新添加的商品要放置在购物车列表的顶部
      // 判断用户是否登录，如果登录，操作服务器端购物车，如果没有登录，操作本地购物车
      if (rootState.user.profile.token) {
        // 已登录
        await addGoodsToCart({
          skuId: goods.skuId,
          count: goods.count,
        });
        // 更新购物车列表
        dispatch("updateCartList");
      } else {
        // 未登录
        commit("addGoodsToCart", goods);
      }
    },
    // 删除商品 根据skuId删除商品
    async deleteCart({ commit, rootState, dispatch }, payload) {
      if (rootState.user.profile.token) {
        // 已登录
        await deleteGoodsCart([payload]);
        // 更新商品列表
        dispatch("updateCartList");
      } else {
        // 未登录
        commit("deleteCartGoods", payload);
      }
    },
    // 更新本地购物车商品信息(自动更新)
    async updateCartList({ rootState, state, commit }) {
      if (rootState.user.profile.token) {
        // 登录
        // 获取服务器端购物车列表数据
        let data = await getCartList();
        // console.log(data);
        // 将服务器端购物车列表数据存储到vuex中
        commit("setCart", data.result);
      } else {
        // 未登录
        // 遍历购物车中的商品, 发送请求获取该商品的最新信息
        const cartListPromises = state.list.map((item) =>
          updateLocalCart(item.skuId)
        );
        // console.log(cartListPromises);
        // 批量获取多个请求的响应数据, 所有响应数据被存储在一个数组中
        Promise.all(cartListPromises)
          .then((data) => {
            // 遍历响应结果
            data.forEach((item, index) => {
              // 为数据添加skuId
              item.result.skuId = state.list[index].skuId;
              // 更新本地的商品数据
              commit("updateGoodsBySkuId", item.result);
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    // 更新购物车中的商品信息(手动更新)
    async updateGoodsOfCartBySkuId(
      { rootState, commit, dispatch },
      partOfGoods
    ) {
      if (rootState.user.profile.token) {
        // 已登录
        // 更新商品信息
        await updateGoodsOfCartBySkuId(partOfGoods);
        // 更新购物车列表
        dispatch("updateCartList");
      } else {
        // 未登录
        commit("updateGoodsBySkuId", partOfGoods);
      }
    },
    // 全选、全不选
    async selectIsAll({ rootState, getters, commit, dispatch }, isAll) {
      if (rootState.user.profile.token) {
        // 登录
        // 获取商品skuId数组
        const ids = getters.effectiveGoodsList.map((item) => item.skuId);
        // 发送请求执行，全选、全不选操作
        await selectOrUnselectCartGoods({ ids, selected: isAll });
        // 更新购物车商品列表
        dispatch("updateCartList");
      } else {
        // 未登录
        getters.effectiveGoodsList.forEach((item) => {
          commit("updateGoodsBySkuId", { skuId: item.skuId, selected: isAll });
        });
      }
    },
    // 删除用户选择的商品，清空无效商品
    async deleteGoodsEmptyInvalidGoods(
      { getters, rootState, commit, dispatch },
      flag
    ) {
      if (rootState.user.profile.token) {
        // 登录
        // 获取要批量删除商品的skuId数组
        const skuIds = getters[flag].map((item) => item.skuId);
        // 发送请求批量删除商品
        await deleteGoodsCart(skuIds);
        // 更新商品列表
        dispatch("updateCartList");
      } else {
        getters[flag].forEach((item) => {
          commit("deleteCartGoods", item.skuId);
        });
      }
    },
    // 商品规格信息发生变化，更新商品信息
    updateGoodsSku({ rootState, state, commit }, { oldSkuId, newSku }) {
      if (rootState.user.profile.token) {
        // 登录
      } else {
        // 先根据旧的 skuId 查找商品, 根据旧商品生成新商品, 删除旧商品, 插入新商品
        // 查找旧商品
        const oldGoods = state.list.find((item) => item.skuId === oldSkuId);
        const newGoods = {
          ...oldGoods,
          skuId: newSku.value.skuId,
          stock: newSku.value.inventory,
          oldPrice: newSku.value.oldPrice,
          nowPrice: newSku.value.price,
          attrsText: newSku.value.attrsText,
        };
        // 删除旧商品
        commit("deleteCartGoods", oldSkuId);
        // 插入新商品
        commit("addGoodsToCart", newGoods);
      }
    },
    // 合并购物车
    async mergedCart({ state, commit }) {
      // 如果本地购物车中没有数据，不用进行合并
      if (state.list.length === 0) return;
      // 准备合并购物车接口所需参数
      const cart = state.list.map((item) => ({
        skuId: item.skuId,
        selected: item.selected,
        count: item.count,
      }));
      // console.log(cart);
      await mergeCart(cart);
      commit("setCart", []);
    },
  },
  getters: {
    // 可购买的商品列表
    effectiveGoodsList(state) {
      // 商品库存大于0
      // isEffective字段为真
      return state.list.filter((item) => item.stock > 0 && item.isEffective);
    },
    // 可购买的商品价格
    effectiveGoodsPrice(state, getters) {
      return getters.effectiveGoodsList.reduce((price, item) => {
        return price + item.count * Number(item.nowPrice);
      }, 0);
    },
    // 可购买的商品总数
    effectiveGoodsCount(state, getters) {
      return getters.effectiveGoodsList.reduce((count, item) => {
        return count + item.count;
      }, 0);
    },
    // 无效商品列表
    invalidGoodsList(state) {
      return state.list.filter((item) => !item.isEffective || item.stock === 0);
    },
    // 用户选择的商品列表
    userSelectedGoodsList(state, getters) {
      return getters.effectiveGoodsList.filter((item) => item.selected);
    },
    // 用户选择的商品数量
    userSelectedGoodsCount(state, getters) {
      return getters.userSelectedGoodsList.reduce((count, item) => {
        return item.count + count;
      }, 0);
    },
    // 用户选择的商品总价
    userSelectedGoodsPrice(state, getters) {
      return getters.userSelectedGoodsList
        .reduce((price, item) => {
          return price + Number(item.nowPrice) * item.count;
        }, 0)
        .toFixed(2);
    },
    // 全选、全不选按钮的状态
    selectAllButtonStatus(state, getters) {
      return (
        getters.effectiveGoodsList.length > 0 &&
        getters.userSelectedGoodsList.length ===
          getters.effectiveGoodsList.length
      );
    },
  },
};
