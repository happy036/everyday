$(document).ready(function() {
    findGuest()
})

//查找留言
function findGuest() {
    //使用jquery的ajax方法，发起ajax请求
    $.ajax({
        type: 'GET',
        url: '/findGuest',
        data: null,
        success: function(data) {
            let htmlStr = ""
            for (let i = 0; i < data.length; i++) {
                htmlStr += `
                <li class="media" data-time="${data[i].created}">
                <img class="mr-3 " src="./image/avatar.png" alt="${data[i].name}">
                <div class="media-body">
                  <h4>${data[i].name}</h4>
                  <p>${data[i].content}</p>
                 </div>
               </li>`
            }
            $('#messages').html(htmlStr)
        }
    })
}