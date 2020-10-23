/*18. 输入三角形的三边，根据输入的三角形的三边判断是否能组成三角形，如果可以进一步 判断三角形的类型
        等边三角形(三边相等) 等腰三角形(两边相等)  直角三角形(a平方+b平方=c平方)  其他三角形（不满足上面的）*/
      var a=20
      var b=20
      var c=20
      if (a==b&&b==c)
      {
          console.log("等边三角形")
      }
      else if(a==b||b==c||a==c)
      {
          console.log("等腰三角形")
      }
      else if(a*a+b*b==c*c)
      {
          console.log("直角三角形")
      }
      else 
      {
          console.log("其他三角形")
      }

/*21.	录入月份，输出对应的季节
    (1)键盘录入一个整数(代表月份,范围1-12)
    (2)输出该月份对应的季节
   	   3,4,5春季
   	   6,7,8夏季
   	   9,10,11秋季
   	   12,1,2冬季
    (3)演示格式如下:
   	   请输入一个月份:3
     控制台输出:3月份是春季"*/
     var month=1
     if(month>=3&&month<=5)
     {
         console.log(month+"月份是春季")
     }
     else if(month>=6&&month<=8)
     {
         console.log(month+"月份是夏季")
     }
     else if(month>=9&&month<=11)
     {
         console.log(month+"月份是秋季")
     }
     else if(month==12)
     {
         console.log(month+"月份是冬季")
     }
     else if(month>0&&month<=2)
     {
         console.log(month+"月份是冬季")
     }
     else {
         console.log("请输入正确的月份")
     }




     //22. 录入一个5位数,判断 该五位数是否为回文数。（判断第一位和第五位是否一样，第二位和第四位是否一样）

     var a,b,c,d,e
     var f=12345
      a=f%10  
      b=(f-a)/10%10
      c=(f-b*10-a)/100%10
      d=(f-c*100-b*10-a)/1000%10
      e=(f-d*1000-c*100-b*10-a)/10000
      if(e==a&&b==d)
      {
          console.log("是回文数")
      }
      else{
          console.log("不是回文数")
      }



     // 23. 利用JavaScript完成如下功能：如果今天是星期六，那么1000天后是星期几
     
     var all=1000
     if (all%7==0)
     {
         console.log("星期六")
     }
     else if(all%7==1)
     {
         console.log("星期日")
     }
     else if(all%7==2)
     {
         console.log("星期一")
     }
     else if(all%7==3)
     {
         console.log("星期二")
     }
     else if(all%7==4)
     {
         console.log("星期三")
     }
     else if(all%7==5)
     {
         console.log("星期四")
     }
     else if(all%7==6)
     {
         console.log("星期五")
     }

     /*24.一个加油站为了鼓励车主多加油，所以加的多有优惠。
      92号汽油，每升6元；如果大于20升，那么超出部分每升5.9；
      95号汽油，每升7元；如果大于30升，那么超出部分每升6.95
      编写JS程序，用户输入自己的汽油编号，然后输入自己加多少升，弹出价格。*/
      var oil=92
      var L=20
      var money
      if(oil==92){
          if(L>20){
              money=20*6+(L-20)*5.9
          }
          else {
              money=L*6
          }
      }
      else if(oil==95){
          if(L>30){
              money=30*7+(L-30)*6.95
          }
          else{
              money=L*7
          }
      }
      console.log(money)
      //25. 收先接收用户输入的用户名，判断该用户名是否是admin,如果不是直接程序终止，如果是那么再次提示让用户输入密码,如果密码是88888,那么提示登录成功，否则提示登录失败
      var name="admin",password=88888
      if(name=="admin")
      {
          if(password==88888)
        {
            console.log("登录成功")
        }
        else{
            console.log("登录失败")
        }
      }
      //26. 100以内7的倍数的总和
      var sum=0
      for (var num=7 ;num<100;num++)
      {
          if(num%7==0)
          {
              sum=sum+num
          }
      }
      console.log(sum)
      //27.求1!+2!+3!+...+10!的和
      //28.鸡兔同笼：鸡和兔子一共35只，笼子里一共有94只脚，用程序计算出鸡和兔子分别多少只
      var x,y
      for(x=1;x<35;x++)
      {
          y=35-x
          if(2*x+4*y==94)
          {
              console.log(`鸡有${x}只，兔子有${y}只`)
          }
      }
      //29.一个数如果恰好等于它的因子之和，这个数就称为 "完数 "。 例如6=1＋2＋3.编程 找出1000以内的所有完数。
      
      //30.输出2-200之间的所有素数（素数就是只能被1和其本身整除的数）
      
      
      //31.解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出101到200之间的整数一共有多少个3。
      var ge
      var shi
      var geshu=0
      for(var g=101;g<200;g++)
      {
          var ge=g%10
          var shi=(ge-g%10)/10%10
          if(ge==3)
          {
              geshu=geshu+1
          }
          if (shi==3)
          {
              geshu=geshu+1
          }
      }
      console.log(`一共有`+geshu+`个3`)
      /*32.某同学参加计算机大赛：
		如果获得第1名，将参加清华大学组织的1个月夏令营；
		如果或得第2名，将奖励联想笔记本电脑一部；
		如果获得第3名，将奖励移动硬盘一个；
        否则没有任何奖励；*/
        var ming=1
        if (ming==3)
        {
            console.log("奖励移动硬盘一个")
        }
        else if(ming==2)
        {
            console.log("奖励联想笔记本电脑一部")
        }
        else if(ming==1)
        {
            console.log("参加清华大学组织的1个月夏令营")
        }
        else{
            console.log("没有任何奖励")
        }
      //33.利用JavaScript完成如下功能：要求在1~1000数字之中，找出所有能被5整除，或者被6整除的数字，并在控制台输出这些数字
      
      for(var f=1;f<1000;f++)
      {
          if(f%5==0||f%6)
          {
              console.log(f)
          }
      }
      //34.求任意一个数字的约数有哪些

      //35.1-100之间所有数的总和 与 平均值

         var sum2=0
         for ( var d=1;d<=100;d++)
         {
             sum2=sum2+d
         }
         console.log(sum2)
         var sum3 =sum2/100
         console.log(sum3)
      //36.求1~100以内(包含1和100)能同时被3，5整除的数的和，并将求出的和打印到控制台上.
      var sum1=0
      for (var i=1;i<=100;i++)
      {
          if(i%3==0&&i%5==0)
          {
              sum1=sum1+i
          }
      }
      console.log(sum1)
      //37.要求：圆的面积小于50，请打印出所有符合面积要求的整数半径。
      var s
      for(var r=1;r<(50/3.14/r);r++)
      {
          s=3.14*r*r
          if(s<50)
          {
              console.log(r)
          }
      }

      //38.遍历1到100之间（包含1和100）的所有数字，统计能被5整除的偶数的个数，最后将个数打印在控制台 
      var num2=0
      for(var t=1;t<=100;t++)
      {
          if(t%5==0&&t%2==0)
          {
              num2=num2+1
          }
      }
      console.log(num2)

    

      
      



     
     
    


