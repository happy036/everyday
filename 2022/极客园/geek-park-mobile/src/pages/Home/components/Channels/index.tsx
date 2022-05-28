import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../../../type/store";
import classNames from "classnames";
import Icon from "../../../../components/Icon";
import styles from './index.module.scss'
import {useState} from "react";
import {Channel} from "../../../../type/data";
import {addChannel, delChannel} from "../../../../store/actions/home";
type Props = {
  onClose: () => void;
};
const Channels = ({ onClose }: Props) => {
  const { userChannel,restChannel,channelActively } = useSelector((state: RootState) => state.Home);
  const [isEdit, setIsEdit] = useState(false);
  const onChangeEdit = () => {
        setIsEdit(!isEdit);
    };
  const dispatch=useDispatch()
    // 频道管理频道高亮
    const onChannelClick= (item:Channel)=>{

      if(!isEdit){
          dispatch({type:'home/changeTab',payload:item.id+''})
          onClose()
          return
      }
      if(item.id===0) return;
      if (userChannel.length<=4) return;
      dispatch(delChannel(item))
    }
    // 添加频道
    const onAddChannel=(item:Channel)=>{
      dispatch(addChannel(item))
    }
  return (
    <div className={styles.root}>
      <div className="channel-header">
        <Icon type="iconbtn_channel_close" onClick={onClose} />
      </div>
        <div className='channel-content'>
            {/* 编辑时，添加类名 edit */}
            <div className={classNames('channel-item', isEdit && 'edit')}>
                <div className="channel-item-header">
                    <span className="channel-item-title">我的频道</span>
                    <span className="channel-item-title-extra">点击进入频道</span>
                    <span className="channel-item-edit" onClick={onChangeEdit}>
              {isEdit ? '保存' : '编辑'}
            </span>
                </div>
                <div className="channel-list">
                    {/* 选中时，添加类名 selected */}
                    {userChannel.map((item: any) => (
                        <span key={item.id} className={classNames("channel-list-item",channelActively===item.id+''&&'selected')}
                        onClick={()=>onChannelClick(item)}
                        >
                        {item.name}
                            <Icon type="iconbtn_tag_close" />
                        </span>
                    ))}
                </div>
            </div>
            <div className="channel-item">
                <div className="channel-item-header">
                    <span className="channel-item-title">可选频道</span>
                    <span className="channel-item-title-extra">点击添加频道</span>
                </div>
                <div className="channel-list">
                    {restChannel.map((item:any) => (
                        <span key={item.id} className="channel-list-item" onClick={()=>onAddChannel(item)}>
                        + {item.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};
export default Channels;
