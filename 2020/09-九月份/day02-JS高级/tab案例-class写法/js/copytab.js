var that

// 声明类
class Tab {
    constructor(id) {
        that = this

        // 获取元素
        this.tab = document.querySelector(id)
        this.list = this.tab.querySelectorAll('li')
        this.sections = this.tab.querySelectorAll('section')

        // 获取添加按钮
        this.addBtn = this.tab.querySelector('.tabadd')

        // 获取ul
        this.ul = this.tab.querySelector('ul')

        // 获取article
        this.article = this.tab.querySelector('article')

        this.init()
    }
    init() {
        this.updateNode()

        // 给添加按钮绑定点击事件
        this.addBtn.onclick = this.addTab

        // 给每个li添加点击事件
        for (let i = 0; i < this.list.length; i++) {
            // 获取每个li的索引
            this.list[i].index = i

            // 给每个li添加点击事件
            this.list[i].onclick = this.toggleTab
            this.rmBtn[i].onclick = this.removeTab
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab
        }
    }

    // 当元素变化的时候，重新获取元素
    updateNode() {
        this.list = this.tab.querySelectorAll('li')
        this.sections = this.tab.querySelectorAll('section')

        // 获取删除按钮
        this.rmBtn = this.tab.querySelectorAll('.icon-guanbi')
        this.spans = this.tab.querySelectorAll('.fisrstnav li span:first-child')
    }

    // 把li中的liactive类名清除 把section中的conactive类名清除
    clearClass() {
        for (let j = 0; j < this.list.length; j++) {
            this.list[j].className = ''
            this.sections[j].className = ''
        }
    }

    // 切换功能
    toggleTab() {
        // 清除所有类名
        that.clearClass()

        // 点击的元素添加类名
        this.className = 'liactive'

        // 让li对应的那个section显示出来
        that.sections[this.index].className = 'conactive'
    }

    // 添加功能
    addTab() {
        let random = Math.random()
        that.init()
        that.clearClass()

        // 添加一个li
        let li = '<li class="liactive"><span>新选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        that.ul.insertAdjacentHTML('beforeend', li)
        let section = `<section class="conactive">测试中${random}</section>`
        that.article.insertAdjacentHTML('beforeend', section)
    }

    // 删除功能
    removeTab(e) {
        let index = e.target.parentNode.index
        e.stopPropagation()
        that.list[index].remove()
        that.sections[index].remove()
        if (document.querySelector('.liactive')) return
        index--
        that.list[index] && that.list[index].click()
    }

    // 编辑选项卡
    editTab() {
        let str = this.innerHTML
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />'
        let input = this.children[0]
        input.value = str

        // 文本框里的文字处于选定状态
        input.select()
        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function(e) {
            if (e.keyCode === 13) {
                this.blur()
            }
        }
    }
}

new Tab('#tab')