/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// two point
var maxArea = function(height) {
  const len = height.length
  let max = 0
  let left = 0
  let right = len - 1

  while(left < right) {
    const currentArea = Math.min(height[left], height[right]) * (right - left)
    max = Math.max(currentArea, max)

    if (height[left] < height[right]) {
      left++
    } else {
      right--
    }
  }

  return max
}
// @lc code=end
