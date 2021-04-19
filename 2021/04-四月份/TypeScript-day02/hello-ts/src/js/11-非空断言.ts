function notNull(str: object | undefined | null) {
  let str1 = null
  str1 = str!
  console.log(str1)
}
notNull({ a: 1, b: 2 })