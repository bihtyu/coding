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
// timeout -_-
var divide = function(dividend, divisor) {
  const isNegative_1 = dividend < 0
  const isNegative_2 = divisor < 0
  const MAX = 2 ** 31 - 1
  const MIN = -(2 ** 31)

  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  let target = 0
  while(dividend >= divisor) {
    target++
    dividend -= divisor
  }

  target = (isNegative_1 && !isNegative_2) || (!isNegative_1 && isNegative_2) ? -target : target

  if (target < MIN) {
    return MIN
  } else if (target > MAX) {
    return MAX
  }

  return target
};

console.log(divide(-2147483648, 2)) // timeout
// @lc code=end
