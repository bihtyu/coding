/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const len = nums.length

  if (len === 1 && nums[0] === target) { return [0, 0] }

  let left = 0
  let right = len - 1
  const res = [-1, -1]

  while(left <= right) {
    const mid = (left + right) >> 1
    if (nums[mid] > target) {
      right = mid - 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      let i = 0
      while(mid - i >= 0 && nums[mid - i] === target) {
        i++
      }
      res[0] = mid - i + 1

      i = 0
      while(mid + i < len && nums[mid + i] === target) {
        i++
      }
      res[1] = mid + i - 1
      break
    }
  }

  return res
};
// @lc code=end
