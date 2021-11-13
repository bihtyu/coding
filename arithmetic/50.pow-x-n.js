/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 递归
// var myPow = function(x, n) {
//   if (n === 0) return 1

//   if (n < 0) return 1 / myPow(x, -n)

//   if (n % 2) return x * myPow(x, n - 1)

//   return myPow(x * x, n / 2)
// };


var myPow = function(x, n) {
  if (n === 0) return 1

  if (n < 0) {
    x = 1 / x
    n = -n
  }

  let target = 1

  while(n) {
    if (n % 2) {
      target *= x
      n--
    }
    
    // 使用 >> 在 myPow(1, -2147483648) 会报错
    // 原因：
    // 2**31 的二进制数是 1000 0000 0000 0000 0000 0000 0000 0000，
    // JavaScript 中的数字按照 IEEE 754 的标准，使用 64 位双精度浮点型来表示，
    // 但是在进行位运算操作时会把 64 位的转 32 位来运算，它应该是把最高位看成符号位了，
    // 所以有符号右移 >> 1 是 -1073741824，用无符号右移（直接补0）可以解决
    // n >>= 1 

    n = n / 2
    target *= x ** n
  }

  return target
}
// @lc code=end
