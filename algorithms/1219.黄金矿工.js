/*
 * @lc app=leetcode.cn id=1219 lang=javascript
 *
 * [1219] 黄金矿工
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var getMaximumGold = function (grid) {
  const row = grid.length
  const col = grid[0].length
  let ans = 0
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ]

  const dfs = (x, y, gold) => {
    const temp = grid[x][y]
    gold += temp
    ans = Math.max(gold, ans)

    grid[x][y] = 0

    for (let d = 0; d < 4; d++) {
      const nextX = x + dirs[d][0]
      const nextY = y + dirs[d][1]
      if (
        nextX >= 0 &&
        nextX < row &&
        nextY >= 0 &&
        nextY < col &&
        grid[nextX][nextY] > 0
      ) {
        dfs(nextX, nextY, gold)
      }
    }

    grid[x][y] = temp
  }

  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      grid[x][y] > 0 && dfs(x, y, 0)
    }
  }

  return ans
}
// @lc code=end
