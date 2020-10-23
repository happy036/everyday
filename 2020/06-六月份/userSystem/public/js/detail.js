$(document).ready(function() {
    let url = new URLSearchParams(location.search).get('id')
    getDetaiDate(url)
})

function getDetaiDate(id) {
    $.get(`/api/detail?id=${id}`, null, function(result) {
        // console.log(result)
        result.data.publishDate = moment(result.data.publishDate).format('YYY-MM-DD')
        let articleStr = template('article-templ', result.data)
        $('.container').prepend(articleStr)
    })
}