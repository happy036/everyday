// 数据
var datas = [
    { pName: '牛奶', src: './uploads/01.jpg', price: 10, count: 1 },
    { pName: '三只松鼠', src: './uploads/02.jpg', price: 30, count: 1 },
    { pName: '蓝牙播放器', src: './uploads/03.jpg', price: 100, count: 1 },
    { pName: '大米', src: './uploads/04.jpg', price: 50, count: 1 },
    { pName: '路由器', src: './uploads/05.jpg', price: 110, count: 1 },
    { pName: '罐头', src: './uploads/06.jpg', price: 20, count: 1 }
];


// 【功能1：生成表格】
function show(arr) {
    let str = ''
    arr.forEach((value) => {
        str += `<tr>
        <td>
          <input type="checkbox" >
        </td>
        <td>
          <img src="${value.src}">
          <p>${value.pName}</p>
        </td>
        <td>
        ${value.price}￥
        </td>
        <td>
          <div class="count-c clearfix">
            <a href="javascript:" class="reduce">-</a>
            <input type="text" value="1">
            <a href="javascript:" class="add">+</a>
          </div>
        </td>
        <td>
        ${value.price}￥
        </td>
        <td>
          <a href="javascript:" class="del">删除</a>
        </td>

      </tr>`
    })
    $('tbody').html(str)
}
show(datas)

// 【功能2：全选→点击thead中的复选框时，tbody中的复选框同步变化】
$('#all').click(function() {
    $('tr input[type="checkbox"]').prop('checked', $(this).prop('checked'))
    sum()
})

// 【功能3：控制全选→点击tbody中的某一个复选框，控制thead中的复选框是否选中】
let list = $('tbody tr input[type="checkbox"]')
$('tbody tr input[type="checkbox"]').click(function() {
    list.each(function(i) {
        $('#all').prop('checked', true)
        if (!list.eq(i).prop('checked')) {
            $('#all').prop('checked', false)
            return false
        }
    })
    sum()
})

// 【功能4：封装计算选中的总数量和总价格】
// sum()

function sum() {
    let count = 0
    let SumMoney = 0
    $('tbody tr input[type="checkbox"]').each(function() {
        if (this.checked) {
            scount = parseInt($(this).parent().next().next().next().children('div').children('input').val())
            sprice = $(this).parents().next().next().html().split('￥')[0]
            count += scount
            SumMoney += scount * sprice
        }
    })
    $('#totalCount').html(count)
    $('.total-price').html(SumMoney)
    count = 0
}

// 【功能5：点击加按钮实现数量递增】
$('.add').click(function() {
    $(this).parent().parent().siblings('td').children('input[type="checkbox"]').prop('checked', true)
    let add = $(this).prev('input').val()
    add++
    $(this).prev('input').val(add)
    let money = $(this).parent().parent().prev('td').html().split('￥')[0]
    $(this).parent().parent().next('td').html(`${add*money}￥`)
    if ($('tbody tr input[type="checkbox"]:checked').length == $('tbody>tr').length) $('#all').prop('checked', true)
    sum()
})

// 【功能6：点击减按钮实现数量递减】
$('.reduce').click(function() {
    $(this).parent().parent().siblings('td').children('input[type="checkbox"]').prop('checked', true)
    let jian = $(this).next('input').val()
    jian--
    if (jian < 1) jian = 1
    $(this).next('input').val(jian)
    let money = $(this).parent().parent().prev('td').html().split('￥')[0]
    $(this).parent().parent().next('td').html(`${jian*money}￥`)
    if ($('tbody tr input[type="checkbox"]:checked').length == $('tbody>tr').length) $('#all').prop('checked', true)
    sum()
})

// 【功能7：删除单项】
$('.del').click(function() {
    $(this).parent().parent().remove()
    sum()
})

// 【功能8：删除所选项】
$('.del-all').click(function() {
    $('tbody tr input[type="checkbox"]:checked').parent().parent().remove()
    sum()
    $('#all').prop('checked', false)
})


// 【功能9：清理购物车】
$('.clear').click(function() {
    $('tbody tr input[type="checkbox"]').parent().parent().remove()
    sum()
    $('#all').prop('checked', false)
})