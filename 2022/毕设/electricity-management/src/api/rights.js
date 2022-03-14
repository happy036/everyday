import { requestWithToken } from "@/utils/request";
// 获取所有权限
export function getRights(pageSize, currentPage) {
  return requestWithToken("/rights/getrights", "get", {
    pageSize,
    currentPage,
  });
}
// 角色权限
export function getRoleRights() {
  return requestWithToken("/rights/roleRights", "get");
}
