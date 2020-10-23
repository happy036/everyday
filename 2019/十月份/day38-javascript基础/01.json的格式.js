//1.对象形式的json
let obj={
    name:"张三",
    age:18,
    brother:{
        gege:"a",
        dd:"b"
    }
}

//虽然json是对象格式的，但是键必须用双引号，如果值是字符串也必须用双引号
let objJson='{"name":"张三","age":18}'

//2.符合数组格式的字符串
let arr=['a','b','c']
let arrJson='["a","b","c"]'
