import { RootThunkAction } from "../../type/store";
import { Axios } from "../../utils/http";
// 导入 dayjs 相关包
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);
// 获取文章详情
export const getArticleById = (id:any): RootThunkAction => {
    return async (dispatch) => {
        const { data } = await Axios(`/articles/${id}`, 'get')
        dispatch({
            type: 'article/get', payload: {
             ...data,
        // 格式化日期：
        pubdate: dayjs(data.pubdate).locale('zh-cn').format('LL'),
        }})
    }
}
// 关注文章作者
export const followAuthor = (id:string, isFollowed: boolean):RootThunkAction => {
  return async (dispatch) => {
    if (isFollowed) {
      // 说明：现在已经是关注的状态，所以，此时要取消关注
      await Axios(`/user/followings/${id}`,'delete');
    } else {
        // 说明：现在还没有关注，所以，此时要关注作者
        await Axios('/user/followings', 'get', { target: id });
    }

    dispatch({
      type: 'article/update',
      payload: {
        name: 'is_followed',
        value: !isFollowed,
      },
    });
  };
};

// 收藏或取消收藏文章
export const collectArticle = (art_id: string, is_collected: boolean):RootThunkAction => {
  return async (dispatch) => {
    if (is_collected) {
      // 说明：当前是已收藏，此时，要取消收藏
      await Axios(`/article/collections/${art_id}`,'delete');
    } else {
      // 说明：当前是未收藏，此时，要收藏
      await Axios('/article/collections', 'post',{
        target: art_id,
      });
    }

    dispatch({
      type: 'article/update',
      payload: {
        name: 'is_collected',
        value: !is_collected,
      },
    });
  };
};

// 点赞或取消点赞文章
export const likeArticle = (art_id: string, attitude: number):RootThunkAction => {
  return async (dispatch) => {
    if (attitude === 1) {
      // 说明：当前是点赞，此时，要取消点赞
      await Axios(`/article/likings/${art_id}`,'delete');
    } else {
      // 说明：当前是未点赞，此时，要点赞
      await Axios('/article/likings', 'post',{
        target: art_id,
      });
    }

    dispatch({
      type: 'article/update',
      payload: {
        name: 'attitude',
        value: attitude === 1 ? 0 : 1,
      },
    });
  };
};

// 获取文章评论数据
export const getArticleComments = (
  type: string,
  targetId: any,
):RootThunkAction => {
    return async (dispatch) => {
    const res = await Axios('/comments', 'get',{
        type,
        source: targetId,
    });
    dispatch({
      type: 'article/getArticleComments',
      payload: res.data,
    });
  };
};

// 第一次获取评论数据：覆盖数据
export const getArticleCommentsFirst = (
  type: string,
  targetId: any,
  offset: string | null,
):RootThunkAction => {
    return async (dispatch) => {
    const res = await Axios('/comments','get',{

        type,
        source: targetId,
        offset,
    });
    dispatch({
      type: 'article/getArticleCommentsFirst',
      payload: res.data,
    });
  };
};

// 发表评论
export const addArticleComment = (art_id: string, value: string):RootThunkAction => {
  return async (dispatch) => {
    const res = await Axios('/comments','post', {
      target: art_id,
      content: value,
    });

    dispatch({
      type: 'article/addArticleComment',
      payload: res.data.new_obj,
    });
  };
};

// 对评论进行点赞
export const articleCommentThumbUp = (
  com_id: string,
  is_liking: boolean,
): RootThunkAction => {
  return async (disaptch) => {
    if (!is_liking) {
      // 说明：当前未点赞，此时，要点赞
      await Axios('/comment/likings','post', {
        target: com_id,
      });
    } else {
      // 说明：当前已点赞，此时，要取消点赞
      await Axios(`/comment/likings/${com_id}`,'delete');
    }

    disaptch({
      type: 'artilce/articleCommentThumbUp',
      payload: {
        id: com_id,
        is_liking: !is_liking,
      },
    });
  };
};

// 更新某个评论项的回复数量
export const updateCommentCount = (commentId: string, total: number): RootThunkAction => {
  return async (dispatch) => {
    dispatch({
      type: 'article/updateCommentCount',
      payload: {
        commentId,
        total,
      },
    });
  };
};