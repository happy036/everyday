// let $ = {
//     /**
//      * @param {Object} dataObj 前端给后端传的数据对象
//      */

//     param: function(dataObj) {
//         // 现在是''
//         // 未来是 'key=value&key1=value1'
//         let dataStr = ''
//         for (let k in dataObj) {
//             dataStr += k + '=' + dataObj[k] + '&'
//         }
//         dataStr = dataStr.slice(0, -1)
//         return dataStr
//     },
//     ajax: function(options) {
//         // 请求方式 如果传参数 那么就是传的 如果发现没有传参数那么就是GET默认值
//         let type = options.type || 'GET'
//             // 请求地址
//         let url = options.url || ""
//             // 请求数据
//         let data = this.param(options.data || {})
//             // 成功时的回调函数
//         let success = options.success
//             // 1.实例化xhr对象
//         let xhr = new XMLHttpRequest();

//         // 2.设置请求行 如果是get请求 url+'?'+data 如果不是 就是url
//         if (type == 'GET') {
//             url = url + '?' + data;
//             data = null;
//         }
//         xhr.open(type, url);

//         // 如果是POST那么要设置请求头
//         if (type == 'POST') {
//             xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         }

//         // 3.发送请求数据
//         xhr.send(data);
//         // 4.监听并处理响应
//         xhr.onreadystatechange = function() {
//             if (xhr.status == 200 && xhr.readyState == 4) {
//                 success(xhr.responseText);
//             }
//         }
//     }
// }

// let $ = {
//     /**
//      * @param {Object} dataObj 前端给后端传的数据对象
//      */

//     param: function(dataObj) {
//         // 现在是''
//         // 未来是 'key=value&key1=value1'
//         let dataStr = ''
//         for (let k in dataObj) {
//             dataStr += k + '=' + dataObj[k] + '&'
//         }
//         dataStr = dataStr.slice(0, -1)
//         return dataStr
//     },
//     ajax: function(options) {
//         // 请求方式 如果传参数 那么就是传的 如果发现没有传参数那么就是GET默认值
//         let type = options.type || 'GET'
//             // 请求地址
//         let url = options.url || ""
//             // 请求数据
//         let data = this.param(options.data || {})
//             // 成功时的回调函数
//         let success = options.success
//             // 1.实例化xhr对象
//         let xhr = new XMLHttpRequest();

//         // 2.设置请求行 如果是get请求 url+'?'+data 如果不是 就是url
//         if (type == 'GET') {
//             url = url + '?' + data;
//             data = null;
//         }
//         xhr.open(type, url);

//         // 如果是POST那么要设置请求头
//         if (type == 'POST') {
//             xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         }

//         // 3.发送请求数据
//         xhr.send(data);
//         // 4.监听并处理响应
//         xhr.onreadystatechange = function() {
//             if (xhr.status == 200 && xhr.readyState == 4) {
//                 success(xhr.responseText);
//             }
//         }
//     }
// }


// let $ = {
//     /**
//      * @param {Object} dataObj 前端给后端传的数据对象
//      */

//     param: function(dataObj) {
//         // 现在是''
//         // 未来是 'key=value&key1=value1'
//         let dataStr = ''
//         for (let k in dataObj) {
//             dataStr += k + '=' + dataObj[k] + '&'
//         }
//         dataStr = dataStr.slice(0, -1)
//         return dataStr
//     },
//     ajax: function(options) {
//         // 请求方式 如果传参数 那么就是传的 如果发现没有传参数那么就是GET默认值
//         let type = options.type || 'GET'
//             // 请求地址
//         let url = options.url || ""
//             // 请求数据
//         let data = this.param(options.data || {})
//             // 成功时的回调函数
//         let success = options.success
//             // 1.实例化xhr对象
//         let xhr = new XMLHttpRequest();

//         // 2.设置请求行 如果是get请求 url+'?'+data 如果不是 就是url
//         if (type == 'GET') {
//             url = url + '?' + data;
//             data = null;
//         }
//         xhr.open(type, url);

//         // 如果是POST那么要设置请求头
//         if (type == 'POST') {
//             xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//         }

//         // 3.发送请求数据
//         xhr.send(data);
//         // 4.监听并处理响应
//         xhr.onreadystatechange = function() {
//             if (xhr.status == 200 && xhr.readyState == 4) {
//                 success(xhr.responseText);
//             }
//         }
//     }
// }