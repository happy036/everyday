import { InfiniteScroll, PullToRefresh } from "antd-mobile";
import {
  getArticleList,
  getNewsArticleList,
} from "../../../../store/actions/home";
import { useDispatch, useSelector } from "react-redux";
import ArticleItem from "../../../../components/ArticleItem";
import { RootState } from "../../../../type/store";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
type Props = {
  channelId: number;
};
const ArticleList = ({ channelId }: Props) => {
  const dispatch = useDispatch();
  // 获取当前频道的文章列表数据
  const { channelArticles } = useSelector((state: RootState) => state.Home);
  // 如果当前列表数据不存在，设置默认值为空
  const currentchannelArticle = channelArticles[channelId] ?? {
    pre_timestamp: Date.now() + "",
    results: [],
  };
  const { pre_timestamp, results } = currentchannelArticle;
  //   加载更多数据的函数
  const loadMore = async () => {
    await dispatch(getArticleList(channelId, pre_timestamp));
  };
  // 是否加载更多数据的条件：
  const hasMore = pre_timestamp !== null;
  // 下拉加载更多数据
  const onRefresh = async () => {
    await dispatch(getNewsArticleList(channelId, Date.now() + ""));
  };
  const Navigate = useNavigate();
  return (
    <div className={styles.root}>
      <PullToRefresh onRefresh={onRefresh}>
        {/* 文章列表中的每一项 */}
        {results.map((item: any, index: number) => {
          const {
            art_id,
            title,
            aut_name,
            comm_count,
            pubdate,
            cover: { type, images },
          } = item;
          const articleData = {
            title,
            aut_name,
            comm_count,
            pubdate,
            type,
            images,
          };
          return (
            <div
              key={index}
              className="article-item"
              onClick={() => Navigate(`/articles/${art_id}`)}
            >
              <ArticleItem {...articleData} />
            </div>
          );
        })}
        {/*
        loadMore 加载数据的函数
        hasMore 布尔值，true 表示还有更多数据；false 表示没有更多数据了
      */}
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      </PullToRefresh>
    </div>
  );
};
export default ArticleList;
