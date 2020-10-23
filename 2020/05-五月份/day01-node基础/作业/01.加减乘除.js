function jia(a, b) {
    return a + b
}

function jian(a, b) {
    return a - b
}

function cheng(a, b) {
    return a * b
}

function chu(a, b) {
    return a / b
}

// module.exports.jia = jia
// module.exports.jian = jian
// module.exports.cheng = cheng
// module.exports.chu = chu

module.exports = {
    chu: chu,
    jia: jia,
    jian: jian,
    cheng: cheng
}