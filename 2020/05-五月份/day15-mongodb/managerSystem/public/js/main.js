$(function() {
    // //显示数据
    // //在打开index.html的时候，显示数据
    // show()
    //显示分页数据
    //刚进入页面要显示第一页数据
    showPage()
    $('.pager').on('click', 'li', function() {
        if (!$(this).hasClass('disabled')) {
            let pagenum = $(this).data('pagenum')
            showPage(pagenum)
        }

    })

    //删除数据
    $('tbody').on('click', '.delete-btn', function() {
        let userId = $(this).data('id')
        $.ajax({
            type: 'DELETE',
            url: '/api/deleteUser',
            data: {
                id: userId
            },
            beforeSend: function() {
                // return false 会阻止发送请求
                if (!confirm('您确定要删除这条数据吗？')) {
                    return false
                }
            },
            success: function(data) {
                if (data.code == 200) {
                    showPage($('html').attr('.data-pagenum'))
                }
            }
        })
    })

    //修改数据
    $('tbody').on('click')
})

// function show() {
//     $.ajax({
//         //请求方式
//         type: 'GET',
//         //请求地址
//         url: '/api/list',
//         //请求数据
//         data: null,
//         //成功时的回调函数
//         success: function(data) {
//             if (data.code == 200) {
//                 let htmlStr = template('list_temp1', data)
//                 $('tbody').html(htmlStr)
//             }
//         }
//     })
// }
/**
 * Name:分页获取数据
 * @param {Number} pageNum 第几页
 * @param {Number} pageSize 一页显示多少条数据
 */
function showPage(pageNum, pageSize) {
    $.ajax({
        type: 'GET',
        url: '/api/getPage',
        data: {
            pageNum: pageNum || 1,
            pageSize: pageSize || 5
        },
        success: function(result) {
            if (result.code == 200) {
                let pageStr = template('pagenation_templ', {
                    pageNum: result.data.pageNum,
                    pageSize: result.data.pageSize,
                    pageToal: Math.ceil(result.data.dataTotal / result.data.pageSize)
                })
                $('html').attr('data-pagenum', result.data.pageNum)
                $('.pager').html(pageStr)
                let listStr = template('list_temp1', result.data)
                $('tbody').html(listStr)
            }
        }
    })
}