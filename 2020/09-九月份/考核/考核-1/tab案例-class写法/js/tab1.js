let that
class Tab {
    constructor(id) {
        that = this
        this.tab = document.querySelector(id)
        this.list = this.tab.querySelectorAll('li')
        this.sections = this.tab.querySelectorAll('section')
        this.addBtn = this.tab.querySelector('.tabadd')
        this.ul = this.tab.querySelector('ul')
        this.article = this.tab.querySelector('article')
        this.init()
    }
    init() {
        this.updateNode()
        this.addBtn.onclick = this.addTab
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].index = i
            this.list[i].onclick = this.togleTab
            this.rmBtn[i].onclick = this.removeTab
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab
        }
    }
    updateNode() {
        this.list = this.tab.querySelectorAll('li')
        this.sections = this.tab.querySelectorAll('section')
        this.rmBtn = this.tab.querySelectorAll('.icon-guanbi')
        this.spans = this.tab.querySelectorAll('.fisrstnav li span:first-child')
    }
    clearclass() {
        for (let j = 0; j < this.list.length; j++) {
            this.list[j].className = ''
            this.sections[j].className = ''
        }
    }
    togleTab() {
        that.clearclass()
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }

    addTab() {
        that.clearclass()
        let li = '<li class="liactive"><span>测试</span><span class="iconfont icon-guanbi"></span></li>'
        that.ul.insertAdjacentHTML('beforeend', li)
        let section = '<section class="conactive">测试...</section>'
        that.article.insertAdjacentHTML('beforeend', section)
        that.init()
    }
    removeTab(e) {
        let index = e.target.parentNode.index
        e.stopPropagation()
        that.list[index].remove()
        that.sections[index].remove()
        if (document.querySelector('.liactive')) return
        index--
        that.list[index] && that.list[index].click()
    }
    editTab() {
        let str = this.innerHTML
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text" />'
        let input = this.children[0]
        input.value = str
        input.select()
        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function(e) {
            if (e.keyCode == 13) {
                this.blur()
            }
        }
    }
}
new Tab('#tab')