$(function() {
    $('#add-btn').on('click', function() {
        let formdata = $('form').serialize()
        console.log(formdata)
        $.ajax({
            type: 'POST',
            url: '/api/add',
            data: formdata,
            success: function(data) {
                if (data.code == 200) {
                    alert(`用户${data.username}添加成功`)
                    location.href = '/'
                }
            }
        })
    })
})