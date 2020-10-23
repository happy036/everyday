//需求：将数组 ['red', 'green', 'blue', 'pink'] 转换为字符串，并且用 | 或其他符号分割
//分析
//① 声明一个变量存储数组
//② 声明一个变量存储转换好的字符串
//③ 声明一个变量表示分隔符
//④ 遍历数组，在每一项元素后面加上一个分隔符
//⑤ 打印结果
var arr=['red', 'green', 'blue', 'pink']
var s=String(arr)
var f="|"
for (var a=0;a<arr.length;a++){
    console.log(arr[a]+f)
}
