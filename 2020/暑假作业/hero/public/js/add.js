$(function() {
    // form标签的id
    $("#add").bootstrapValidator({
            // 什么时候校验
            live: 'enabled',
            // 反馈图标
            feedbackIcons: {
                // 合法的
                valid: 'glyphicon glyphicon-ok',
                // 不合法的
                invalid: 'glyphicon glyphicon-remove',
                // 校验中
                validating: 'glyphicon glyphicon-refresh'
            },
            // 提交按钮
            submitButtons: "#addup",
            fields: {
                name: {
                    validators: {
                        // 不能为空
                        notEmpty: {
                            message: '姓名不能为空'
                        },
                        stringLength: {
                            min: "1",
                            max: "30",
                        }
                    }
                },
                nickname: {
                    validators: {
                        notEmpty: {
                            message: '内容不能为空！'
                        }
                    }
                },
                skill: {
                    validators: {
                        notEmpty: {
                            message: '内容不能为空！'
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
                type: "POST",
                url: "/add",
                data: $form.serialize(),
                success: function(results) {
                    if (results.code == 200) {
                        location.href = "/"
                    }
                }
            })
        });
});