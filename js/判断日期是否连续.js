const days = [
  '2016-02-28',
  '2016-02-29', // 闰月
  '2016-03-01', // 跨月
  '2016-03-02',
  '2016-03-03',
  '2016-03-04'
]

function validate(days) {
  const ONE_DAY_MILLISECOND = 24 * 60 * 60 * 1000
  const times = days.map(item => new Date(item).getTime()).sort((a, b) => a - b)
  
  for (let i = 1 ; i < times.length; i++) {
    if (times[i] - times[i - 1] !== ONE_DAY_MILLISECOND) {
      return false
    }
  }
  return true
}

console.log(validate(days))