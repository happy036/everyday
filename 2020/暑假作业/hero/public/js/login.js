$(function() {
    // form标签的id
    $("#loginForm").bootstrapValidator({
            live: 'enabled',
            submitHandler: '#logBtn',
            fields: {
                username: {
                    validators: {
                        callback: {
                            message: "用户名或密码错误"
                        }
                    }
                },
                password: {
                    // 关于password的校验器
                    validators: {
                        callback: {
                            message: "用户名或密码错误"
                        }
                    }
                }
            }
        })
        // 当校验成功后 发起ajax请求
        .on('success.form.bv', function(e) {
            // 为了阻止默认提交
            e.preventDefault();
            // 就是 form表单
            var $form = $(e.target);
            $.ajax({
                type: 'post',
                url: '/login',
                data: $form.serialize(),
                success: function(result) {
                    console.log(result)
                        // 回显错误信息
                    if (result.code == 500) {
                        $form.data("bootstrapValidator").updateStatus("username", "INVALID", 'callback');
                        $form.data("bootstrapValidator").updateStatus("password", "INVALID", 'callback');
                    }
                    if (result.code == 200) {
                        location.href = '/'
                    }
                }
            })
        });
});