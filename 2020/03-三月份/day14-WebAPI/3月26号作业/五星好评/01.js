function get(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr];
}

function animate(element, targetObj, callback) {
    //清除定时器
    clearInterval(element.timer)
        //状态变量 看看是不是所有的属性 都达到目标位置了 假设都达到了
    let flag = true
        //开启定时器
    element.timer = setInterval(function() {
        for (attr in targetObj) {
            //获取当前值
            let current = parseInt(get(element, attr))
                //获取目标值
            let target = targetObj[attr]
                //算步进
            let step = (target - current) / 10
                //取整
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
                //累加
            current += step
                //赋值
            element.style[attr] = current + "px"
                //停止定时器
            if (current !== target) {
                flag = false
            }
        }
        if (flag == true) {
            //清除定时器
            clearInterval(element.timer)
            callback()
        }
    }, 20)
}