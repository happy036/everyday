var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
var arr2 = []
for (var i = 0; i < arr.length; i++) {
    if (arr2.indexOf(arr[i]) === -1) {
        arr2.push(arr[i])
    }
}
console.log(arr2)

for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr2.length - i; j++) {
        if (arr2[j] < arr2[j + 1]) {
            var num = arr2[j]
            arr2[j] = arr2[j + 1]
            arr2[j + 1] = num
        }
    }
}
console.log(arr2);;;