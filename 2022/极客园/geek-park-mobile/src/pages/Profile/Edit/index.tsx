import { Button, List, DatePicker, NavBar } from "antd-mobile";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfile } from "../../../store/actions/profile";
import { RootState } from "../../../type/store";
import classNames from "classnames";
import styles from "./index.module.scss";
function ProfileEdit() {
  const Item = List.Item;
  const dispatch = useDispatch();
  const { photo, name, intro, gender, birthday } = useSelector(
    (state: RootState) => state.profile
  );
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  return (
    <div className={styles.root}>
      <div className="content">
        {/* 标题 */}
        <NavBar
          className="nav-bar"
          //   onBack={() => history.go(-1)}
        >
          个人信息
        </NavBar>

        <div className="wrapper">
          {/* 列表 */}
          <List className="profile-list">
            {/* 列表项 */}
            <Item
              // extra 表示右侧的额外信息
              extra={
                <span className="avatar-wrapper">
                  <img
                    width={24}
                    height={24}
                    src={
                      photo || "http://toutiao.itheima.net/images/user_head.jpg"
                    }
                    alt=""
                  />
                </span>
              }
              arrow
              //   onClick={() => onListPopupShow("photo")}
            >
              头像
            </Item>
            <Item arrow extra={name}>
              昵称
            </Item>
            <Item
              arrow
              extra={
                <span className={classNames("intro", intro && "normal")}>
                  {intro}
                </span>
              }
              //   onClick={() => onInputShow("intro", intro ?? "")}
            >
              {intro || "未填写"}
            </Item>
          </List>
          <List className="profile-list">
            <Item
              arrow
              extra={gender + "" === "0" ? "男" : "女"}
              //   onClick={() => onListPopupShow("gender")}
            >
              性别
            </Item>
            <Item arrow extra={birthday}>
              生日
            </Item>
          </List>

          <DatePicker
            // visible={showBirthday}
            value={new Date(birthday)}
            title="选择年月日"
            min={new Date(1900, 0, 1, 0, 0, 0)}
            max={new Date()}
            // onClose={() => setShowBirtyday(false)}
            // 当点击确定按钮时触发，通过参数可以拿到当前选中的日期（ 注意：JS 中的 Date 对象 ）
            // onConfirm={onUpdateBirthday}
          />

          {/* 创建 input[type=file] 标签 */}
          <input
            // ref={fileRef}
            type="file"
            style={{ display: "none" }}
            // onChange={onChangePhoto}
          />
        </div>

        <div className="logout">
          <Button className="btn">退出登录</Button>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
