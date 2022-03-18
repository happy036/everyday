import { requestWithToken } from "@/utils/request";
export function getOrders(limit) {
  return requestWithToken("/orders/getOrders", "get", limit);
}
// 查找订单
export function findOrders(search, pageSize, currentPage) {
  return requestWithToken("/orders/findOrders", "get", {
    search,
    pageSize,
    currentPage,
  });
}
