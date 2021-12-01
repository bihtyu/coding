/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// timeout
// var climbStairs = function(n) {
//   if (n <= 2) return n
//   return climbStairs(n - 1) + climbStairs(n - 2)
// }

// 尾递归调用
var climbStairs = function(n, total = 1, prev = 1) {
  if (n === 1) return total
  return climbStairs(n - 1, total + prev, total)
}

// 迭代
// var climbStairs = function(n) {
//   let prev = 1
//   let max = 1

//   for (let i = 2; i <= n; i++) {
//     [max, prev] = [max + prev, max]
//   }

//   return max
// }

// @lc code=end
