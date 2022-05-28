import { Tabs, Popup } from "antd-mobile";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../type/store";
import styles from "./index.module.scss";
import Channels from "./components/Channels";
import {useEffect, useState} from "react";
import Icon from "../../components/Icon";
import {getAllChannels,getUserChannel} from "../../store/actions/home";
function Home() {
  const { userChannel,channelActively } = useSelector((state: RootState) => state.Home);
  const [visible, setVisible] = useState<boolean>(false);
  const onChannelOpen = () => {
    setVisible(true);
  };
  const onChannelClose = () => {
    setVisible(false);
  };
  const dispatch=useDispatch()
    // 首页顶部频道切换高亮
  const onTabChange=(key:string)=>{
      dispatch({type:'home/changeTab',payload:key})
  }
  useEffect(()=>{
      dispatch(getUserChannel());
      dispatch(getAllChannels())
  },[dispatch])
  return (
    <div className={styles.root}>
      {userChannel.length > 0 && (
        <Tabs className="tabs" activeLineMode="fixed" activeKey={channelActively} onChange={onTabChange}>
          {userChannel.map((item: any) => (
            <Tabs.Tab title={item.name} key={item.id}>
              推荐频道的内容
            </Tabs.Tab>
          ))}
        </Tabs>
      )}
      <div className="tabs-opration">
        <Icon type="iconbtn_search" />
        <Icon type="iconbtn_channel" onClick={onChannelOpen} />
      </div>
      <Popup
        visible={visible}
        onMaskClick={onChannelClose}
        position="left"
        className="channel-popup"
      >
        <Channels onClose={onChannelClose} />
      </Popup>
    </div>
  );
}

export default Home;
