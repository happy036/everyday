/**
 * 封装GET、POST、PUT、DELETE方法
 */
// 引入config.js
import featch from "./featch";
import { baseHost } from "../../config";
// 开发环境 development 上线环境 production
const env = process.env.NODE_ENV
let serverURL = "";

/**
 * @method getURL 获取请求地址
 *
 * @param {String} type [请求 地址环境类型]
 */
const getURL = type => {
    switch (env) {
        case "production":
            serverURL = baseHost[type].pro_host;
            break;
        case "development":
            serverURL = baseHost[type].dev_host;
            break;
        case "testing":
            serverURL = baseHost[type].test_host;
            break;
    }

    return serverURL;
};
export const httpPost = async (url, payload, type = 'API1') => {
    try {
        // 设置基准地址
        serverURL = getURL(type)
        featch.defaults.baseURL = serverURL;
        const response = await featch.post(`${url}`, payload);
        // 获取响应
        const result = response.data
        return result
    } catch (err) {
        throw new Error(err)
    }
}