//需求： var arr1 = [1, 2, 3, "aaa", "hello", 999, -1];var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"];要求，把两个数组共同的元素放入一个新的数组, 并返回新的数组
//步骤
//1.声明变量定义数组
var arr1 = [1, 2, 3, "aaa", "hello", 999, -1]
var arr2 = [3, 78, "aaa", "bbb", 99, 1, -1, "hello"]
//2.声明变量定义新数组，存储数组
var arr3=[]
//3.遍历两个数组
for(var i=0;i<arr1.length;i++){
    for(var j=0;j<arr2.length;j++){
        //3.1判断两个数组元素是否相等
        if(arr1[i]===arr2[j]){
            //3.2元素相等放入新数组
            arr3.push(arr1[i])
        }
    }    
}
//4.打印
console.log(arr3)
    