//需求：将数组 ['top', 'right', 'bottom', 'left', 'center'] 的内容反过来存放
//分析
//① 声明一个变量存储数组
//② 声明一个空数组
//③ 倒着遍历数组，从最后一个数组开始，倒着一个一个添加到空数组中
//④ 打印结果
var arr=['top', 'right', 'bottom', 'left', 'center']
var arr1=[]
for (var a=arr.length-1;a>=0;a--){
    arr1.push(arr[a])
}
console.log(arr1)