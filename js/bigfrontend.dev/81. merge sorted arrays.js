/**
 * @param {number[][]} arrList
 * non-descending integer array
 * @return {number[]} 
 */
// 1. api
// function merge(arrList) {
//   return arrList.flat(Infinity).sort((a, b) => a - b)
// }

// ------------------------------------

// 2. 递归 - code by plshireme in https://bigfrontend.dev/problem/merge-sorted-arrays/discuss
function merge(arrList) {
  if (arrList.length === 0) return []
  if (arrList.length === 1) return arrList[0]
  if (arrList.length === 2) return merge2Lists(arrList[0], arrList[1])

  let mid = Math.floor(arrList.length / 2)
  let left = merge(arrList.slice(0, mid))
  let right = merge(arrList.slice(mid, arrList.length))

  return merge2Lists(left, right)
}

function merge2Lists(arr1, arr2) {
  let [i, j] = [0, 0];
  let res = []
  while (i < arr1.length || j < arr2.length) {
    if (i >= arr1.length || arr1[i] > arr2[j]) {
      res.push(arr2[j])
      j++
    } else {
      res.push(arr1[i])
      i++
    }
  }
  return res
}
