import { useNavigate, Outlet } from "react-router-dom";
import { TabBar } from "antd-mobile";
import { useState } from "react";
import styles from "./index.module.scss";

import Icon from "../../components/Icon";
// 导入页面组件，配置路由
function Layout() {
  const tabs = [
    { path: "/homepage", icon: "iconbtn_home", text: "首页" },
    { path: "/question", icon: "iconbtn_qa", text: "问答" },
    { path: "/video", icon: "iconbtn_video", text: "视频" },
    { path: "/profile", icon: "iconbtn_mine", text: "我的" },
  ];
  const navigate = useNavigate();
  const changeRoute = (path: string) => {
    navigate(path);
    setActiveKey(path);
  };
  const [activeKey, setActiveKey] = useState<string>("/homepage");
  return (
    <div className={styles.root}>
      <Outlet />
      <TabBar
        className="tab-bar"
        activeKey={activeKey}
        onChange={(key) => {
          changeRoute(key);
        }}
      >
        {tabs.map((item) => (
          <TabBar.Item
            key={item.path}
            icon={(active) => (
              <Icon
                type={active ? `${item.icon}_sel` : item.icon}
                className="tab-bar-item-icon"
              />
            )}
            title={item.text}
          />
        ))}
      </TabBar>
    </div>
  );
}

export default Layout;
