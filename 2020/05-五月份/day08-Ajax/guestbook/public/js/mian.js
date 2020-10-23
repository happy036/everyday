// $(document).ready(function() {
//     //创建一个函数，当DOM加载完毕，调用查找留言函数
//     findGuest()

//     //给提交按钮添加点击事件
//     $('#btn_send').on('click', function() {
//         //前端发给后端的数据 key=value&key=value
//         let fromData = $('#form').serialize()
//             //创建一个函数，当点击按钮时调用添加留言函数
//         addGuest(fromData)
//     })
// })

// //查找留言
// function findGuest() {
//     $.ajax({
//         type: 'GET',
//         url: '/findGuest',
//         data: null,
//         success: function(data) {
//             //把数据渲染到页面上
//             let htmlStr = ""
//             for (let i = 0; i < data.length; i++) {
//                 htmlStr += `
//                 <li class="media" data-time="${data[i].created}">
//           <img class="mr-3 " src="./image/avatar.png" alt="${data[i].name}">
//           <div class="media-body">
//             <h4>${data[i].name}</h4>
//             <p>${data[i].content}</p>
//            </div>
//          </li>`
//             }
//             $('#messages').html(htmlStr)
//         }
//     })
// }

// //添加留言
// /**
//  * 
//  * @param {string} param  前端给后端的数据
//  */
// function addGuest(param) {
//     //发起ajax请求
//     $.ajax({
//         type: 'POST',
//         url: '/addGuest',
//         data: param,
//         success: function(data) {
//             if (data.code == 200) {
//                 findGuest()
//             }
//         }
//     })
// }




// $(document).ready(function() {
//     //创建一个函数，当DOM加载完毕，调用查找留言函数
//     findGuest()

//     //给提交按钮添加点击事件
//     $('#btn_send').on('click', function() {
//         //前端发给后端的数据 key=value&key=value
//         let fromData = $('#form').serialize()
//             //创建一个函数，当点击按钮时调用添加留言函数
//         addGuest(fromData)
//     })
// })

// //查找留言
// function findGuest() {
//     $.ajax({
//         type: 'GET',
//         url: '/findGuest',
//         data: null,
//         success: function(data) {
//             //把数据渲染到页面上
//             let htmlStr = ""
//             for (let i = 0; i < data.length; i++) {
//                 htmlStr += `
//                 <li class="media" data-time="${data[i].created}">
//           <img class="mr-3 " src="./image/avatar.png" alt="${data[i].name}">
//           <div class="media-body">
//             <h4>${data[i].name}</h4>
//             <p>${data[i].content}</p>
//            </div>
//          </li>`
//             }
//             $('#messages').html(htmlStr)
//         }
//     })
// }

// //添加留言
// /**
//  * 
//  * @param {string} param  前端给后端的数据
//  */
// function addGuest(param) {
//     //发起ajax请求
//     $.ajax({
//         type: 'POST',
//         url: '/addGuest',
//         data: param,
//         success: function(data) {
//             if (data.code == 200) {
//                 findGuest()
//             }
//         }
//     })
// }




// $(document).ready(function() {
//     //创建一个函数，当DOM加载完毕，调用查找留言函数
//     findGuest()

//     //给提交按钮添加点击事件
//     $('#btn_send').on('click', function() {
//         //前端发给后端的数据 key=value&key=value
//         let fromData = $('#form').serialize()
//             //创建一个函数，当点击按钮时调用添加留言函数
//         addGuest(fromData)
//     })
// })

// //查找留言
// function findGuest() {
//     $.ajax({
//         type: 'GET',
//         url: '/findGuest',
//         data: null,
//         success: function(data) {
//             //把数据渲染到页面上
//             let htmlStr = ""
//             for (let i = 0; i < data.length; i++) {
//                 htmlStr += `
//                 <li class="media" data-time="${data[i].created}">
//           <img class="mr-3 " src="./image/avatar.png" alt="${data[i].name}">
//           <div class="media-body">
//             <h4>${data[i].name}</h4>
//             <p>${data[i].content}</p>
//            </div>
//          </li>`
//             }
//             $('#messages').html(htmlStr)
//         }
//     })
// }

// //添加留言
// /**
//  * 
//  * @param {string} param  前端给后端的数据
//  */
// function addGuest(param) {
//     //发起ajax请求
//     $.ajax({
//         type: 'POST',
//         url: '/addGuest',
//         data: param,
//         success: function(data) {
//             if (data.code == 200) {
//                 findGuest()
//             }
//         }
//     })
// }