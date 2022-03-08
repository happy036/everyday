import { requestWithoutToken } from "@/utils/request";

/**
 * 根据商品ID获取商品详情信息
 * @param id 商品ID
 * @returns {AxiosPromise}
 */
export function getGoodsDetailById(id) {
  return requestWithoutToken("/goods", "get", { id });
}

/**
 * 获取相关商品,猜你喜欢
 * @param id 商品id 如果传了id参数表示获取相关商品数据,如果没有传id参数表示获取猜你喜欢数据
 * @param limit
 * @returns {AxiosPromise}
 */
export function getRelevantGoods(id, limit = 16) {
  return requestWithoutToken("/goods/relevant", "get", { id, limit });
}

/**
 *
 * @param id
 * @param limit
 * @param type
 * @returns {AxiosPromise}
 */
export function getGoodsHot({ id, limit = 3, type }) {
  return requestWithoutToken("/goods/hot", "get", { id, limit, type });
}

/**
 * 获取商品评价头部数据
 * @param id 商品id
 * @returns {AxiosPromise}
 */
export function getCommentInfo(id) {
  return requestWithoutToken(
    `https://mock.boxuegu.com/mock/1175/goods/${id}/evaluate`,
    "get"
  );
}

/**
 * 获取评论列表数据
 * @param params 评论列表查询参数
 * @returns {AxiosPromise}
 */
export function getCommentList(params) {
  return requestWithoutToken(
    `https://mock.boxuegu.com/mock/1175/goods/${params.id}/evaluate/page`,
    "get",
    params
  );
}
