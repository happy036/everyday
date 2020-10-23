## js解答题

1. Date对象的语法格式是什么

var myDate=new Date()

2. 如何使用Date对象获取当前的 年 月 日  小时 分钟 秒

var date = new Date();
//获取年
var year = date.getFullYear();
//获取月
var month = date.getMonth() + 1; 
//获取日
var day = date.getDate();
//获取小时
var day = date.getHours();
//获取分钟
var day = date.getMinutes();
//获取秒
var day = date.getSeconds();

3. 请举例说明Date对象自带的8个方法，并且说明方法的作用

getDate(): 从 Date 对象返回一个月中的某一天 (1 ~ 31)
getDay(): 从 Date 对象返回一周中的某一天 (0 ~ 6) 
getMonth(): 从 Date 对象返回月份 (0 ~ 11) 
getFullYear(): 从 Date 对象以四位数字返回年份 
getHours(): 返回 Date 对象的小时 (0 ~ 23)
getMinutes(): 返回 Date 对象的分钟 (0 ~ 59)
getSeconds(): 返回 Date 对象的秒数 (0 ~ 59) 
getTime(): 返回 1970 年 1 月 1 日至今的毫秒数

## js编程题

1. 将通过new Date() 获取到的时间格式成为`xxx年xxx月xxx日 xx时xx分xx秒`，例如: 2000年1月10日  08时:22分:32秒
```js
var myDate = new Date();
var month = myDate.getMonth();
var day = myDate.getDate();
var year = myDate.getFullYear();
var hour = myDate.getHours();
var minute = myDate.getMinutes();
var second = myDate.getSeconds();
console.log(`${year}年${month + 1}月${day}日${hour}时${minute}分${second}秒`);
```

2. 编写function parseDatetime(var datetime)方法
   功能描述：传入参数的日期对象与当前日期比较：
    - 参数日期比当前日期大，返回”日期不符合要求”。
    - 参数日期比当前日期小，范围小于1分钟：返回“刚刚”；
    - 参数日期比当前日期小，差值范围大于等于1分钟：返回“x分钟之前”；x代表分钟数，
    - 参数日期比当前日期小，差值范围大于等于1小时：返回“x小时之前”；x代表小时数，
    - 参数日期比当前日期小，差值范围大于等于1天：返回“x天之前”；
    - 参数日期比当前日期小，差值范围大于等于7天：返回“x周之前”；
    - 参数日期比当前日期小，差值范围大于等于30天：返回“x月之前”；
    - 参数日期比当前日期小，差值范围大于等于365天：返回“很久之前”。

```html
    <script>
      function parseDatetime(datetime) {
        var myDate = new Date();
        var month = myDate.getMonth();
        var day = myDate.getDate();
        var year = myDate.getFullYear();
        var hour = myDate.getHours();
        var minute = myDate.getMinutes();
        var second = myDate.getSeconds();
        var week = myDate.getDay();
        var seconds = prompt("请输入参考为几秒");
        var minutes = prompt("请输入参考为几分");
        var hours = prompt("请输入参考为几时");
        var days = prompt("请输入参考时间为几号");
        var months = prompt("请输入月份");
        var years = prompt("请输入年份");
        var weeks = prompt("请输入星期几");
        if (
          second > seconds &&
          month == months &&
          hour == hours &&
          day == days &&
          minute == minutes &&
          year == years &&
          week == weeks
        ) {
          return alert("刚刚");
        } else if (
          month == months &&
          hour == hours &&
          day == days &&
          minute > minutes &&
          year == years &&
          week == weeks
        ) {
          return alert(`${minute - minutes}分钟之前`);
        } else if (
          month == months &&
          hour > hours &&
          day == days &&
          year == years &&
          week == weeks
        ) {
          return alert(`${hour - hours}小时之前`);
        } else if (
          month == months &&
          day - days <= 7 &&
          year == years &&
          week > weeks
        ) {
          return alert(`${week - weeks}天之前`);
        } else if (month > months && year == years) {
          return alert(`${month - months}月之前`);
        } else if (year > years) {
          return alert(`很久之前`);
        } else if (
          second != seconds ||
          month != months ||
          hour != hours ||
          day != days ||
          minute != minutes ||
          year != years ||
          week != weeks
        ) {
          return alert("日期不符合");
        }
      }

      parseDatetime();
    </script>
```


3. 利用JavaScript打印出所有的"水仙花数"，所谓"水仙花数"是指一个三位数，其各位 数字立方和等于该数本身。
```js
for (var i = 100; i <= 999; i++) {
 var ge = i % 10;
 var shi = parseInt(i / 10) % 10;
 var bai= parseInt(i / 100);
  if (ge * ge * ge + shi * shi * shi + bai * bai * bai == i) {
    console.log(i);
  }
}
 ```

4.定义一个1到10之间的数字，让用户猜，用户有3次机会，猜中弹出恭喜并结束程序，猜错重新弹出输入框让用户输入，直到3次机会都用完弹出遗憾并结束程序。

```html
        <script>
      var num = 8;
      var i = 0;
      while (true) {
        var guess = prompt("请猜一猜1~10我选的是哪一个数字");
        if (guess == num) {
          alert("你真棒！恭喜你猜对了");
          break;
        }
        i++;
        if (i == 3) {
          alert("很遗憾你的机会用完了");
          break;
        }
      }
    </script>
```