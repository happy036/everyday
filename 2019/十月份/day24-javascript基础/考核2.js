//10.定义一个长度为10的数组，在每一个元素存放一个单词，然后用户输入单词进行匹配，通过程序判断数组是否包含有这个单词，包含这个单词打印"YES",否则就是"NO"
/*24.10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
   1.去除数组中重复的内容，只保留唯一的元素。
   2.以下列格式打印数组：[9,10,6,1,3,5,4]*/
   // 步骤:
// 1.声明10个整数的数组
// var arr = [9, 10, 6, 6, 1, 9, 3, 5, 6, 4];
// // 2.声明空数组
// var newArr = [];
// // 3.循环遍历10个整数的数组
// for (var i = 0; i < arr.length; i++) {
//   // 4.判断空数组中有没有遍历的那个数
//   if (newArr.indexOf(arr[i]) === -1) {
//     // 4.1 如果没有 就把遍历的那个数添加到空数组中
//     newArr.push(arr[i]);
//   }

// }
// // 5.打印空数组
// console.log(newArr);

   
/*32.现在有2个数组，var arr1 = [1,7,9,11,8,15,10,19],
var arr2 =[2,1,6,8,10]将2个数组合并为一个数组，并将数组去重，然后按照升序进行排列*/
var arr1 = [1,7,9,11,8,15,10,19]
var arr2 =[2,1,6,8,10]
var arr3=arr1.concat(arr2)

console.log(arr3)
var arr4=[]
// [
//     1,  7, 9, 11, 8, 15,
//    10, 19, 2,  1, 6,  8,
//    10
//  ]
//  [
//     1,  7,  9, 11, 8,
//    15, 10, 19,  2, 6
//  ]
//遍历数组
for (var i=0;i<arr3.length;i++){
    //声明一个开关
    var falg = true
    for(var j=0;j<arr4.length;j++){
        //判断它俩有没有一样的
        if(arr3[i]==arr4[j]){
            //一旦有重复将开关关闭
            falg = false
        }
        
    }
    //判断falg的值，只有true才能添加
    if (falg) {
        //把arr3[i]添加到arr4
        arr4.push(arr3[i])
    }

}
//打印
console.log(arr4)

for (var i=0;i<arr4.length-1;i++){
    for(var j=0;j<arr4.length-i-1;j++){
        if(arr4[j]<arr4[j+1]){
            var tamp=arr4[j]
            arr4[j]=arr4[j+1]
            arr4[j+1]=tamp
        }
    }

}
console.log(arr4)

/*33.  有一个从大到小排好序的数组[99，85，82，63，60]，现从页面输入一个数，要求按原来的规律将它插入数组中，
要求，假设你输入的80，则应该插入到82和63之间*/

/*34.请编程实现数组最大的与第一个元素交换，最小的与最后一个元素交换，
然后打印数组内容, var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]*/

/*var arr = [1,2,4,5,7,7,666,0,-1,-2,-3]
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

var zd=arr.indexOf(arr1)
var tamp=arr[0]
arr[0]=arr[zd]
arr[zd]=tamp

var zx=arr.indexOf(arr2)
var tamp1=arr[arr.length-1]
arr[arr.length-1]=arr[zx]
arr[zx]=tamp1


console.log(arr1,arr2,zd,arr)*/

/*35.将一个一维数组，var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],
    通过一定方法，转成二维数组 var newarr = [[1,2,3,4,5,6],[7,8,9,10,11,12],[13,14,15,16,17,18]]*/


//36.找出一个数组中有哪些重复元素，并且这些元素各重复了几次,var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]
var arr = [0,1,3,1,1,5,5,8,8,8,0,9,5]
for (var i=0;i<arr.length;i++){
    
}
/*27.将下面的数组元素前后互换，不能定义新的数组，在原数组上面操作，需要第一个元素和最后一个元素互换位置，第二个元素和倒数第二个元素互换位置，依次类推
                  [11, 32，66, 47，79，23，89]	
                置换后的数组元素为：
                  [89, 23, 79, 47, 66, 32, 11]*/
// var arr=[11, 32,66, 47,79,23,89]
// //遍历数组
// for (var i=0;i<arr.length/2;i++){
//     //声明一个变量tamp，并将arr[i]赋值给临时变量tamp
//     var tamp=arr[i]
//     //将最后一个值赋值给arr[i]进行交换
//     arr[i]=arr[arr.length-i-1]
//     //将tamp赋值给最后一个值进行交换
//     arr[arr.length-i-1]=tamp

// }
// //打印
// console.log(arr)





