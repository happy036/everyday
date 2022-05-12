import {
    Card,
    Form,
    Radio,
    Button,
    DatePicker,
    Breadcrumb,
    Table, Space,
    Image,
    Tag,
    Modal,
    message,
} from "antd";
import "moment/locale/zh-cn";
import locale from "antd/es/date-picker/locale/zh_CN";
import { Link, useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector, } from "react-redux";
import { useEffect, useRef } from "react";
import { delArticle, getArticles, getChannels } from "@/store/actions";
import defaultImg from "@/assets/error.png";
import Channel from "@/components/Channel";
const Article = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // 获取频道
    useEffect(() => { dispatch(getChannels()); dispatch((getArticles())) }, [dispatch])
    const { results, page, per_page, total_count } = useSelector((state) => state.article)
    // 删除
    const delArticleFn = (id) => {
        console.log(id);
        Modal.confirm({
            title: '您是否确认删除该文章？',
            concelText: '取消',
            okText: '确认',
            onOk: async () => {
                await dispatch(delArticle(id))
                await dispatch(getArticles(params.current))
                message.success('删除成功')
            }
        })
    }
    // 编辑
    const editArticleFn = (id) => {
        navigate(`/publish?id=${id}`)
    }
    const columns = [
        {
            title: "封面",
            dataIndex: "cover",
            key: "cover",
            render: (cover) => (<Image src={cover?.image?.[0] || defaultImg} style={{ objectFit: 'cover' }} width={200} height={120} />),
        },
        {
            title: "标题",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "状态",
            dataIndex: "status",
            key: "status",
            render: (status) => {
                const info = statusLabel[status];
                return <Tag color={info.color}>{info.text}</Tag>
            },
        },
        {
            title: "发布时间",
            dataIndex: "pubdate",
            key: "pubdate",
        },
        {
            title: "阅读数",
            dataIndex: "read_count",
            key: "read_count",
        },
        {
            title: "评论数",
            dataIndex: "comment_count",
            key: "comment_count",
        },
        {
            title: "点赞数",
            dataIndex: "like_count",
            key: "like_count",
        },
        {
            title: "操作",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={() => editArticleFn(record.id)} type="link" icon={<EditOutlined />} />
                    <Button onClick={() => delArticleFn(record.id)} type="link" icon={<DeleteOutlined />} />
                </Space>
            ),
        },
    ];
    // 阅读状态数据
    const statusLabel = [
        { text: "草稿", color: "default" },
        { text: "待审核", color: "blue" },
        { text: "审核通过", color: "green" },
        { text: "审核拒绝", color: "red" },
    ];
    // 请求参数
    const params = useRef({
        page: 1,
        per_page: 10,
        status: undefined,
        begin_pubdate: undefined,
        end_pubdate: undefined,
    });
    // 改变筛选条件查询
    const onFinish = (values) => {
        params.current.status = values.status
        params.current.channel_id = values.channel_id
        if (values.dateArr) {
            params.current.begin_pubdate = values.dateArr[0].format('YYYY-MM-DD HH:mm:ss')
            params.current.end_pubdate = values.dateArr[1].format(
                "YYYY-MM-DD HH:mm:ss"
            );
        } else {
            params.current.begin_pubdate = undefined;
            params.current.end_pubdate = undefined;
        }
        params.current.page = 1
        dispatch(getArticles(params.current))
    }
    // 改变分页和size重新查询
    const onPageChange = (page, pageSize) => {
        params.current.page = page
        params.current.per_page = pageSize
        dispatch(getArticles(params.current));
    }

    return (
        <div className={styles.root}>
            <Card
                title={
                    // 面包屑
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>内容管理</Breadcrumb.Item>
                    </Breadcrumb>
                }
            >
                {/* 表单 */}
                <Form onFinish={onFinish}>
                    <Form.Item label="状态：" name="status">
                        <Radio.Group>
                            <Radio value={undefined}>全部</Radio>
                            <Radio value={0}>草稿</Radio>
                            <Radio value={1}>待审核</Radio>
                            <Radio value={2}>已通过</Radio>
                            <Radio value={3}>已拒绝</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="频道：" name="channel_id">
                        <Channel width={288} />
                    </Form.Item>
                    <Form.Item label="日期：" name="dateArr">
                        <DatePicker.RangePicker locale={locale} />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">筛选</Button>
                    </Form.Item>
                </Form>
            </Card>
            <Card
                title={`根据筛选条件共查询到 100 条结果：`}
                style={{ marginTop: 24 }}
            >
                <Table
                    columns={columns}
                    dataSource={results}
                    rowKey="id"
                    pagination={{
                        current: page,
                        pageSize: per_page,
                        total: total_count,
                        onChange: onPageChange
                    }}></Table>
            </Card>
        </div >
    );
};

export default Article;