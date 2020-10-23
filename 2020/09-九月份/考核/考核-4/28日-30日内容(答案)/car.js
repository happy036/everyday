// 数据
var datas = [{
        pName: '牛奶',
        src: './uploads/01.jpg',
        price: 10,
        count: 1
    },
    {
        pName: '三只松鼠',
        src: './uploads/02.jpg',
        price: 30,
        count: 1
    },
    {
        pName: '蓝牙播放器',
        src: './uploads/03.jpg',
        price: 100,
        count: 1
    },
    {
        pName: '大米',
        src: './uploads/04.jpg',
        price: 50,
        count: 1
    },
    {
        pName: '路由器',
        src: './uploads/05.jpg',
        price: 110,
        count: 1
    },
    {
        pName: '罐头',
        src: './uploads/06.jpg',
        price: 20,
        count: 1
    }
];
// 【功能1：生成表格】
$(function () {


    let showData = function (arr) {
        $('tbody').innerHTML = ""
        // 声明一个空字符串
        let tableStr = ''
        arr.forEach((value, index, array) => {
            tableStr += `
            <tr>
            <td>
              <input type="checkbox">
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
                <input type="text" readonly value="${value.count}">
                <a href="javascript:" class="add">+</a>
              </div>
            </td>
            <td>
              ${value.price * value.count}
            </td>
            <td>
              <a href="javascript:" class="del">删除</a>
            </td>
          </tr>
            `
        })
        $('tbody').html(tableStr)
    }
    showData(datas)
    // 【功能2：全选→点击thead中的复选框时，tbody中的复选框同步变化】
    $('input#all').click(function () {
        $('tr input[type="checkbox"]').prop('checked', $(this).prop('checked'));
    })
    // 【功能3：控制全选→点击tbody中的某一个复选框，控制thead中的复选框是否选中】\
    let arr = $('tr input[type="checkbox"][id!=all]');
    $('tr input[type="checkbox"][id!=all]').click(function () {
        arr.each(function (i) {
            $('input#all').prop('checked', true);
            if (!arr.eq(i).prop('checked')) {
                $('input#all').prop('checked', false)
                return false
            }
        })
    })

    // 【功能4：封装计算选中的总数量和总价格】



    let getAll = function () {
        let totalCount = 0;
        let totalPrice = 0;
        // 1循环遍历商品 
        $('tr input[type="checkbox"][id!=all]').each(function () {
            // 1.1判断是否被选中 
            if (this.checked) {
                // 获取每个商品的数量
                eCount = Number($(this).parent().next().next().next().children('div').children('input[type="text"]').val())
                console.log('这是单个数量' + eCount)
                // 获取每个商品的单价
                dPrice = $(this).parents().next().next().html().split('￥')[0];
                //用totalCount接收eCount
                totalCount += eCount
                // 用totalPrice接收每个商品的小计 
                totalPrice += eCount * dPrice
                console.log('这是总数量' + totalCount);
                console.log('这是总价格' + totalPrice);
            }

        })
        $("#totalCount").html(totalCount)
        $(".total-price").html(totalPrice)
        totalCount = 0;
    }



    // 当单选框被点击时 判断是否是选中状态 
    $('tr input[type="checkbox"][id!=all]').click(function () {
        getAll()
    })
    // 全选
    $('#all').click(function () {
        getAll()
    })


    // 【功能5：点击加按钮实现数量递增】
    $('tr .add').click(function () {
        $(this).parent().parent().siblings('td').children('input[type="checkbox"]').prop('checked', true)
        // 把数量给num变量
        let num = $(this).prev('input').val();
        // num++
        num++;
        // 加完后把值传回去
        $(this).prev('input').val(num);
        // 计算该商品的总价格 数量*单价
        // 获取该商品的单价
        let dPrice = $(this).parent().parent().prev('td').html().split('￥')[0]
        $(this).parent().parent().next('td').html(`${num * dPrice}`)
        if ($('tr input[type="checkbox"][id!=all]:checked').length == $('tbody > tr').length) $('input#all').prop('checked', true);
        getAll()
    })

    // 【功能6：点击减按钮实现数量递减】
    $('tr .reduce').click(function () {
        $(this).parent().parent().siblings('td').children('input[type="checkbox"]').prop('checked', true)
        // 把数量给num变量
        let num = $(this).next('input').val();
        // num--
        num--;
        // 最小只能是1
        if (num < 1) num = 1;
        // 减完后把值传回去
        $(this).next('input').val(num);
        // 计算该商品的总价格 数量*单价
        // 获取该商品的单价
        let dPrice = $(this).parent().parent().prev('td').html().split('￥')[0]
        $(this).parent().parent().next('td').html(`${num * dPrice}`)
        if ($('tr input[type="checkbox"][id!=all]:checked').length == $('tbody > tr').length) $('input#all').prop('checked', true);
        getAll()
    })
    // 【功能7：删除单项】
    $('.del').click(function () {
        $(this).parents('tr').remove()
    })
    // 【功能8：删除所选项】
    $('.del-all').click(function () {
        $('tr input[type="checkbox"][id!=all]:checked').parents('tr').remove();
    })
    // 【功能9：清理购物车】
    $('.clear').click(function () {
        $('tbody tr').remove()
    })
})