/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
// 二分
var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0]

  const basic = strs.pop()
  let left = 0
  let right = basic.length

  while(left <= right) {
    const mid = (left + right) >> 1
    const cutStr = basic.slice(0, mid)
    if (strs.every(item => item.startsWith(cutStr))) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return basic.slice(0, left - 1)
}

// 竖向对比
// var longestCommonPrefix = function(strs) {
//   if (strs.length === 1) return strs[0]

//   const basic = strs.pop()
//   const len = basic.length
//   let res = ''

//   for (let i = 0; i < len; i++) {
//     if (strs.every(str => str[i] === basic[i])) {
//       res += basic[i]
//     } else {
//       break
//     }
//   }

//   return res
// }
// @lc code=end
