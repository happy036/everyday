// 基础请求地址

// 一般来说 一个项目至少对应一个后端API服务地址,所以需要一个配置文件来粗处这个后端API地址
export const baseHost = {
    API1: {
        // 开发服务器
        dev_host: "http://www.wanlum.com:8888/api/private/v1/",
        // 线上服务器
        prod_host: "http://[ip]:[port]/v[n]/api"
    }
};