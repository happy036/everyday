const { httpcode } = require('./httpcode')
import { Toast } from 'vant';
export default function ({ $axios, store, redirect }, inject) {
    // 请求拦截
    $axios.onRequest(config => {
        if (store.state.token) {
            // 后端有开启JWT校验，前端调用接口
            $axios.setHeader('Authorization', `Bearer ${store.state.token}`)
        }
        return config
    })
    // 响应拦截
    $axios.onResponse(res => {
        // console.log(res.data, 'res')
        // 服务端响应的状态码
        const { status, message } = res.data
        // 接口操作失败
        if (!status) {
            Toast(message)
        }
    })
    // 错误拦截
    $axios.onError(error => {
        // http错误码
        const code = parseInt(error.response && error.response.status)
        // 提示错误信息
        Toast(httpcode[code])
        // 错误处理
        if (code == 404) {
            redirect('404')
        } else if (code == 401) {//没有权限访问接口
            redirect('/my/login')
        }
    })

    // 封装请求方法
    let requestMethod = {}
    // const arr = ['get', 'post', 'delete', 'put']
    const arr = ['$get', '$post', '$delete', '$put']
    arr.forEach(method => {
        // console.log(111)
        // let paramsOrData = method == 'get' || method == 'delete' ? 'params' : 'data'
        // // 请求方法
        // requestMethod[method] = (url, data) => {
        //     return $axios({
        //         method,
        //         url,
        //         [paramsOrData]: data
        //     })
        // }
        // 请求方法
        requestMethod[method] = (url, data) => {
            return $axios[method](url, data)
        }
    })
    inject('request', requestMethod)
}