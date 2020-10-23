$(function() {
    $('.addbtn').on('click', function() {
        let fromdata = $('form').serialize()
        $.ajax({
            type: 'post',
            url: '/add',
            data: fromdata,
            success: function(result) {
                // console.log(result)
                if (result.code == 200) {
                    location.href = '/'
                }
            }
        })
    })
})