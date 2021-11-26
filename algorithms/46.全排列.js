/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 22:27
var permute = function(nums) {
  const res = []

  const backtrack = (arr) => {
    if (arr.length === nums.length) {
      res.push(arr)
      return
    }

    nums.forEach(num => {
      if (!arr.includes(num)) {
        backtrack([...arr, num])
      }
    })
  }

  backtrack([])

  return res
};
// @lc code=end

