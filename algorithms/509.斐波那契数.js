/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// timeout
// var fib = function(n) {
//   if (n < 2) return n
//   return fib(n - 1) + fib(n - 2)
// }

// 尾递归调用
// var fib = function(n, total = 1, prev = 0) {
//   if (n === 0) return prev
//   return fib(n - 1, total + prev, total)
// }

// 迭代
var fib = function(n) {
  if (n < 2) return n

  let max = 1
  let prev = 0

  for (let i = 2; i <= n; i++) {
    [max, prev] = [max + prev, max]
  }

  return max
}
// @lc code=end
