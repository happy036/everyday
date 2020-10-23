$(function() {
    // console.log(111)
    getUser()

    // 删除用户
    $('tbody').on('click', '.delete-btn', function() {
        let userid = $(this).data('id')
        $.ajax({
            type: 'delete',
            url: '/deleteUser',
            data: {
                id: userid
            },
            beforeSend: function() {
                if (!confirm('您确定要删除这条数据吗')) {
                    return false
                }
            },
            success: function(data) {
                if (data.code == 200) {
                    getUser()
                }
            }
        })
    })

    // 修改用户
    $('tbody').on('click', '.modify-btn', function() {
        // 获取用户id
        let userid = $(this).data('id')
        $.ajax({
            type: 'post',
            url: '/edit',
            data: {
                id: userid
            },
            success: function(data) {
                if (data.code == 200) {
                    console.log(data)
                        // console.log(data.obj[0].uname)
                    $('#modify-form input[name="username"]').val(data.obj.uname)
                    $('#modify-form input[name="password"]').val(data.obj.password)
                    $('#modify-form input[name="age"]').val(data.obj.age)
                    $('#modify-form input[name="email"]').val(data.obj.email)
                    $('#modify-form input[name="hobbies"]').val(data.obj.hobbies)
                    $('#modify-form input[name="id"]').val(data.obj.uid)
                        // 显示模态框
                    $('#modify-modal').modal('show')
                }
            }
        })
    })

    // 修改用户
    $('.save-btn').on('click', function() {
        let formdata = $('#modify-form').serialize()
            // console.log(formdata)
        $.ajax({
            type: 'post',
            url: '/upadatuser',
            data: formdata,
            success: function(data) {
                // console.log(data)
                if (data.code == 200) {
                    $('#modify-modal').modal('hide')
                    getUser()
                }
            }
        })
    })
})

function getUser() {
    $.ajax({
        type: 'get',
        url: '/show',
        data: null,
        success: function(result) {
            // console.log(result)
            let userstr = template('usersShow', result)
            $('tbody').html(userstr)
        }
    })
}