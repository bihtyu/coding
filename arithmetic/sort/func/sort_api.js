/**
 * 原生 api
 * In-place QuickSort algorithm.
 * For short (length <= 10) arrays, insertion sort is used for efficiency.
 * v8: 长度 <= 10 的数组使用的是插入排序(稳定排序算法) ，>10 的数组使用的是快速排序。快速排序是不稳定的排序算法
 * @param {*} arr 
 * @returns 
 */
function sort_api(arr) {
  return arr.sort((a, b) => a - b)
}

module.exports = { sort_api }