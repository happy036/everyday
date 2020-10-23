let obj ={
    name:"张杰",
    wife:"谢娜"
}

//对象转json
//JSON.stringify(对象或数组)

let objJson=JSON.stringify(obj)
console.log(objJson)

let arr=['a','b','c']
console.log(JSON.stringify(arr))