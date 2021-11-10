class SortTest {
  constructor(fns = [], range = [], total) {
    // init
    this.stack = fns
    this.total = total
    this.randomMax = range[1] - range[0]
    this.data = []
    this.rightDataStr = []
    this.generate()
  }

  // get data
  generate() {
    console.log('Generate test data...')
    while (this.total--) {
      this.data.push(Math.floor(Math.random() * this.randomMax))
    }
    this.rightDataStr = [...this.data].sort((a, b) => a - b).toString()
  }

  // start sort
  start() {
    const res = []
    console.log('Test running, please wait...')
    while (this.stack.length) {
      const fn = this.stack.shift()
      res.push(this.sort(fn))
    }
    res.sort((a, b) => a.time - b.time)
    for (let i = 0; i < res.length; i++) {
      let diff
      if (res[i].statu === 'FAIL') {
        diff = '-'
      } else {
        diff = i > 0 ? '+' + `${res[i].time - res[i - 1].time}` : 0
      }
      res[i].diff = diff
    }
    console.table(res)
    console.log('Done.')
  }

  sort(fn) {
    const info = {
      functionName: fn.name,
      statu: null,
      time: null
    }
    const start = Date.now()
    const data = [...this.data]
    const currentData = fn(data)
    console.log(currentData)
    if (currentData.toString() === this.rightDataStr) {
      const end = Date.now()
      info.statu = 'SUCCESS'
      info.time = Number(`${end - start}`)
    } else {
      info.statu = 'FAIL'
      info.time = '-'
    }
    return info
  }
}

module.exports = { SortTest }
