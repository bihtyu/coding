// https://bigfrontend.dev/problem/create-a-sum

function sum() {
  const args = [].slice.call(arguments)
  let newArgs = []

  const inner = function () {
    newArgs.push(...arguments)
    return inner
  }

  inner.toString = function () {
    const total = [...args, ...newArgs].reduce((i, j) => i + j)
    newArgs = []
    return total
  }

  return inner
}
