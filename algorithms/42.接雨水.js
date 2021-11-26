/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// DP
// var trap = function(height) {
//   const len = height.length
//   if (len === 0) return 0

//   const leftMax = Array(len)
//   const rightMax = Array(len)

//   leftMax[0] = height[0]
//   for (let i = 1; i < len; i++) {
//     leftMax[i] = Math.max(leftMax[i - 1], height[i])
//   }

//   rightMax[len - 1] = height[len - 1]
//   for (let i = len - 2; i >= 0; i--) {
//     rightMax[i] = Math.max(rightMax[i + 1], height[i])
//   }

//   let max = 0
//   for (let i = 0; i < len; i++) {
//     max += Math.min(leftMax[i], rightMax[i]) - height[i]
//   }

//   return max
// }

// two point
var trap = function(height) {
  const len = height.length
  if (len === 0) return 0

  let left = 1
  let leftMax = height[0]
  let right = len - 2
  let rightMax = height[len - 1]
  let max = 0

  while(left <= right) {
    leftMax = Math.max(height[left], leftMax)
    rightMax = Math.max(height[right], rightMax)

    if (leftMax > rightMax) {
      max += rightMax - height[right]
      right--
    } else {
      max += leftMax - height[left]
      left++
    }
  }

  return max
}
// @lc code=end
