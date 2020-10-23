// 载入事件
$(document).ready(function() {
    //刚进入页面，渲染页面数据
    // getAll() 

    //刚进入页面，这一组数据的id不传
    getpage(null, 6)
    let loadData = true
    $(document).scroll(function() {
        //获取文档的高度
        let docHeight = $(document).height()

        //获取卷曲的高度
        let winHeight = $(document).height()

        //获取可视区的高度
        let scrollTop = $(document).scrollTop()
        if (docHeight - winHeight - scrollTop < 50) {
            // alert('该请求数据了')
            let last = $('html').attr('last')
            getpage(last, 6)
        }
    })

    //点击删除按钮，删除某一条数据
    $('#members').on('click', '.delete-btn', function(e) {
        e.preventDefault()

        //询问是否要真的删除
        if (!confirm('请问您真的要删除数据吗？')) {
            return false
        }

        //获取数据id
        let id = $(this).data('id')
            //发起ajax请求
        deleteItem(id)
    })
})

//获取所有的数据
// function getAll() {
//     // 发起ajax请求
//     $.ajax({
//         // 请求方式
//         type: 'GET',
//         // 请求地址
//         url: '/api/getAll',
//         // 请求数据
//         data: null,
//         // 请求成功时的回调函数
//         success: function(result) {
//             // 渲染页面
//             // console.log(data);
//             let htmlStr = template('list_templ', {
//                 list: result.data
//             });

//             $('#members').html(htmlStr);
//         }
//     })
// }

//分页获取数据
/**
 * 
 * @param {String} last 取过来的数据数组的最后一个元素的id
 * @param {Number} limit 每次取多少条数据
 */
function getpage(last, limit) {
    $.ajax({
        type: 'GET',
        url: '/api/pagetion',
        data: {
            last: last,
            limit: limit
        },
        success: function(result) {
            //文件渲染
            // console.log(result)
            let last = result.data[result.data.length - 1].id
            $('html').attr('last', last)
            let htmlStr = template('list_templ', {
                list: result.data
            });

            $('#members').html(htmlStr);
        }
    })
}

function deleteItem(id) {
    $.ajax({
        type: 'GET',
        url: "/api/delete",
        data: {
            id: id
        },
        success: function(data) {
            if (data.code == 200) {
                getAll()
            }
        }
    })
}