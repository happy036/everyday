## js编程题

 1. 根据要求完成下面操作

    ```js
    1) var a = 1, b = 1
       if (a > b) {
           console.log(a > b);
       } else {
           console.log(a > b);
       }
    // 将上述代码转换为三元运算符，并说明if和else里面的相同代码块有什么不同？
    console.log(a > b ? true : false);
    2) var a = 10,
          b = 11,
          c = [0]
      if (a > b || c) {
          console.log(a > b || c);
      } else {
          console.log(false);
      }
    // 将上述代码转换为三元运算符，并解释说明打印结果
    console.log(a > b || c ? c : false);
    ```

2. 使用 `if分支` 实现判断一个成绩的段位`【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】`

    ```js
       var num =+ prompt('请输入您的成绩')
        if (num >= 90) {
            alert('A')
        } else if (num >= 80) {
            alert('B')
        } else if (num >= 70) {
            alert('C')
        } else if (num >= 60) {
            alert('D')
        } else if (num < 60) {
            alert('E')
        }
    ```

3. 使用 `switch` 分支实现判断一个成绩的段位`【A(>=90)；B(>=80)；C(>=70)；D(>=60)；E(<60)】`

    ```js
        var grade = +prompt("请输入成绩");
        var n = parseInt(grade / 10)
        switch (n) {
            case 10:
            case 9:
                alert("A")
                break;
            case 8:
                alert("B")
                break;
            case 7:
                alert("C")
                break;
            case 6:
                alert("D")
                break;
            default:
                alert("E")
        }
    ```

4. 使用`if分支`通过用户输入的年龄判断是哪个年龄段的人（儿童：年龄＜14；青少年：14<=年龄＜24；青年：24<年龄＜40; 中年：40＜=年龄＜60; 老年：年龄>=60），

    ```js
    var num = + prompt('请输入您的年龄') ;
    if(num >=  60){
    alert("老年");
    }else if(num >= 40 && num < 60){
    alert("中年");
    }else if(num >= 24 && num < 40){
    alert("青年");
    }else if(num >= 14 && num < 24){
    alert("青少年");
    }else if(num < 14){
    alert("儿童");
    ```


5. 获取当前时间，判断今年是否为闰年(判断今年是否为闰年；  能被400整除 或 被4整除但不能被100整除)
   ```js
            var age = +prompt("请输入年份")
        if (age % 400 == 0 || age % 4 && age % 4 != 0) {
            alert(`${age}是闰年`)
        } else {
            alert(`${age}不是闰年`)
        }
    ```