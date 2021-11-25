import { requestWithoutToken } from "@/utils/request";
/**
 * 根据一级分类ID获取一级分类下的具体信息;
 * @param id
 * @returns {AxiosPromise}
 */
export function getTopCategoryById(id) {
  return requestWithoutToken("/category", "get", { id });
}

/**
 * 根据二级分类id获取筛选条件
 * @param id 二级分类id
 * @returns {AxiosPromise}
 */
export function getCategorySubFilter(id) {
  return requestWithoutToken("/category/sub/filter", "get", { id });
}
