/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const row = grid.length
  const col = grid[0].length
  const dp = Array(row)
             .fill([])
             .map(_ => Array(col))

  // 填充第一行和第一列
  dp[0][0] = grid[0][0]
  for (let i = 1; i < col; i++) {
    dp[0][i] = grid[0][i] + dp[0][i - 1]
  }
  for (let j = 1; j < row; j++) {
    dp[j][0] = grid[j][0] + dp[j - 1][0]
  }

  // 计算剩余点的最小路径
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      // dp[i][j] = Min(top, left) + self
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
    }
  }
  
  return dp[row - 1][col - 1]
}
// @lc code=end
