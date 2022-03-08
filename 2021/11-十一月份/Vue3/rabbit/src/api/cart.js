import { requestWithoutToken, requestWithToken } from "@/utils/request";

/**
 * 再次访问应用时，更新本地购物车列表中的商品信息(库存, 是否有效, 现价)
 * @param skuId
 * @param id
 * @returns {AxiosPromise}
 */
export function updateLocalCart(skuId) {
  return requestWithoutToken(`/goods/stock/${skuId}`, "get");
}

/**
 *获取规格信息
 * @param skuId
 * @returns {AxiosPromise}
 */
export function getSkuMessage(skuId) {
  return requestWithoutToken(`/goods/sku/${skuId}`, "get");
}

/**
 * 将本地购物车和服务器端购物车进行合并
 * @param cart
 * @returns {AxiosPromise}
 */
export function mergeCart(cart) {
  return requestWithToken("/member/cart/merge", "post", cart);
}

/**
 * 获取服务端购物车列表数据
 * @returns {AxiosPromise}
 */
export function getCartList() {
  return requestWithToken("/member/cart", "get");
}

/**
 * 将商品加入购物车
 * @param skuId 商品skuId
 * @param count 商品数量
 * @returns {AxiosPromise}
 */
export function addGoodsToCart({ skuId, count }) {
  return requestWithToken("/member/cart", "post", { skuId, count });
}

/**
 * 删除购物车中的商品 支持批量删除 支持单个删除
 * @param ids 商品skuId数组
 * @returns {AxiosPromise}
 */
export function deleteGoodsCart(ids) {
  return requestWithToken("/member/cart", "delete", { ids });
}

/**
 * 更新购物车中的商品信息 (支持是否选中和商品数量)
 * @param skuId 商品 skuId
 * @param selected 是否选中状态
 * @param count 商品数量
 * @returns {AxiosPromise}
 */
export function updateGoodsOfCartBySkuId({ skuId, selected, count }) {
  return requestWithToken(`/member/cart/${skuId}`, "put", { selected, count });
}
export function selectOrUnselectCartGoods({ selected, ids }) {
  return requestWithToken("/member/cart/selected", "put", { selected, ids });
}
