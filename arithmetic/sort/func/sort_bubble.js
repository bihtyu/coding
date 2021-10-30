/**
 * 冒泡排序，比较相邻的元素。如果第一个比第二个大，就交换它们两个；
 * O(n^2)， O(1)， 稳定
 * @param {*} arr 
 * @returns
 */
function sort_bubble(arr) {
  const len = arr.length

  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}

module.exports = { sort_bubble }
