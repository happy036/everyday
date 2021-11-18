import { requestWithoutToken } from "@/utils/request";
// 获取分类数据
export function getCategory() {
  return requestWithoutToken("/home/category/head", "get");
}
// 获取品牌推荐数据
export function getBrands(limit = 10) {
  return requestWithoutToken("/home/brand", "get", { limit });
}
// 获取轮播图数据
export function getBanners(distributionSite = 1) {
  return requestWithoutToken("/home/banner", "get", { distributionSite });
}
// 获取新鲜好物数据
export function getHomeNew(limit = 4) {
  return requestWithoutToken("/home/new", "get", { limit });
}
// 获取人气推荐数据
export function getHomeHot() {
  return requestWithoutToken("/home/hot", "get");
}
// 获取热门品牌数据
export function getHomeBrands(limit = 6) {
  return requestWithoutToken("/home/brand", "get", { limit });
}
// 获取产品区块数据
export function getHomeGoods() {
  return requestWithoutToken("/home/goods", "get");
}
// 获取最新专题数据
export function getHomeSpecial(limit = 3) {
  return requestWithoutToken("/home/special", "get", { limit });
}
