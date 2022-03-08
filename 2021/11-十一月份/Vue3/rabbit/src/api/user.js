import { requestWithoutToken } from "@/utils/request";

/**
 * 账号密码登录
 * @param account 用户名或手机号
 * @param password 密码
 * @returns {AxiosPromise}
 */
export function loginByAccountAndPassword({ account, password }) {
  return requestWithoutToken("/login", "post", { account, password });
}

/**
 * 获取手机验证码
 * @param mobile 手机号
 * @returns {AxiosPromise}
 */
export function getCodeLogin(mobile) {
  return requestWithoutToken("/login/code", "get", { mobile });
}

/**
 * 通过手机号进行登录
 * @param mobile 手机号
 * @param code 验证码
 * @returns {AxiosPromise}
 */
export function loginByMobile({ mobile, code }) {
  return requestWithoutToken("/login/code", "post", { mobile, code });
}

/**
 * 检索绑定了该QQ的账号
 * @param unionId QQ用户唯一标识
 * @param source 注册来源
 * @returns {AxiosPromise}
 */
export function findAccountByQQId({ unionId, source = 1 }) {
  return requestWithoutToken("/login/social", "post", { unionId, source });
}

/**
 * 获取手机验证码(绑定手机号和QQ号)
 * @param mobile 手机号
 * @returns {AxiosPromise}
 */
export function getBindQQCode(mobile) {
  return requestWithoutToken("/login/social/code", "get", { mobile });
}

/**
 * QQ登录，手机号和QQ号绑定
 * @param unionId 用户的唯一标识
 * @param mobile 手机号
 * @param code 手机验证码
 * @returns {AxiosPromise}
 */
export function binbMobileAndQQ({ unionId, mobile, code }) {
  return requestWithoutToken("/login/social/bind", "post", {
    unionId,
    mobile,
    code,
  });
}

/**
 * 检查用户名是否已存在
 * @param account 用户名
 * @returns {AxiosPromise}
 */
export function checkUsernameIsUnique(account) {
  return requestWithoutToken("/register/check", "get", { account });
}

/**
 * 获取手机验证码（注册）
 * @param mobile 手机号
 * @returns {AxiosPromise}
 */
export function getRegisterMsgCode(mobile) {
  return requestWithoutToken("/register/code", "get", { mobile });
}
export function createNewAccountBindQQ({
  unionId,
  account,
  mobile,
  code,
  password,
}) {
  return requestWithoutToken(`/login/social/${unionId}/complement`, "post", {
    unionId,
    account,
    mobile,
    code,
    password,
  });
}
