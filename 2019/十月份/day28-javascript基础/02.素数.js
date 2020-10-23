//需求：写一个函数，判断一个数是否是素数，并返回结果true 或 false(又叫质数，只能被1和自身整数的数)
//1.定义一个函数 定义一个形参  用来存储输入的数字
function su(n){
    //素数： 因子1和它本身  
    //2.使用for循环 循环时除去1和它本身
    for(var i=2;i<n;i++){ 
    //判断是否能整除  n%i==0
        if(n%i===0){
            return false    }
        else{
            return true
        }
    }
    }
    console.log(su(6))