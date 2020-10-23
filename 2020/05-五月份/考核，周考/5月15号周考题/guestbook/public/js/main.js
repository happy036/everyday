$(document).ready(function() {
    show()
    $('#btn_send').on('click', function() {
        let formcon = $('#form').serialize()
        add(formcon)
        $('#txt_name').val('')
        $('#txt_content').val('')
    })
})

function show() {
    $.ajax({
        type: 'GET',
        url: '/showtime',
        data: null,
        success: function(data) {
            let htmlStr = template('showl', {
                list: data
            })
            $('#messages').html(htmlStr)
        }
    })
}

function add(formcon) {
    $.ajax({
        type: 'POST',
        url: '/addshow',
        data: formcon,
        success: function(data) {
            if (data.code == 200) {
                show()
            }
        }
    })
}