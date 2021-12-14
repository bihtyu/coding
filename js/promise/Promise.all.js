function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      throw new Error('参数异常')
    }

    const result = []
    let count = 0
    promises.forEach((promise, index) => {
      promise.then(res => {
        result[index] = res
        count++
        count === promises.length && resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  })
}

const a = new Promise((resolve) => {
  setTimeout(() => {
    resolve('aaa in 1 second')
  }, 1000)
})
const b = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('bbb in 2 second')
  }, 2000)
})
const c = new Promise((resolve) => {
  setTimeout(() => {
    resolve('ccc in 3 second')
  }, 3000)
})

const d = PromiseAll([a, b, c])

d.then(res => console.log(res)).catch(err => console.log(err))