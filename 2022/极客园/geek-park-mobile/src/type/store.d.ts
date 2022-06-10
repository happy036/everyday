import { ThunkAction } from 'redux-thunk';
import store from '../store';
import { Channel, Token,User,UserProfile,Articles,ArticleDetail } from './data';
// 获取 redux 状态的类型
export type RootState = ReturnType<typeof store.getState>;
// 第一个类型参数：thunk action 返回值类型
// 第二个类型参数：Redux 状态的类型
// 第三个类型参数：thunk action 额外参数的类型
// 第四个类型参数：Redux 中所有 action 的类型
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>;

// 项目中所有 action 的类型
type RootAction = unknown |LoginAction |ProfileAction|HomeAction;

// -------------------- Redux 对象形式的 action 的类型 ---------------------------

// 登录相关的 action 类型
export type LoginAction = {
    type: 'login/token';
    payload:Token
} | {
  type:'login/logout'
}
// 个人中心相关的 action 类型
export type ProfileAction = {
    type: 'profile/getuser';
    payload:User
}|{
    type: 'profile/getUserProfile',
    payload:UserProfile
}
| { type: 'profile/photo'; payload: string }
  | {
      type: 'profile/update';
      payload: Partial<UserProfile>;
    };
// 首页
export type HomeAction = {
    type: 'home/getChannels';
    payload:Channel[]
} | {
    // 获取所有频道
    type:'home/getAllChannel';
    payload:Channel[]
}|
    {
        type:'home/changeTab';
        payload:string
} | {
        // 删除频道
    type:'home/delChannel';
    payload:Channel;
} | {
    // 添加频道
    type:'home/addChannel';
    payload:Channel;
} | {
    // 频道文章列表
    type: 'home/getChannelArticles';
    payload: {
        // 频道 id
    channelId: number;
    // 该频道的文章列表数据
    data: Articles;
    }
}| {
    // 频道文章列表
    type: 'home/getNewestArticleList';
    payload: {
        // 频道 id
    channelId: number;
    // 该频道的文章列表数据
    data: Articles;
    }
}
// 文章详情
export type ArticleAction = {
    type: 'article/get';
  payload: ArticleDetail;
}
    | {
      type: 'article/update';
      payload: {
        // 要修改的键
        name: 'is_followed' | 'is_collected' | 'attitude';
        // 值
        // is_followed 和 is_collected 的值为：布尔值
        // attitude 数值
        value: boolean | number;
      };
    }
  | {
      type: `article/${'getArticleComments' | 'getArticleCommentsFirst'}`;
      payload: ArticleComment;
    }
  | {
      type: 'article/addArticleComment';
      payload: ArtComment;
    }
  | {
      type: 'artilce/articleCommentThumbUp';
      payload: {
        id: string;
        is_liking: boolean;
      };
    }
  | {
      type: 'article/updateCommentCount';
      payload: {
        commentId: string;
        total: number;
      };
};
    // 搜索相关的 action 类型
export type SearchAction =
  | {
      type: 'search/suggestion';
      payload: Suggestion['options'];
    }
  | {
      type: 'search/clearSuggestion';
    }
  | {
      type: 'search/getSuggestionResult';
      payload: SuggestionResult;
    };