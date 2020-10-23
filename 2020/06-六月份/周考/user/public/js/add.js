$(function() {
    $('.btn-primary').on('click', function() {
        let formData = $('form').serialize()
        $.ajax({
            type: 'POST',
            url: '/add',
            data: formData,
            success: function(data) {
                console.log(data)
            }
        })
    })
})