$(function() {
    // form标签的id
    $("#login").bootstrapValidator({
            // 什么时候校验
            live: 'enabled',
            // 提交按钮
            submitButtons: "#loginButton",
            fields: {
                email: {
                    // 关于email的校验器
                    validators: {
                        // 不能为空
                        callback: {
                            message: "用户不存在"
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
                    if (result.code == 500) {
                        $form.data("bootstrapValidator").updateStatus("email", "INVALID", 'callback');
                        $form.data("bootstrapValidator").updateStatus("password", "INVALID", 'callback');
                    }
                    if (result.code == 200) {
                        location.href = '/posts'
                    }
                }
            })
        });
});