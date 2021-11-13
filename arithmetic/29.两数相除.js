/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  const isNegative_1 = dividend < 0
  const isNegative_2 = divisor < 0
  const MAX = 2 ** 31 - 1
  const MIN = -(2 ** 31)

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  let target = 0
  let sum = 0 // 累加值
  while(dividend >= divisor) {
    target++
    dividend -= divisor
    sum += divisor

    if (dividend > sum) {
      dividend -= sum
      sum += sum
      target += target
    }
  }

  target = (isNegative_1 && !isNegative_2) || (!isNegative_1 && isNegative_2) ? -target : target

  if (target < MIN) return MIN
  if (target > MAX) return MAX
  return target
}
// @lc code=end
