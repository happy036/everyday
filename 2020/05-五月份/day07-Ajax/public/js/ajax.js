/**
 * 
 * @param {string} type 请求方式（GET POST PUT DELETE）
 * @param {string} url  请求地址
 * @param {string} data 请求数据
 * @param {function} success 请求成功后的回调函数
 */

// function ajax(type, url, data, success) {
//     //实例化xhr对象
//     let xhr = new XMLHttpRequest()
//         //设置请求行 如果是get请求url+"?"+data 如果不是就是url
//     if (type.toLowerCase() == 'get') {
//         url = url + '?' + data
//         data = null
//     }
//     xhr.open(type, url)
//         //如果是post设置请求头
//     if (type.toLowerCase() == 'post') {
//         xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded")
//     }
//     //发送请求数据
//     xhr.send(data)
//         //监听并处理响应
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             success(xhr.responseText)
//         }
//     }
// }


// function ajax(type, url, data, success) {
//     //实例化xhr对象
//     let xhr = new XMLHttpRequest()
//         //设置请求行 如果是get请求url+"?"+data 如果不是就是url
//     if (type == 'get') {
//         url = url + "?" + data
//         data = null
//     }
//     xhr.open(type, url)
//         //如果是post设置请求头
//     if (type.toLowerCase() == 'post') {
//         xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded")
//     }
//     //发送请求数据
//     xhr.send(data)
//         //监听并处理响应
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             success(xhr.responseText)
//         }
//     }
// }

// function ajax(type, url, data, success) {
//     //实例化xhr对象
//     let xhr = new XMLHttpRequest()
//         //设置请求行 如果是get请求url+"?"+data 如果不是就是url
//     if (type == 'get') {
//         url = url + "?" + data
//         data = null
//     }
//     xhr.open(type, url)
//         //如果是post设置请求头
//     if (type.toLowerCase() == 'post') {
//         xhr.setRequestHeader('Content-Type', "application/x-www-form-urlencoded")
//     }
//     //发送请求数据
//     xhr.send(data)
//         //监听并处理响应
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             success(xhr.responseText)
//         }
//     }
// }