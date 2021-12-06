/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 23:49
var isValid = function(s) {
  const hash = {
    '(': ')',
    '{': '}',
    '[': ']',
  }

  const stack = []
  for (const char of s) {
    if (hash[char]) {
      stack.push(char)
    } else {
      if (hash[char] !== stack.pop()) {
        return false
      }
    }
  }
  return stack.length === 0
}
// @lc code=end
