/**
 * 选择排序，n 个记录的直接选择排序可经过 n-1 趟直接选择排序得到有序结果；
 * O(n^2)， O(1)，不稳定
 * @param {*} arr 
 * @returns
 */
function sort_selection(arr) {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < len - 1; j++) {
      minIndex = arr[j] < arr[minIndex] ? j : minIndex
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }

  return arr
}

module.exports = { sort_selection }
