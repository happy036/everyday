import { Card, Breadcrumb, Form, Button, Input, Space, Radio, Upload, message } from 'antd'
import { PlusOutlined } from "@ant-design/icons";
import { getChannels } from "@/store/actions/article";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styles from "./index.module.scss";
import { useEffect, useState } from 'react';
import Channel from '@/components/Channel';
import { addArticle } from '@/store/actions/publish';
import { getArticle, editArticle } from '@/store/actions';
const Publish = () => {
    const navigate = useNavigate()
    // 频道数据
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getChannels());
    }, [dispatch]);
    // 选择图片类型
    const [type, setType] = useState(1);
    const onTypeChange = (e) => {
        setType(e.target.value);
        setFileList([]);
    };
    // 上传的图片列表
    const [fileList, setFileList] = useState([]);
    const onUploadChange = ({ fileList }) => {
        setFileList(fileList);
    };
    // 提交文章
    const onFinish = async (values, draft = false) => {
        if (type !== fileList.length) {
            return message.warning('请按照选择的封面类型上传图片')
        }
        const data = {
            ...values,
            cover: {
                type,
                // 后台需要[string]类型  
                images: fileList.map((item) => {
                    return item?.response?.data?.url || item.url;
                }),
            },
        }
        if (params.id) {
            // 编辑
            data.id = params.id
            await dispatch(editArticle(data, draft));
        } else {
            // 添加
            await dispatch(addArticle(data, draft));
        }
        message.success('保存成功')
        navigate('/article')
    }
    // 编辑回显
    const [searchParams] = useSearchParams()
    const params = searchParams.get('id')
    const [form] = Form.useForm()
    useEffect(() => {
        const setFormData = async () => {
            if (params) {
                const { title, cover, content, channel_id } = await dispatch(
                    getArticle(params)
                );
                form.setFieldsValue({ title, content, channel_id });
                setType(cover.type);
                setFileList(cover.images.map((item) => ({ url: item })));
            } else {
                setType(1);
                setFileList([]);
                form.resetFields();
            }
        };
        setFormData();
    }, [])
    // 存入草稿
    const saveDarft = async () => {
        try {
            const values = await form.validateFields()
            onFinish(values, true)
        } catch (e) { }
    }
    return (
        <div className={styles.root}>
            <Card
                title={
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/article">内容管理</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{params ? '修改文章' : '发布文章'}</Breadcrumb.Item>
                    </Breadcrumb>
                }
            >
                <Form form={form} labelCol={{ span: 4 }} onFinish={onFinish}>
                    <Form.Item
                        label="文章标题："
                        name="title"
                        rules={[{ required: true, message: "请输入文章标题" }]}
                    >
                        <Input placeholder="请输入文章标题" style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label="所属频道："
                        name="channel_id"
                        rules={[{ required: true, message: "请选择所属频道" }]}
                    >
                        <Channel width={400} />
                    </Form.Item>
                    <Form.Item label="文章封面：">
                        {/* 一个FormItem只能有一个元素 */}
                        <Form.Item style={{ marginBottom: 0 }}>
                            <Radio.Group value={type} onChange={onTypeChange}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {/* 这个位置放Upload组件 */}
                        {type > 0 ? (
                            <div style={{ marginTop: 16 }}>
                                <Upload
                                    name="image"
                                    listType="picture-card"
                                    action="http://geek.itheima.net/v1_0/upload"
                                    fileList={fileList}
                                    onPreview={() => { }}
                                    onChange={onUploadChange}
                                >
                                    {fileList.length < type ? (
                                        <div>
                                            <PlusOutlined />
                                            <div style={{ marginTop: 8 }}>Upload</div>
                                        </div>
                                    ) : null}
                                </Upload>
                            </div>
                        ) : null}
                    </Form.Item>
                    <Form.Item
                        label="文章内容："
                        name="content"
                        initialValue=""
                        wrapperCol={{ span: 16 }}
                        rules={[{ required: true, message: "请输入文章内容" }]}
                    >
                        <ReactQuill placeholder="请输入文章内容" />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button type="primary" htmlType='submit'>{params ? '修改文章' : '发布文章'}</Button>
                            <Button onClick={saveDarft}>存入草稿</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}
export default Publish