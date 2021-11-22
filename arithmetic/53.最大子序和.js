/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const len = nums.length
  if (len === 1) return nums[0]

  let prev = nums[0]
  let max = prev
  for (let i = 1; i < len; i++) {
    prev = Math.max(prev + nums[i], nums[i])
    max = Math.max(max, prev)
  }

  return max
}
// @lc code=end
