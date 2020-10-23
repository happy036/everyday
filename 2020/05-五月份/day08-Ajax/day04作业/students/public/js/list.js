$(document).ready(function() {
    all()
})

function all() {
    $.ajax({
        type: 'GET',
        url: '/listSudents',
        data: null,
        success: function(data) {
            let htmlStr = ""
            for (let i = 0; i < data.length; i++) {
                htmlStr += `<tr>
                <th>${data[i].username}</th>
                <th>${data[i].age}</th>
                <th>${data[i].sex}</th>
                <th>${data[i].email}</th>
                <th>${data[i].hobby}</th>
                <th>${data[i].school}</th>
                <th>${data[i].date}</th>
            </tr>`
            }
            $('table').append(htmlStr);
        }
    })
}