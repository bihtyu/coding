/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const basic = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000,
  }

  let total = 0
  while(s.length) {
    const cutEnd = basic[s.slice(0, 2)] ? 2 : 1
    total += basic[s.slice(0, cutEnd)]
    s = s.slice(cutEnd)
  }

  return total
}
// @lc code=end