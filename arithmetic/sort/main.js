const { SortTest } = require('./test.js')

// 原生 api
function sort_api(arr) {
  return arr.sort((a, b) => a - b)
}

// 冒泡排序
function sort_bubble(arr) {
  var len = arr.length;
  for (var i = 0;i < len - 1;i++) {
    for (var j = 0;j < len - 1 - i;j++) {
      if (arr[j] > arr[j + 1]) {        // 相邻元素两两对比
        var temp = arr[j + 1];        // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 选择排序
function sort_selection(arr) {
  var len = arr.length;
  var minIndex, temp;
  for (var i = 0;i < len - 1;i++) {
    minIndex = i;
    for (var j = i + 1;j < len;j++) {
      if (arr[j] < arr[minIndex]) {     // 寻找最小的数
        minIndex = j;                 // 将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

// 计数排序（Counting Sort）
function sort_counting(arr, maxValue = 100000) {
  var bucket = new Array(maxValue + 1),
    sortedIndex = 0;
  arrLen = arr.length,
    bucketLen = maxValue + 1;

  for (var i = 0;i < arrLen;i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0;
    }
    bucket[arr[i]]++;
  }

  for (var j = 0;j < bucketLen;j++) {
    while (bucket[j] > 0) {
      arr[sortedIndex++] = j;
      bucket[j]--;
    }
  }

  return arr;
}

// 归并排序
function sort_merge(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(sort_merge(left), sort_merge(right));
}

function merge(left, right) {
  var result = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length)
    result.push(left.shift());

  while (right.length)
    result.push(right.shift());

  return result;
}

// test
const sortFns = [sort_api, sort_bubble, sort_selection, sort_counting, sort_merge]
const myTest = new SortTest(sortFns, [1, 100000], 100000)
myTest.start()