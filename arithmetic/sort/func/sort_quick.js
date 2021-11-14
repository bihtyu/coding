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
  left = typeof left === 'number' ? left : 0
  right = typeof right === 'number' ? right : arr.length - 1

  let partitionIndex
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    sort_quick_in_place(arr, left, partitionIndex - 1)
    sort_quick_in_place(arr, partitionIndex + 1, right)
  }

  return arr
}

function partition(arr, left, right) {
  const key = arr[left]
  while (left < right) {
    while (left < right && arr[right] >= key) {
      right--
    }
    arr[left] = arr[right]
    while (left < right && arr[left] <= key) {
      left++
    }
    arr[right] = arr[left];
  }
  arr[left] = key
  return left
}

// console.log(sort_quick_in_place([1, 2, 5, 3, 4, 5]))

// 2. 递归 - bad
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
