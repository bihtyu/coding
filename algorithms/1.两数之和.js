/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const hash = {}
  let res = []

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (hash[num] !== undefined) {
      res = [i, hash[num]]
      break
    } else {
      hash[target - num] = i
    }
  }

  return res
}
// @lc code=end
