import { requestWithToken } from "@/utils/request";
export function getGoodsSales() {
  requestWithToken("get", "/data/sales");
}
export function getCategoryData() {
  requestWithToken("get", "/data/category");
}
