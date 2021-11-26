/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (digits === '') return []

  const obj = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }

  const arr = []
  for (const num of digits) {
    arr.push(obj[num])
  }

  return unfoldArr(arr)
};

const unfoldArr = function(arr) {
  if (arr.length === 1) return arr[0].split('')
  if (arr[arr.length - 1].length === 1) return arr.join('')

  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 1) {
      for (let char of arr[i]) {
        const left = arr.slice(0, i)
        const center = [char]
        const right = arr.slice(i + 1, arr.length)
        res = res.concat(unfoldArr(left.concat(center, right)))
      }
      return res
    }
  }
}
// @lc code=end

