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
  const basic = arr[left]

  while(left < right) {
    // 把基数后面且比基数【小】的换到前面去
    while(left < right && arr[right] >= basic) {
      right--
    }
    arr[left] = arr[right]

    // 把基数前面且比基数【大】的换到后面去
    while(left < right && arr[left] <= basic) {
      left++
    }
    arr[right] = arr[left]
  }

  // 重新赋值基数
  arr[left] = basic

  return left
}

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
