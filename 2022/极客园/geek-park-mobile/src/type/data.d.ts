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
// 频道文章列表数据
export type Articles = {
  pre_timestamp: string;
  results: {
    art_id: string;
    aut_id: string;
    aut_name: string;
    comm_count: number;
    cover: {
      type: number;
      images: string[];
    };
    pubdate: string;
    title: string;
  }[];
};
// -- 文章详情 --
export type ArticleDetail = {
  art_id: string;
  title: string;
  pubdate: string;
  aut_id: string;
  aut_name: string;
  aut_photo: string;
  is_followed: boolean;
  attitude: number;
  content: string;
  is_collected: boolean;
  // 接口中缺失
  comm_count: number;
  like_count: number;
  read_count: number;
};
// 文章发布评论的类型
// 评论项的类型
export type ArtComment = {
  com_id: string;
  aut_id: string;
  aut_name: string;
  aut_photo: string;
  like_count: number;
  reply_count: number;
  pubdate: string;
  content: string;
  is_liking: boolean;
  is_followed: boolean;
};
// 文章评论的类型
export type ArticleComment = {
  total_count: number;
  end_id: string | null;
  last_id: string | null;
  results: ArtComment[];
};

//
export type AddArticleCommnet = {
  com_id: string;
  new_obj: ArtComment;
  target: string;
};
// 问题列表信息
export type HomeQuestionLists = {
  title: string;
  agree: number;
  comment: number;
  time: string;
  img: string;
};
// 视频列表信息
export type VideoList = {
  title: string;
  video: string;
  playTime: number;
}
// 搜索联想关键词
export type Suggestion = {
  options: string[];
};
// 搜索结果
export type SuggestionResult = {
  page: number;
  per_page: number;
  results: Article[];
  total_count: number;
};