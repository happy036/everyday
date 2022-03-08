import { requestWithToken } from "@/utils/request";

/**
 * 生成订单
 * @returns {AxiosPromise}
 */
export function createOrder() {
  return requestWithToken("/member/order/pre", "get");
}
