//需求：10个整数{9,10,6,6,1,9,3,5,6,4}，保存到数组中。
    //1.去除数组中重复的内容，只保留唯一的元素。
    //2.以下列格式打印数组：[9,10,6,1,3,5,4]
     //步骤
//1.声明一个变量定义数组
var arr=[9,10,6,6,1,9,3,5,6,4]
//2.声明一个变量定义新数组
var newarr=[]
//3.遍历数组
for(var i=0;i<arr.length;i++){
    //3.1使用indexOf 利用indexOf元素不存在就返回-1 使用if判断 
    if(newarr.indexOf(arr[i])==-1){
        newarr.push(arr[i])
    }
}
//4.打印
console.log(newarr)