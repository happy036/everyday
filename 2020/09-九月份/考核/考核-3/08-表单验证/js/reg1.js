window.onload = function() {
    let phn = /^1[3|4|5|7|8]\d{9}$/
    let QQ = /^[1-9]\d{4,}$/
    let nc = /^[\u4e00-\u9fa5]{2,8}$/
    let msg = /^\d{6}$/
    let deng = /^[a-zA-Z0-9_-]{6,16}$/
    let phone = document.querySelector('#tel')
    let qq = document.querySelector('#qq')
    let uname = document.querySelector('#nc')
    let msgpwd = document.querySelector('#msg')
    let pwd = document.querySelector('#pwd')
    let pwd2 = document.querySelector('#surepwd')
    enen(phone, phn)
    enen(qq, QQ)
    enen(uname, nc)
    enen(msgpwd, msg)
    enen(pwd, deng)

    function enen(ele, rgp) {
        ele.onblur = function() {
            // 判断是否正确
            if (rgp.test(this.value)) {
                this.nextElementSibling.className = 'success'
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
            } else {
                this.nextElementSibling.className = 'error'
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确，请从新输入'
            }
        }
    }

    pwd2.onblur = function() {
        // 判断是否正确
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success'
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 恭喜您输入正确'
        } else {
            this.nextElementSibling.className = 'error'
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次输入的密码不一样请重新输入'
        }
    }
}