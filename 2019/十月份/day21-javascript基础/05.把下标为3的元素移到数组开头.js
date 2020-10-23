//需求：var arr = [1,888,4,66,7,8]
//要求，可以把数组中的下标为 3 的元素移到数组的开头
//步骤
//1.声明变量定义数组
var arr = [1,888,4,66,7,8]
//2.遍历数组
for(var a = 0; a < arr.length; a++){

    if(a == 3){
        arr.unshift(arr[a]);
        
    }
}
//3.打印
console.log(arr)
