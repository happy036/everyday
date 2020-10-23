/**
 * 
 * @param {Object} options ajax请求的请求方式|请求地址|请求数据|回调函数
 */
// function ajax(options) {
//     //请求方式
//     let type = options.type
//         //请求地址
//     let url = options.url
//         //请求数据
//     let data = options.data
//         //成功时的回调函数
//     let success = options.success
//         //实例化xhr对象
//     let xhr = new XMLHttpRequest()
//         //设置请求行如果是get请求 url+'?'+data 如果不是就是url
//     if (type == 'GET') {
//         url = url + "?" + data
//         data = null
//     }
//     xhr.open(type, url)
//         //如果是POST 那么要设置请求头
//     if (type == 'POST') {
//         xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded")
//     }
//     //发送请求数据
//     xhr.send(data)
//         //监听并处理响应
//     xhr.onreadystatechange = function() {
//         if (xhr.status == 200 && xhr.readyState == 4) {
//             success(xhr.responseText)
//         }
//     }
// }


// function ajax(options) {
//     //请求方式
//     let type = options.type
//         //请求地址
//     let url = options.url
//         //请求数据
//     let data = options.data
//         //成功时的回调函数
//     let success = options.success
//         //实例化xhr对象
//     let xhr = new XMLHttpRequest()
//         //设置请求行如果是get请求 url+'?'+data 如果不是就是url
//     if (type == 'GET') {
//         url = url + "?" + data
//         data = null
//     }
//     xhr.open(type, url)
//         //如果是POST 那么要设置请求头
//     if (type == 'POST') {
//         xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded")
//     }
//     //发送请求数据
//     xhr.send(data)
//         //监听并处理响应
//     xhr.onreadystatechange = function() {
//         if (xhr.status == 200 && xhr.readyState == 4) {
//             success(xhr.responseText)
//         }
//     }
// }


// function ajax(options) {
//     //请求方式
//     let type = options.type
//         //请求地址
//     let url = options.url
//         //请求数据
//     let data = options.data
//         //成功时的回调函数
//     let success = options.success
//         //实例化xhr对象
//     let xhr = new XMLHttpRequest()
//         //设置请求行如果是get请求 url+'?'+data 如果不是就是url
//     if (type == 'GET') {
//         url = url + "?" + data
//         data = null
//     }
//     xhr.open(type, url)
//         //如果是POST 那么要设置请求头
//     if (type == 'POST') {
//         xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded")
//     }
//     //发送请求数据
//     xhr.send(data)
//         //监听并处理响应
//     xhr.onreadystatechange = function() {
//         if (xhr.status == 200 && xhr.readyState == 4) {
//             success(xhr.responseText)
//         }
//     }
// }