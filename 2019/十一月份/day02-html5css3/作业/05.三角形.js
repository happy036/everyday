// 5.输入三角形的三边，根据输入的三角形的三边判断是否能组成三角形，如果可以进一步 判断三角形的类型
//     等边三角形(三边相等) 等腰三角形(两边相等)  直角三角形(a平方+b平方=c平方)  其他三角形（不满足上面的）
var a=3
var b=3
var c=5
if(a+b>c || b+c>a || c+a>b){
    console.log(`${a} ${b} ${c}能组成三角形`)
}
if(a==b && b==c && a==c){
    console.log(`${a} ${b} ${c}能组成等边三角形`)
}else if(a == b != c || a == c != b || b == c != a){
    console.log(`${a} ${b} ${c}能组成等腰三角形`)
}else if(a*a+b*b==c*c){
    console.log(`${a} ${b} ${c}能组成直角三角形`)
}else{
    console.log(`${a} ${b} ${c}是其他三角形`)
}