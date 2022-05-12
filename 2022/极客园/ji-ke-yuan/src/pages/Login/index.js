import React from 'react'
import styles from './index.module.scss'
import logo from '@/assets/logo.png'
import { Form, Input, Button, Checkbox, Card, message } from 'antd'
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { login } from '@/store/actions';
function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onFinish = async (values) => {
        const { mobile, code } = values
        try {
            await dispatch(login(mobile, code))
            navigate('/dashboard')
        } catch (e) {
            message.error(e.response?.data?.message || '登录失败')
        }
    }
    return (
        <div className={styles.root}>
            <Card className="login-wrapper">
                <img className="logo" src={logo} alt="" />
                {/* 登录表单 */}
                <Form size="large" validateTrigger={['onChange', 'onBlur']} onFinish={onFinish}>
                    <Form.Item name="mobile"
                        rules={[
                            { required: true, message: "请输入手机号" },
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: "手机格式不正确",
                            },
                        ]}>
                        <Input prefix={<UserOutlined />} placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item name="code"
                        rules={[
                            { required: true, message: "请输入验证码" },
                            { len: 6, message: "验证码6个字符串" },
                        ]}>
                        <Input prefix={<LockOutlined />} placeholder="请输入验证码" />
                    </Form.Item>
                    <Form.Item name="isAgree"
                        valuePropName="checked" rules={[
                            {
                                validator: (_, value) => {
                                    if (value === true) return Promise.resolve();
                                    else return Promise.reject(new Error("请勾选我已阅读并同意"));
                                },
                            },
                        ]}>
                        <Checkbox>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login