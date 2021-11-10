/**
 * 快速排序
 * 使用分治法来把一个串（list）分为两个子串（sub-lists）
 * O(n*logn)， O(n*logn)
 * 不稳定
 * @param {*} arr 
 * @returns
 */
// 1. 原地修改 - good
function sort_quick_in_place(arr, left, right) {
  const len = arr.length
  left = left || 0
  right = right || len - 1

  let partitionIndex
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    sort_quick_in_place(arr, left, partitionIndex - 1)
    sort_quick_in_place(arr, partitionIndex + 1, right)
  }

  return arr
}

function partition(arr, left, right) {
  const pivot = arr[(left + right) >> 1]
  while(left <= right) {
    while(arr[left] < pivot) {
      left++
    }
    while(arr[right] > pivot) {
      right--
    }
    if (left <= right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }
    return left - 1
  }
}

// 2. 递归 - bad
// 数据量大时（约 arr.length > 10000），调用栈溢出
// FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
function sort_quick_recursion(arr) {
  if (arr.length <= 1) return arr

  const pivot = arr.shift()
  const left = []
  const right = []

  for (const num of arr) {
    if (num <= pivot) {
      left.push(num)
    } else {
      right.push(num)
    }
  }

  return [...sort_quick_recursion(left), pivot, ...sort_quick_recursion(right)]
}

module.exports = {
  sort_quick_in_place,
  sort_quick_recursion
}
