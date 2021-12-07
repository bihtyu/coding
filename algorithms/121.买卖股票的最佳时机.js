/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 17:29
var maxProfit = function(prices) {
  const len = prices.length
  let min = prices[0]
  let target = 0

  for (let i = 0; i < len; i++) {
    min = Math.min(min, prices[i])
    target = Math.max(prices[i] - min, target)
  }

  return target
}
// @lc code=end
