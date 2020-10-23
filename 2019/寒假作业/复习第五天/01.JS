// function all(str) {
//     var str1 = str.substring(0, 1).toUpperCase()
//     var str2 = str.substring(1).toLowerCase()
//     var str3 = str1.concat(str2)
//     return str3
// }
// var str = "helloWORLD"
// console.log(all(str))

var str = "how are you"
var str1 = str.split(" ")
for (var i = 0; i < str1.length; i++) {
    var str2 = ""
    for (var j = str1.length - 1; j >= 0; j--) {
        str2 += str1[i][j]
    }
    str1[i] = str2
}
str = str1.join(" ")
console.log(str)