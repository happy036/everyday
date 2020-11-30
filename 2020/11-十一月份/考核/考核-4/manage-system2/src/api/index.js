// 关于用户的接口
export const user = {
  LoginUser: "login", // 用户登录
  GetUsers: "users", // 获取所有用户
  // 添加用户
  AddUsers: 'users',
  // 删除用户
  DeleteUsers: 'users',
  // 查询用户
  GetUser: 'users',
  // 更新用户
  EditUser: 'users'
};

// 关于权限的接口
export const rights = {
  AsideMenus: "menus",// 获取左侧菜单权限
  GetRights: 'rights/list'
};
// 角色
export const roles = {
  getRoles: 'roles',
  // 添加角色
  addRoles: 'roles'
}