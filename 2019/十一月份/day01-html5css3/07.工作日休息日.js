// 7. 根据输入的数字，判断如果是1-5打印工作日，如果是6，7打印休息日。
var day=1
if(day<=5 && day!=0){
    console.log('今天是工作日')
}else if(day>5 && day<=7){
    console.log('今天是休息日')
}