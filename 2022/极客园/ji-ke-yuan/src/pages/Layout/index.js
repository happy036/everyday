import { Layout, Menu, Popconfirm, Button } from "antd";
import { useLocation, useNavigate, Outlet, NavLink } from 'react-router-dom'
import "./index.scss";
import {
    PieChartOutlined,
    SolutionOutlined,
    FileWordOutlined,
    LogoutOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserInfo, loginOut } from "@/store/actions";

const { Header, Sider, Content } = Layout;

const GeekLayout = () => {
    const location = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // 激活菜单的key
    let defaultKey = location.pathname;
    if (defaultKey.startsWith('/publish')) {
        defaultKey = '/publish'
    }
    // 获取用户信息
    useEffect(() => { dispatch(getUserInfo()) }, [dispatch])
    const user = useSelector(state => state.user.userInfo)
    // 退出登录
    const onLogout = () => {
        dispatch(loginOut())
        navigate('/login')
    }
    const items = [
        {
            label: <NavLink to="/dashboard">数据面板</NavLink>,
            key: '/dashboard',
            icon: <PieChartOutlined />,
        },
        {
            label: <NavLink to="/article">内容管理</NavLink>,
            key: '/article',
            icon: <SolutionOutlined />,
        },
        {
            label: <NavLink to="/publish">发布文章</NavLink>,
            key: '/publish',
            icon: <FileWordOutlined />,
        },
    ]
    return (
        <Layout className='geek-layout'>
            <Sider width={148}>
                <div className="logo">GEEK</div>
                <Menu selectedKeys={[defaultKey]} items={items} mode="inline" theme="dark"></Menu>
            </Sider>
            <Layout>
                <Header>
                    <span style={{ fontSize: 16 }}>极客园自媒体端</span>
                    <div>
                        <span>{user.name}</span>
                        <Popconfirm
                            placement="bottomRight"
                            title="您确认退出极客园自媒体端吗？"
                            okText="确认"
                            cancelText="取消"
                            onConfirm={onLogout}
                        >
                            <Button type="link" icon={<LogoutOutlined />}>
                                退出
                            </Button>
                        </Popconfirm>
                    </div>
                </Header>
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default GeekLayout;