/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 22:50
var threeSum = function(nums) {
  const res = []
  nums.sort((a, b) => a - b)

  const len = nums.length
  for (let i = 0; i < len; i++) {
    const n1 = nums[i]

    if (n1 > 0) break
    if (i - 1 >= 0 && n1 === nums[i - 1]) continue

    let left = i + 1
    let right = len - 1

    while(left < right) {
      const n2 = nums[left]
      const n3 = nums[right]
      const total = n1 + n2 + n3

      if (total === 0) {
        res.push([n1, n2, n3])
        while(left < right && n2 === nums[left]) {
          left++
        }
        while(left < right && n3 === nums[right]) {
          right--
        }
      } else if (total > 0) {
        right--
      } else {
        left++
      }
    }
  }

  return res
}
// @lc code=end
