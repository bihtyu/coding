/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
  const len = nums.length
  if (len < 2) return false

  let max = 0
  let total = 0
  for(const num of nums) {
    max = Math.max(max, num)
    total += num
  }
  const target = total / 2

  if (total % 2 || max > target) return false
  
  const dp = Array(len)

  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    const current = dp[i - 1]  + nums[i]

    if (current === target) return true
  
    if (current < target) {
      dp[i] = current
    } else {
      dp[i] = dp[i - 1]
    }
  }

  return dp[0] === target
}

console.log(canPartition([1,2,3,4,5,6,7]))
// @lc code=end
