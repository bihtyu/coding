/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 卡塔兰数
var numTrees = function(n) {
  let total = 1
  for (let i = 0; i < n; i++) {
    total *= 2 * (2 * i + 1) / (i + 2)
  }

  return total
}
// @lc code=end
