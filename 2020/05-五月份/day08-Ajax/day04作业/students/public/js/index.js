        //点击事件
        $('.btn>input').on('click', function(e) {
            e.preventDefault();
            //获取表单数据
            let fromData = $('#form').serialize()
                // console.log(fromData)
            addStudent(fromData)
        })

        // 创建函数，向后台发送数据
        function addStudent(fromData) {
            $.ajax({
                type: 'POST',
                url: '/addStudent',
                data: fromData,
                success: function(data) {
                    window.location.href = '/list.html'
                }
            })
        }