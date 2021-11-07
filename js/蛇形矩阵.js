// n = 4, m = 4

// [ 1, 2, 3, 4 ],
// [ 5, 6, 7, 8 ],
// [ 9, 10, 11, 12 ],
// [ 13, 14, 15, 16 ]

//        |
//        |
//        V

// [ 1, 2, 6, 7 ],
// [ 3, 5, 8, 13 ],
// [ 4, 9, 12, 14 ],
// [ 10, 11, 15, 16 ]

function snekeMatrix(n, m) {
  const matrix = new Array(n).fill([]).map(_ => new Array(m).fill(1))
  const total = n * m
  let row = 0, col = 1, num = 2, goDown = true

  while(num < total) {
    matrix[row][col] = num

    if (goDown) {
      // 斜对角向下
      if (row + 1 < n) {
        row++
        if (col - 1 < 0) {
          col = 0
          goDown = false
        } else {
          col--
        }
      } else {
        // 已到最后一行
        col++
        goDown = false
      }
    } else {
      // 斜对角向上
      if (col + 1 < m) {
        col++
        if (row - 1 < 0) {
          row = 0
          goDown = true
        } else {
          row--
        }
      } else {
        // 已到第一行
        row++
        goDown = true
      }
    }

    num++
  }

  matrix[n - 1][m - 1] = total

  return matrix
}

console.log(snekeMatrix(4, 4))
