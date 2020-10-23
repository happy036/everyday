// console.log(get(0, 3))

function get(m, n) {
    var count = 0;
    for (var i = m; i <= n; i++) {
        for (var j = m; j <= n; j++) {
            if ((i * 10 + j) % 2 != 0) {
                count++;
            }
        }
    }
    return count;
}

console.log(get(0, 3))　
function foo() {
    var bar = function() {
        return 3;
    };
    return bar;
    var bar = function() {
        return 8;
    };
}
console.log(foo());