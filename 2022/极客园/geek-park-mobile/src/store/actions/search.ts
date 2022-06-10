import { RootThunkAction, SearchAction } from '../../type/store';
import { Axios } from '../../utils/http';

// 获取联想关键词
export const getSuggestion = (q: string):RootThunkAction => {
  return async (dispatch) => {
    const res = await Axios('/suggestion','get', {q});
    dispatch({ type: 'search/suggestion', payload: res.data.options });
  };
};
// 清空联想
export const clearSuggestion = (): SearchAction => {
  return { type: 'search/clearSuggestion' };
};
