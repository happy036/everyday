//需求：写一个函数，判断是否是闰年【能被4整除且不能被100整除，或者能被400整除】
function all(year){
    
if(year%4==0 && year%100!=0 || year%400==0){
    console.log(`${year}是闰年`)
}
return year
}
var year=2000
console.log(all(year))