$(function() {
    getHero()
    deleteHero()
    findHero()
})


// 展示英雄信息
function getHero() {
    $.ajax({
        type: 'GET',
        url: '/find',
        data: null,
        success: function(result) {
            // console.log(result)
            let heroStr = template('hero', result)
            $('tbody').html(heroStr)
        }
    })
}

// 删除英雄
function deleteHero() {
    $('tbody').on('click', '.btn-danger', function() {
        let id = $(this).attr('id')
            // console.log(id)
        $.ajax({
            type: 'PUT',
            url: '/delete',
            data: {
                id: id
            },
            success: function(results) {
                // console.log(results)
                if (results.code == 200) {
                    getHero()
                }
            }
        })
    })
}

// 查找英雄
function findHero() {
    $('.btn-default').on('click', function(e) {
        e.preventDefault();
        let hname = $('.form-control').val()
        $.ajax({
            type: 'GET',
            url: '/findhero',
            data: { hname: hname },
            success: function(result) {
                // console.log(result)
                if (result.code == 200) {
                    let heroStr = template('hero', result)
                    $('tbody').html(heroStr)
                }
                if (result.code == 500) {
                    getHero()
                }
            }
        })
    })
}