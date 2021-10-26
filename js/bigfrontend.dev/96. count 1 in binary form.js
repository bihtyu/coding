/**
 * @param {number} num - integer
 * @return {number} count of 1 bit
 */
// 位运算
function countOne(num) {
  let count = 0
  while (num) {
    num &= num - 1
    count++
  }
  return count
}

// api
// function countOne(num) {
//   return num.toString(2).split('').filter(x => x === '1').length
// }