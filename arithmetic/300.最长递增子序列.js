/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let stack = []

  for (const num of nums) {
    const top = stack[stack.length - 1]
    if (top === num) continue
    if (num > top) {
      stack.push(num)
    } else {
      insert(stack, num)
    }
  }

  return stack.length
};

var insert = function(stack, num) {
  let left = 0
  let right = stack.length - 1

  while(left <= right) {
    const mid = (left + right) >> 1
    if (num <= stack[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  stack[left] = num
}
// @lc code=end

