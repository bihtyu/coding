/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 23:25
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)

  const len = nums.length
  let result = nums[0] + nums[1] + nums[len - 1]

  for (let i = 0; i < len; i++) {
    const n1 = nums[i]
    let left = i + 1
    let right = len - 1

    while(left < right) {
      const total = n1 + nums[left] + nums[right]

      total < target ? left++ : right--

      if (Math.abs(target - total) < Math.abs(target - result)) {
        result = total
      }
    }
  }

  return result
}
// @lc code=end
