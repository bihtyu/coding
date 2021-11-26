/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 最大、最小数组
// O(n), O(n)
// var maxProduct = function(nums) {
//   const len = nums.length
//   const maxArr = Array(len)
//   const minArr = Array(len)

//   maxArr[0] = nums[0]
//   minArr[0] = nums[0]
//   for (let i = 1; i < len; i++) {
//     maxArr[i] = Math.max(maxArr[i - 1] * nums[i], Math.max(nums[i], minArr[i - 1] * nums[i]))
//     minArr[i] = Math.min(minArr[i - 1] * nums[i], Math.min(nums[i], maxArr[i - 1] * nums[i]))
//   }

//   return Math.max(...maxArr)
// }

// 滚动数组
// O(n), O(1)
var maxProduct = function(nums) {
  const len = nums.length
  let max = nums[0]
  let min = nums[0]
  let res = nums[0]

  for (let i = 1; i < len; i++) {
    const m = max
    const n = min
    max = Math.max(m * nums[i], Math.max(n * nums[i], nums[i]))
    min = Math.min(n * nums[i], Math.min(m * nums[i], nums[i]))
    res = Math.max(max, res)
  }

  return res
}
// @lc code=end
