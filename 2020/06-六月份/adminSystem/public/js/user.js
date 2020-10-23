$(function() {
    // 获取用户第一页数据
    getUsers()
})

function getUsers(pagenum, pagesize) {
    $.ajax({
        type: 'GET',
        // /user/findAll 获取所有
        // /user/findOne 获取一个
        url: '/user/findAll',
        data: {
            pageNum: pagenum || 1,
            pageSize: pagesize || 5
        },
        success: function(result) {
            // console.log(result)
            let tableStr = template('table_temp1', result.data)
            $('tbody').html(tableStr)
            let pageStr = template('pagination_temp1', result.data)
            $('.pagination').html(pageStr)
        }
    })
}