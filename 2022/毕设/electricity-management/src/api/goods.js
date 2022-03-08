import { requestWithToken } from "@/utils/request";
// 获取所有商品，分类
export function getGoodsList(limit) {
  return requestWithToken("/goods/goodsList", "get", limit);
}
// 查找商品
export function findGoods(search, pageSize, currentPage) {
  return requestWithToken("/goods/findGoods", "get", {
    search,
    pageSize,
    currentPage,
  });
}
// 删除商品
export function deleteGood(id) {
  return requestWithToken("/goods/delgood", "get", { id });
}
// 更新商品
export function updateGoods(data) {
  return requestWithToken("/goods/updategood", "post", data);
}
// 根据Id查找商品
export function getGoodInfo(id) {
  return requestWithToken("/goods/findGood", "get", { id });
}
// 获取所有分类
export function getCate() {
  return requestWithToken("/category/getOneCate", "get");
}
// 添加商品
export function addGood(data) {
  return requestWithToken("/goods/addGood", "post", data);
}
