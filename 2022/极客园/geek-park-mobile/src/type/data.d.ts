// 登录接口返回数据类型
export type Token = {
  token: string;
  refresh_token: string;
};
// 我的 - 个人信息
export type User = {
  id: string;
  name: string;
  photo: string;
  art_count: number;
  follow_count: number;
  fans_count: number;
  like_count: number;
};
// 用户信息
export type UserProfile = {
  id: string;
  photo: string;
  name: string;
  mobile: string;
  gender: number;
  birthday: string;
  intro: string;
};
// 首页频道数据
export type Channel = {
  id: number;
  name: string
}
// 用户登录后的首页频道数据
export type UserChannel = {
  channels: Channel[];
}