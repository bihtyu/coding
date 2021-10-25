/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
// 21:08
// timeout
// var lastRemaining = function(n, m) {
//   const arr = Array(n).fill(0).map((item, idx) => idx)

//   let delIdx = 0
//   while(n > 1) {
//     delIdx = (delIdx + m - 1) % n
//     arr.splice(delIdx, 1)
//     n--
//   }

//   return arr[0]
// };

// -------------------------------------------
// 从 2 反推到 n
var lastRemaining = function(n, m) {
  let res = 0

  for (let i = 2; i <= n; i++) {
    res = (res + m) % i
  }

  return res
}
