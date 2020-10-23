//需求：定义数组 var arr = [11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部打印到控制台
/*var arr = [11,22,33,44,55]
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}*/


//2. 定义数组 var arr = [11,22,33,44,55],要求：求数组中所有的元素的和
/*var arr = [11,22,33,44,55]
var sum=0
for(var i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum)*/

//3. 定义数组 var arr = [11,22,33,44,55],要求：将arr数组中为偶数的元素打印到控制台
/*var arr = [11,22,33,44,55]
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i])
    }
}*/

//4. 定义数组 var arr =[11,22,33,44,55],要求：使用for循环将arr数组的中的元素全部倒叙打印到控制台
/*var arr =[11,22,33,44,55]
for(var i=arr.length-1;i>=0;i--){
    console.log(arr[i])
}*/

/*5. 分析以下需求并实现
   1.定义一个用于存放班级分数的数组var score = [80,90,85,90,78,88,89,93,98,75];
   2.求出班级不及格人数(分数低于60分的就是不及格) ?? 
   3.求出班级的平均分
   4.求出班级的总分数*/
   /*var score = [80,90,85,90,78,88,89,93,98,75]
   var sum=0
   var sum1=0
   for (var i=0;i<score.length;i++){
       sum1+=score[i]
       if(score[i]<60){
           sum+=1
       }
   }
   console.log(sum,sum1,(sum1/score.length-1))*/

  // 6.  var arr = [1,1,2,2,3,4,5,4,3,2,1], 打印出数字2出现的次数。

/*var arr = [1,1,2,2,3,4,5,4,3,2,1]
var sum=0
for (var i=0;i<arr.length;i++){
    if(arr[i]==2){
        sum+=1
    }
}*/


/*7.   已有数组var nums = [5,10,15],要求创建一个新数组
    1.新数组的长度和已知数组相同
    2.新数组每个元素的值，是已知对应位置元素的2倍
    3.在控制台中打印新数组的所有元素*/
    /*var nums = [5,10,15]
    var nums1=[]
    for (var i=0;i<nums.length;i++){
        nums1.push(nums[i]*2)
    }
    console.log(nums1)*/



  //  定义一个整数数组，包含元素[1,3,4,7,8]，获取数组中数组角标和对应的元素都为偶数的元素与个数，并在控制台打印输出。
  /*var arr=[1,3,4,7,8]
  for (var i=0;i<arr.length;i++){
      if(arr[i]%2==0 && i%2==0){
          console.log(arr[i])
      }
  }*/


/*  9.var oldArr[]={1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5}; 
  要求将以上数组中的0项去掉，将不为0的值存入一个新的数组，生成新的数组为 
  var newArr=[1,3,4,5,6,6,5,4,7,6,7,5];*/

var oldArr=[1,3,4,5,0,0,6,6,0,5,4,7,6,7,0,5]
var arr=[]
for (var i=0;i<oldArr.length;i++){
    if(oldArr[i]!=0){
         arr.push(oldArr[i])
    }
}
console.log(arr)


//10.定义一个长度为10的数组，在每一个元素存放一个单词，然后用户输入单词进行匹配，通过程序判断数组是否包含有这个单词，包含这个单词打印"YES",否则就是"NO"
//11.  var arr = [1,888,4,66,7,8]
//要求，可以把数组中的下标为 3 的元素移到数组的开头
var arr = [1,888,4,66,7,8]
arr.unshift(arr[3])
console.log(arr)


/*12.var arr = ['张三'，'李四'，‘王五’]
要求，将数组中的每一个数据拼接在一起，每个数据之间用 | 符合拼接。 如：‘张三|李四|王五*/
var arr = ['张三','李四','王五']

console.log(arr.join("|"))

/*13.定义2个长度为5的字符串数组arrA和arrB，arrA包含元素["a","b","c","d","e"];
遍历arrA中的所有元素并按逆序存储在数组arrB中，并按arrB下标增长的顺序在控制台打印输出arrB数组中所有元素，arrB的结果如下，var arrB = ["e","d","c","b","a"]*/
/*var  arrA=["a","b","c","d","e"]
var  arrB=[]
for (var i=arrA.length-1;i>=0;i--){
    arrB.push(arrA[i])
}
console.log(arrB)*/


/*14.已知数组{"周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"}.
    请查找出数组中是否有孙妍姿、汪菲。 
    如果有，请给出索引；
    如果没有给出-1。*/
    /*var arr=["周兴迟","刘一飞","赵本善","孙妍姿","王妃","陈怡迅"]
    var arr1=arr.indexOf("孙妍姿")
    var arr2=arr.indexOf("汪菲")
    console.log(arr1,arr2)*/



 /*   15. 有一个数组，var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
    要求如下:
       1.从第 0 位开始删除 1 个元素，插入"parrot"、"anemone"和"blue"
       2.从第 2 位开始删除 2 个元素
       3.从第 1 位开始删除 0 个元素，插入“drum” 和 "guitar"*/

       /*var myFish = ['angel', 'clown', 'trumpet', 'sturgeon']
       myFish.splice(0,1,"parrot","anemone","blue")
       myFish.splice(2,2)
       myFish.splice(1,0,"drum","guitar")
       console.log(myFish)*/


       /*16.某班考试成绩如下，利用二维数组存储这些数据，统计出全班的平均成绩
       第一组： 89，66，54
       第二组： 77，93，68
       第三组： 55,   45,  88
       第四组： 71,   76,  75*/
/*var arr=[[89,66,54],[77,93,68],[55,45,88],[71,76,75]]
var sum=0
var cun=0
for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr[i].length;j++){
        cun++
         sum+=arr[i][j]

    }
}
console.log(sum/cun)*/


/*17.  如下二维数组：
var arr = [
[23,45,78,98,67,89,100], // 张三
[2,55,77,57,67,89,11],    // 李四
[3,43,78,45,67,99,10],    // 王五
]
  1、获取李四的数学成绩： arr[1][0]
  2、使用二维数组遍历展示所有同学的所有成绩
  3、计算数学平均成绩：(arr[0][0]+ arr[1][0]+ arr[2][0])/3*/

  /*var arr = [[23,45,78,98,67,89,100], [2,55,77,57,67,89,11],[3,43,78,45,67,99,10],]  
  console.log(arr[1][0])
  for (var i=0;i<arr.length;i++){
      for(var j=0;j<arr[i].length;j++){
          console.log(arr[i][j])
      }
  }
  console.log((arr[0][0]+ arr[1][0]+ arr[2][0])/3)*/

//  18.求出数组var arr= [1,2,4,5,10,100,2,-22]中最小元素的索引
var arr= [1,2,4,5,10,100,2,-22]
var num=arr[0]
for(var i=0;i<arr.length;i++){
    if(num>arr[i]){
        num=arr[i]
    }
}

var arr1=arr.indexOf(num)
console.log(arr1)

//19.按照从大到小的顺序排列 ，var arr= [10, 5, 34, 59, 98],最后打印排序后的数组。
var arr= [10, 5, 34, 59, 98]
var result=arr.sort(function(a,b){return b-a})
console.log(result)

//20.将数组var arr= [1,3,2,8,6,11,9]，采用冒泡排序，按照从小到大排序
/*var arr= [1,3,2,8,6,11,9]
var num=0
for(var i=0;i<arr.length-1;i++){
    for(var j=0;j<arr.length-1-i;j++){
       if(arr[j]>arr[j+1]){
          num=arr[j]
          arr[j]=arr[j+1]
          arr[j+1]=num
       }
    }
}
console.log(arr)*/

//21.数组[10, 5, 34, 59, 98], 使用for循环找出里面的最大值? 使用while循环找出里面的最小值?
/*var arr=[10, 5, 34, 59, 98]
var arr1=arr[0]
for (var i=0;i<arr.length;i++){
     if(arr1<arr[i]){
         arr1=arr[i]
     }
}
console.log(arr1)

var i=0
var arr2=arr[0]
while(i<arr.length){
    if(arr2>arr[i]){
        arr2=arr[i]
    }
    i++
}
console.log(arr2)*/

//22. 求数组中的最大值和最小值, var arr =  [11, 32，55, 47，79，23]

/*var arr =  [11, 32,55, 47,79,23]
var arr1=arr[0]
var arr2=arr[0]
for (var i=0;i<arr.length;i++){
    if(arr1<arr[i]){
        arr1=arr[i]
    }
    if(arr2>arr[i]){
        arr2=arr[i]
    }

}
console.log(arr1,arr2)*/


/*23.现有二维数组，var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]];                                       
   1. 遍历打印二维数组的所有元素
   2. 计算二维数组中所有元素的和
   3. 求二维数组中所有元素的最大值。*/
   /*var  array=[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]] 
   var sum=0
   var arr=array[0][0]
   for (var i=0;i<array.length;i++) {
       for(var j=0;j<array[i].length;j++){
           console.log(array[i][j])
           sum+=array[i][j]
           if(arr<array[i][j]){
               arr=array[i][j]
           }

       }
   }
   console.log(arr,sum)*/


   



//   25.已知arr数组内容[1, 3, 5, 8, 10, 11, 16]，编码实现：数组中所有奇数加1，偶数-1,最后打印数组内容
/*var arr=[1, 3, 5, 8, 10, 11, 16]
for (var i=0;i<arr.length;i++){
    if(arr[i]%2!=0){
        arr[i]=arr[i]+1
    }
    else if(arr[i]%2==0){
        arr[i]=arr[i]-1
    }
}
console.log(arr)*/

/*26.  将下面的数组元素前后互换
         [11, 32，55, 47，79，23]	
          置换后的数组元素为：
          [23, 79, 47, 55, 32, 11]*/
/*var arr=[11, 32,55, 47,79,23]
arr.reverse(arr)
console.log(arr)*/



//28. 在数组中 查询数据第二次55出现的位置,打印第二次出现的索引（索引指从0开始）[11, 32，55, 47，55, 79，23]
/*var arr=[11, 32,55, 47,55, 79,23]
var count=0
for (var i=0;i<arr.length;i++){
    if(arr[i]==55){
        count++
        if(count==2){
            console.log(i)
        }
    }    
}*/

/*29. var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
      var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];
要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组*/
/*var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];
var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"]
var arr3=[]
for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr2.length;j++){
        if(arr1[i]===arr2[j]){
            arr3.push(arr1[i])
        }
    }
}
console.log(arr3)*/

/*30.左奇右偶
    10个整数的数组[26,67,49,38,52,66,7,71,56,87],元素重新排列，所有的奇数保存到数组左边，所有的偶数保存到数组右边。*/
    /*var arr=[26,67,49,38,52,66,7,71,56,87]
    var arr1=[]
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            arr1.unshift(arr[i])
        }
        if(arr[i]%2==0){
            arr1.push(arr[i])
        }
    }
console.log(arr1)*/






