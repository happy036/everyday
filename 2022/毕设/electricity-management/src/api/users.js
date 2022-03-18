import { requestWithoutToken, requestWithToken } from "@/utils/request";

/**
 * 用户名密码登录
 * @param username
 * @param password
 * @returns {AxiosPromise}
 */
export function login({ username, password }) {
  return requestWithoutToken("/users/login", "post", { username, password });
}

/**
 * 注册
 * @param username
 * @param password
 * @param mobile
 * @returns {AxiosPromise}
 */
export function register({ username, password, mobile, email }) {
  return requestWithoutToken("/users/register", "post", {
    username,
    password,
    mobile,
    email,
  });
}

/**
 * 查询所有用户
 * @param limit
 * @returns {AxiosPromise}
 */
export function getAllUsers(limit) {
  return requestWithoutToken("/users/allUsers", "get", limit);
}

/**
 * 根据id查询用户
 * @param id
 * @returns {AxiosPromise}
 */
export function getIdUser(id) {
  return requestWithToken("/users/finduser", "get", { id });
}
// 更新用户信息
export function updateUserInfos(data) {
  return requestWithToken("/users/updateuser", "put", data);
}
// 删除用户
export function onDeleteUser(id) {
  return requestWithToken("/users/delUser", "get", { id });
}
// 搜索用户
export function onSearchUser(username, pageSize, currentPage) {
  return requestWithToken("/users/serUser", "get", {
    username,
    pageSize,
    currentPage,
  });
}
