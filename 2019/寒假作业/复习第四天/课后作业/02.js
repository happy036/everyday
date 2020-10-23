function all(num) {
    var sum = 0
    for (var i = 0; i <= num; i++) {
        if (num % i == 0) {
            sum += i
        }
    }
    console.log(sum)
}
all(6)