/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(condidates, target) {
  const res = []

  const dfs = function(target, temp, idx) {
    // 终止条件
    if (idx === condidates.length) return
    if (target === 0) {
      res.push(temp)
      return
    }

    // 1. 选择跳过不用第 idx 个数
    dfs(target, temp, idx + 1)

    // 2. 选择使用第 idx 个数
    const remain = target - condidates[idx]
    if (remain >= 0) {
      dfs(remain, [...temp, condidates[idx]], idx)
    }
  }

  dfs(target, [], 0)

  return res
}
// @lc code=end

