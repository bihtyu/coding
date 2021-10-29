/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */
// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 单调栈 + 哈希
var nextGreaterElement = function(nums1, nums2) {
  const stack = []
  const map = new Map()

  for (let i = nums2.length - 1; i >= 0; i--) {
    const num = nums2[i]
    while (stack.length && num > stack[stack.length - 1]) {
      stack.pop()
    }
    map.set(num, stack.length ? stack[stack.length - 1] : -1)
    stack.push(num)
  }

  return nums1.map((_, idx) => map.get(nums1[idx]))
}

// bad
// var nextGreaterElement = function(nums1, nums2) {
//   const res = []
//   nums1.forEach(num => {
//     const idx = nums2.findIndex(findItem => findItem === num)
//     let biggerIdx = -1
//     for(let i = idx; i < nums2.length; i++) {
//       if (nums2[i] > num) {
//         biggerIdx = i
//         break
//       }
//     }
//     res.push(biggerIdx === -1 ? biggerIdx : nums2[biggerIdx])
//   })
//   return res
// }
// @lc code=end