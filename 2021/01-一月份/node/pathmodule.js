const path = require('path')

const newPath = path.join('a/b/c', '\de\f')
// console.log(newPath)

const basename = path.basename('a/b/c/name.txt', '.txt')
console.log(basename)