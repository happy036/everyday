# 简答题（注意自己写，从下周开始我会在自习课的时候或者是周三抽查人企业微信写）

1. 目前你所学的请求方式有哪些？区别是什么？(不要直接把百度的粘上来，用自己的话总结)
```js
GET请求,POST请求
GET请求一般用去请求获取数据
POST一般作为发送数据到后台时使用
GET请求也可传参到后台，但是其参数在浏览器的地址栏的url中可见，所以隐私性安全性较差，且参数长度也是有限制的
POST请求传递参数放在Request body中，不会在url中显示，比GET要安全，且参数长度无限制
```

2. 原生的ajax怎么发请求?(get和post的方式都写出来,每行写上注释)
```js
get请求：
//实例化对象
        let xhr = new XMLHttpRequest()
            //设置请求行（请求方式 请求地址）
        xhr.open('GET', '/url')
            //发送请求
        xhr.send(null)
            //监听并处理响应
        xhr.onreadystatechange = function() {
            //显示到页面上
            console.log(xhr.responseText)
        }


post请求：
//实例化对象
        let xhr = new XMLHttpRequest()
            //设置请求行（请求方式 请求地址）
        xhr.open('GET', '/url')
        //请求头
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
            //发送请求数据（在get请求中这个地方写null）
        xhr.send(数据)
            //监听并处理响应
        xhr.onreadystatechange = function() {
            //显示到页面上
            console.log(xhr.responseText)
        }
```

3. jq的ajax的语法是什么?并且写出来目前你用到的属性每个的含义?
```js
$.ajax({
  //请求方式
  type:'get',
  //请求地址
  url:"/reqGet",
  //请求数据
  data:null,
  //成功时的回调函数
  success:function(data){
    console.log(data)
  }
})
```

4. 使用art-template模板引擎的步骤是什么？(用自己的话写，不要直接粘笔记)
```js
1.引入ArtTemplate库
2.在引入所有库之后 创建模板
<script type="text/template"  id="id的名字"></script>
3.使用渲染html = template('模板ID', 对象);
  let htmlStr = template('str_templ', {
        content: title
      });
```

5. art-template模板引擎的语法你知道的有哪些，并且总结出来?
```js
流程控制语句（if else）
{{if value}}
...
{{else if value}}
...
{{else}}
...
{{/if}}
循环遍历语句
{{each name}}
索引：{{$index}}
值：{{$value}}
{{/each}}
```

6. 客户端和服务端的通信过程是怎么样的？
```js
客户端发送请求到服务器,服务器响应,将结果传到客户端
```

7. express怎么开放静态资源?
```js
express.static('虚拟文件前缀'，'路径')
```

8. express怎么读文件和写文件?
```js
//引入fs模块
const fs=require('fs')
//读文件
fs.readFile('路径','编码方式',回调函数)
//写文件
fs.writeFile('路径',写入数据,回调函数)
```

9. JSON对象和JSON字符串是怎么进行相互转换的?
```js
JSON字符串转JSON对象：JSON.parse()
JSON对象转JSON字符串：JSON.stringify()
```

10. form表单怎么的属性有哪些？分别是什么意思？
```js
action：表单要提交的地址
method：以什么方式提交（常见有post，get）
name：规定了input元素的名称。该属性可对提交到服务器后的表单数据进行标志，这样才能使表单元素在提交时传递其值。
```

11. form表单怎么序列化获取值表单的值？
```js
$(form标签的选择器).serialize()
```

12. form表单怎么阻止默认的提交行为?
```js
1.使用button 按钮提交表单的时候，要设置type="button" button在浏览器中默认的类型为submit；
2.e.preventDefault()
```

13. 在客户端怎么由login.html页面跳转到首页index.html?
```js
  window.location.href = "/index.html";
```