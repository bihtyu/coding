/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
// hash
var canConstruct = function(ransomNote, magazine) {
  const magazineHash = getStrHash(magazine)

  for (const str of ransomNote) {
    if (!magazineHash[str]--) return false
  }

  return true
}

var getStrHash = function(str) {
  if (!str) return null

  return str.split('').reduce((obj, k) => {
    obj[k] = obj[k] ? obj[k] + 1 : 1
    return obj
  }, {})
}

// array
// var canConstruct = function(ransomNote, magazine) {
//   const list = new Array(26)
//   const base = 'a'.charCodeAt()

//   for (const str of magazine) {
//     const index = str.charCodeAt() - base
//     list[index] = list[index] ? list[index] + 1 : 1
//   }

//   for (const str of ransomNote) {
//     const index = str.charCodeAt() - base
//     if (!list[index]--) return false
//   }

//   return true
// }
