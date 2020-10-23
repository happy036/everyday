//1. 写一个函数，实现对数字数组的排序，var arr = [18, 45, 0, 58, 32,59]
// function  paixu(arr){
//     for(var i=0;i<arr.length-1;i++){
//         for (var j=0;j<arr.length-i-1;j++){
//             if(arr[j]<arr[j+1]){
//                 var tamp=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=tamp
//             }
//         }
//     }
//     return arr
// }
// var arr = [18, 45, 0, 58, 32,59]
// console.log(paixu(arr))


//2. 写一个函数，求数组的所有元素的和，var arr = [18, 45, 333，5，6，1，5]
// function  all(arr){
//     var sum=0
//     for (var i=0;i<arr.length;i++){
//         sum+=arr[i]

//     }
//     return sum
// }

// var arr = [18, 45, 333,5,6,1,5]
// console.log(all(arr))

//3. 写一个函数，求出3在数组 var arr = {3,4,3,5,7,9};中出现的次数

// function getThree(arr){
//     var count=0
//     for(var i=0;i<arr.length;i++){
        
//         if(arr[i]==3){
//             count++
//         }
//     }
//     return count
// }
// var arr = [3,4,3,5,7,9]
// console.log(getThree(arr))


//4. 写一个函数，用户输入任意两个不同数字,返回最后的最大值
// function maxz(num,num1){
//     num>num1?max=num:max=num1
//     return max

// }
// maxz(35,36)
// console.log(maxz(num,num1))



//7. 写一个函数,  求圆的面积：PI *r *r，圆的周长
//  function all(r){
//      const PI=3.14
//      var s=PI*r*r
//      var c=PI*2*r
//      console.log(`面积是${s},周长是${c}`)

//  }
//  all(1)


//8. 写一个函数,  100到200有多少3 ，解释：例如101中没有3；103中有一个3；133中有两个3。你要做的是统计出到200之间的整数一共有多少个3。
// //1.声明函数
// function  getThree(){
//     //累加3出现的次数
//     var count=0
//     //for循环
//     for(var i=100;i<=200;i++){
//         var ge=i%10
//         var shi=parseInt(i/10%10)
//         //判断3是否出现
//         if(ge==3){
//             count++
//         }
//         if(shi==3){
//             count++
//         }
//     }
//     console.log(count)

// }
// //调用函数
// getThree()


//9. 写一个函数，该函数用于计算一个正数的因子和（比如6的因子和是1+2+3+6=12）
// function all(num){
//     var sum=0
//     for(var i=1;i<=num;i++){
//         if(num%i==0){
//             sum+=i
//         }
//     }
//     return sum
// }
// var num=6
// console.log(all(num))

//10. 写一个函数，求斐波那契数列fibonacci中的第n个数是多少？？1  1  2  3  5   8  13  21 

function are(n){
    if(n>2){
        var a=1
        var b=1
        for(var i=3;i<=n;i++){
            var c=a+b
            a=b
            b=c
        }
        return c
    }
    else{
        return 1
    }
    
}
console.log(are(5))

//10. 写一个函数，求斐波那契数列fibonacci中的第n个数是多少？？1  1  2  3  5   8  13  21 
function num(n){
    if(n>2){
        var a=1
        var b=1
        for(var i=3;i<=n;i++){
            var c=a+b
            a=b
            b=c
        }
        return c
    }else{
        return 1
    }
}
console.log(num(5))



//13.写一个函数,求数组中的最大值,  var arr = [18, 45, 0, 58, 32,59]
//1.声明函数
// function  maxz(){
//     var arr = [18, 45, 0, 58, 32,59]
//     var max=arr[0]
//     for(var i=0;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     console.log(max)
// }

// maxz()




//18.给定一个整数，写一个函数来判断它是否是 3 的幂次方
function shu(n){
    while(n%3==0){
        n=n/3
    }
    if(n==1){
        return '是三的幂次方'
    }
    else {
        return '不是三的幂次方'
    }
}
console.log(shu(9))


//21.写一个函数，实现n的阶层的和求1+2!+3!+...+n!的和
// function all(n){
//     var sum=1
// var all=0
// for(var i=1;i<=n;i++){
//     sum*=i
//     all+=sum
// }
// return all
// }
// console.log(all(3))


//22.写一个函数， 传入3 个正数，判断能否构成一个三角形
// function three(a,b,c){
//     if(a+b>c || a+c>b  || b+c>a){
//         console.log(`${a},${b},${c}能构成三角形`)
//     }
// }
// three(3,4,5)








