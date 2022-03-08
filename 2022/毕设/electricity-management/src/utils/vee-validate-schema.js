export function username(value) {
  if (!value) return "请输入用户名";
  if (!/^[a-zA-Z]\w{5,19}$/.test(value)) return "字母开头且6-20个字符";
  return true;
}
export function password(value) {
  if (!value) return "请输入密码";
  if (!/^\w{6,24}$/.test(value)) return "密码是6-24个字符";
  return true;
}
export function mobile(value) {
  if (!value) return "请输入手机号";
  if (!/^1[3-9]\d{9}$/.test(value)) return "手机号格式错误";
  return true;
}
export function email(value) {
  if (!value) return "请输入邮箱";
  if (!/^[1-9]\d{7,10}@qq\.com$/.test(value)) return "QQ邮箱格式错误";
  return true;
}
