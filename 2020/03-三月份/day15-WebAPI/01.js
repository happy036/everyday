//获取元素
let slider = document.querySelector('.slider')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
    //获取窗口宽度
let sliderWidth = slider.offsetWidth
    //声明计算器
let num = 0
let ul = document.querySelector('ul')
let ol = document.querySelector('ol')
let firstLi = document.querySelector('ul li:first-child')
ul.appendChild(firstLi.cloneNode(true))
ul.style.width = ul.children.length * sliderWidth + "px"

//1、鼠标经过，左右按钮显示，离开隐藏
slider.addEventListener('mouseenter', function() {
    prev.style.display = "block"
    next.style.display = "block"
})

slider.addEventListener('mouseleave', function() {
    prev.style.display = "none"
    next.style.display = "none"
})

//2、点击右箭头，图片往左走，点击一次，走一张图片  无缝的轮播
next.addEventListener("click", function() {
    num++
    if (num == ul.children.length - 1) {
        ul.style.left = 0
        num = 0
    }
    animate(ul, {
        left: -num * sliderWidth
    })

})


//3、点击左箭头，图片往右走，点击一次，走一张图片，无缝轮播
prev.addEventListener('click', function() {
    if (num == 0) {
        num = ul.children.length - 1
        ul.style.left = -num * sliderWidth + "px"
    }
    num--
    animate(ul, {
        left: -num * sliderWidth
    })
})

//点击小圆点导航，轮播图移动到对应的图片
for (let i = 0; i < ul.children.length - 1; i++) {
    let li = document.createElement('li')
    li.dataset.index = i
    if (i == 0) {
        li.classList.add('active')
    }
    ol.appendChild(li)
    li.addEventListener('click', function() {
        for (let j = 0; j < ol.children.length; j++) {
            ol.children[j].classList.remove('active')
        }
        this.classList.add('active')
        let index = this.dataset.index
        animate(ul, {
            left: -index * sliderWidth
        })
    })
}