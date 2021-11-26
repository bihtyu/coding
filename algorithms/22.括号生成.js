/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 递归
var generateParenthesis = function(n) {
  const res = []
  
  function dfs(left, right, str) {
    if (str.length === 2 * n) {
      res.push(str)
      return
    }

    if (left > 0) {
      dfs(left - 1, right, str + '(')
    }

    if (left < right) {
      dfs(left, right - 1, str + ')')
    }
  }

  dfs(n, n, '')

  return res
};
// @lc code=end

