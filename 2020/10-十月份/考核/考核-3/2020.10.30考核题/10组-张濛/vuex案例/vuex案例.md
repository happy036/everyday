# Vuex自定义案例

功能一：实现页面渲染

功能二：用两种方法实现不传参数点击更改姓名和传参数点击更改姓名

功能三：点击按钮年龄增加

功能四：点击开始自增按钮，数字开始自增，点击停止自增按钮，数字停止自增

## HTML--页面

```html
<div id="app" class="one">
    <h2>我叫  ，今年  岁</h2>
    <div>
      <span>请输入一个名字:</span>
      <input type="text"/>
    </div>
    <p>方法一实现更改姓名</p>
    <button>不传参换名字</button>
    <button>传参换名字</button>
    <p>方法二实现更改姓名</p>
    <button>不传参换名字</button>
    <button value="">传参换名字</button>
    <p>点击增加年龄</p>
    <button>点击增加年龄</button>
    <p>点击开始按钮数字自增，点击停止按钮数字停止增加</p>
    <p>自动变更的数字</p>
    <button>开始自增</button>
    <button>停止自增</button>
  </div>
```

## css

```css
.one {
  text-align: center;
}
button {
  margin: 0 5px;
}
```



