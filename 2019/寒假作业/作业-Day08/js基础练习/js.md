## js简答题
1. 什么是单向分支、双向分支和多向分支？

单向分支：if()
双向分支：if(){}else{}
多向分支：if(){}else if(){}else if(){}

2. 三元运算符简化的是什么？简化后是什么？

双向分支;A?B:C 

3. switch中的关键字有哪些？

break,default,case

4. switch中的 `default` 的作用是什么？

 default 关键词规定不存在 case 匹配时所运行的代码


## js编程题
1. 让用户输入一个数字，实现判断该数是奇数还是偶数并告诉用户

    ```js
        var num = +prompt("请您输入数字")
        if (num % 2 == 0) {
            alert("该数是偶数")
        } else {
            alert("该数是奇数")
        }
    ```
2. 让用户输入任意内容，随后弹出对应内容

    ```js
        var num = prompt("请输入任意内容")
        alert(num)
    ```
3. 让用户输入一个数字，判断该数字是否大于10，并告知用户结果，如果输入的非数字告知用户输入错误

    ```html
    <script>
        var num = +prompt("请输入一个数字")
        if (isNaN(num) == false) {
            if (num > 10) {
                alert("该数字大于10")
            } else {
                alert("该数字小于10")
            }
        } else {
            alert("您输入错误")
        }
    </script>
    ```

4. 让用户输入年龄，并判断该用户年龄是否成年，如果成年并告知：恭喜你已成年，如果还未成年需告知用户还有多少年就成年了，如果用户输入的不是年龄数字提示输入错误

    ```html
    <script>
        var num = +prompt("请输入您的年龄")
        if (isNaN(num) == false) {
            if (num >= 18) {
                alert("恭喜你已成年")
            } else {
                alert(`你还差${18-num}岁成年`)
            }
        } else {
            alert("输入错误")
        }
    </script>
    ```
