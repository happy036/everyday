import { Button, NavBar, Form, Input, Toast } from "antd-mobile";
import { useDispatch } from "react-redux";
import styles from "./index.module.scss";
import { getCode, login } from "../../store/actions";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { InputRef } from "antd-mobile/es/components/input";
import { useState } from "react";
import { useEffect } from "react";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // 登录参数类型
  type LoginForm = {
    mobile: string;
    code: string;
  };
  // 登录
  const onFinish = async (values: LoginForm) => {
    await dispatch(login(values));
    // 成功
    Toast.show({
      content: "登录成功",
      duration: 600,
      afterClose: () => {
        navigate("/homepage");
      },
    });
  };
  // 获取验证码
  const [form] = Form.useForm();
  // 手机号
  const mobileRef = useRef<InputRef>(null);
  // 倒计时
  const timerRef = useRef(-1);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const onGetCode = () => {
    // 拿手机号
    const mobile = (form.getFieldValue("mobile") ?? "") as string;
    // 判断手机号校验是否成功
    const hasError = form.getFieldError("mobile").length > 0;
    if (mobile.trim() === "" || hasError) {
      return mobileRef.current?.focus();
    }
    dispatch(getCode(mobile));
    // 验证码倒计时
    setTimeLeft(5);
    timerRef.current = window.setInterval(() => {
      setTimeLeft((timeLeft) => (timeLeft > 0 ? timeLeft - 1 : 0));
    }, 1000);
  };
  // 监听倒计时变化，在倒计时结束时清理定时器
  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(timerRef.current);
    }
  }, [timeLeft]);
  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      // 组件卸载时清理定时器
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <div className={styles.root}>
      <NavBar></NavBar>

      <div className="login-form">
        <h2 className="title">账号登录</h2>

        <Form validateTrigger={["onBlur"]} onFinish={onFinish} form={form}>
          <Form.Item
            name="mobile"
            validateTrigger="onBlur"
            rules={[
              { required: true, message: "请输入手机号" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号格式错误",
              },
            ]}
            className="login-item"
          >
            <Input placeholder="请输入手机号" maxLength={11} ref={mobileRef} />
          </Form.Item>

          <Form.Item
            className="login-item"
            name="code"
            rules={[{ required: true, message: "请输入验证码" }]}
            validateTrigger="onBlur"
            extra={
              <span
                // 判断是否开启定时器，没开启绑定事件，开启后去掉事件
                onClick={timeLeft === 0 ? onGetCode : undefined}
                onKeyDown={timeLeft === 0 ? onGetCode : undefined}
              >
                {/* 判断是否开启定时器，没开启展示 发送验证码，开启后展示倒计时 */}
                {timeLeft === 0 ? "发送验证码" : `${timeLeft}s后重新获取`}
              </span>
            }
          >
            <Input placeholder="请输入验证码" autoComplete="off" />
          </Form.Item>

          {/* noStyle 表示不提供 Form.Item 自带的样式 */}
          <Form.Item noStyle>
            <Button
              block
              type="submit"
              color="primary"
              className="login-submit"
            >
              登 录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
export default Login;
