import { NavBar } from "antd-mobile";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import ArticleItem from "../../../components/ArticleItem";
import { Axios } from "../../../utils/http";

import styles from "./index.module.scss";
export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searcgList, setSearchList] = useState<any>([]);
  // 获取参数
  const params = new URLSearchParams(location.search);
  let query = params.get("query") ?? "";
  useEffect(() => {
    Axios("/search", "get", {
      q: query,
    }).then((res) => {
      setSearchList(res.data.results);
    });
  }, [query]);

  return (
    <div className={styles.root}>
      <NavBar onBack={() => navigate("/search")}>搜索结果</NavBar>
      <div className="article-list">
        {searcgList.map((item: any, index: any) => {
          const {
            title,
            pubdate,
            comm_count,
            aut_name,
            art_id,
            cover: { type, images },
          } = item;
          const articleData = {
            title,
            pubdate,
            comm_count,
            aut_name,
            type,
            images,
          };
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
            <div
              key={index}
              className="article-item"
              onClick={() => navigate(`/articles/${art_id}`)}
            >
              <ArticleItem {...articleData} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
