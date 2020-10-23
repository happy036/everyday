$(function() {
    show()
})

function show() {
    $.ajax({
        type: 'GET',
        url: '/show',
        data: null,
        success: function(data) {
            console.log(data)
            let htmlStr = template('all', data)
            $('table').html(htmlStr)
        }
    })
}