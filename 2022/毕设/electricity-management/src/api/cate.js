import { requestWithToken } from "@/utils/request";
// 获取所有商品分类
export function getCategories() {
  return requestWithToken("/category/categorys", "get");
}
// 添加二级分类
export function addSubCategory(name, id) {
  return requestWithToken("/category/addSubCate", "get", { name, id });
}
// 添加一级分类
export function addOneCategory(name) {
  return requestWithToken("/category/addOneCate", "get", { name });
}
// 删除二级分类
export function deleteSubCate(id) {
  return requestWithToken("/category/delSubCategory", "get", { id });
}
// 修改一级分类
export function editOneCate(data) {
  return requestWithToken("/category/editOneCate", "get", data);
}
// 修改二级分类
export function editSubCate(data) {
  return requestWithToken("/category/editSubCate", "get", data);
}
