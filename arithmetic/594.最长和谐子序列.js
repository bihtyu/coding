/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLHS = function(nums) {
  const hash = nums.reduce((obj, num) => {
    obj[num] = obj[num] ? obj[num] + 1 : 1
    return obj
  }, {})

  let max = 0
  Object.keys(hash).forEach(key => {
    key = Number(key)
    if (hash[key + 1]) {
      max = Math.max(max, hash[key] + hash[key + 1])
    }
  })

  return max
}
// @lc code=end
