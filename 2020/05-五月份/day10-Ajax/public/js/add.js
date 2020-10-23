$(function() {
    // 1.给图片上传控件添加change事件
    $('#input_avatar').on('change', function() {
        // 2.获取input中的文件对象 xxx.files[0] 
        // 3.创建URL.createObjectURL(oInput.files[0])
        let imgSrc = URL.createObjectURL($(this)[0].files[0]);
        // console.log(imgSrc);
        // 4.赋值
        $('#avatar').attr('src', imgSrc);
    })

    //ajax请求
    //给save添加一个点击事件
    $('#btn_add').on('click', function() {
        //收集数据放到fromData
        let fromData = new FormData()

        fromData.append('name', $('#input_name').val())
        fromData.append('bio', $('#input_bio').val())
        fromData.append('avatar', $('#input_avatar')[0].files[0])

        //发起ajax请求
        $.ajax({
                type: 'POST',
                url: '/api/add',
                data: fromData,
                processData: false,
                contentType: false,
                success: function(result) {
                    if (result.code == 200) {
                        location.href = '/'
                    }
                },
                error: function() {
                    alert('用户添加失败')
                }
            })
            //点击按钮之后以后的操作就不做了
            //解决按钮重复点击的问题
        return false
    })
})