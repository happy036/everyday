// 3.获取url中的用户名和密码 https://www.test.com/login?name=zs&pwd=123,并且控制台输出对象的格式{name:'zs',pwd:123}
let str = "name=zs&pwd=123";
var arr = str.split("&");
console.log(arr)
let obj = new Object();
let name = arr[0].split("=");
let pwd = arr[1].split("=");
obj[name[0]] = name[1];
obj[pwd[0]] = pwd[1];
console.log(obj);