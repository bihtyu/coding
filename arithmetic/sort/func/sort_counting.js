/**
 * 计数排序
 * 计数排序不是基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。
 * 作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
 * O(n + k)， O(n + k)
 * k: 0 < arr[n] < k
 * 稳定
 * @param {*} arr 
 * @returns
 */
function sort_counting(arr, maxValue = 10000) {
  let sortIndex = 0
  let bucketLen = maxValue + 1

  const hash = arr.reduce((obj, cur) => {
    obj[cur] ? obj[cur]++ : obj[cur] = 1
    return obj
  }, {})

  // for (let i = 0; i < arrLen; i++) {
  //   if (!bucket[arr[i]]) {
  //     bucket[arr[i]] = 0;
  //   }
  //   bucket[arr[i]]++;
  // }

  for (let j = 0; j < bucketLen; j++) {
    while (hash[j] > 0) {
      arr[sortIndex++] = j
      hash[j]--
    }
  }

  return arr
}

module.exports = { sort_counting }
