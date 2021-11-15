import { requestWithoutToken } from "@/utils/request";
export function getCategory() {
  return requestWithoutToken("/home/category/head", "get");
}
