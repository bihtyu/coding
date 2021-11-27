/*
 * @lc app=leetcode.cn id=519 lang=javascript
 *
 * [519] 随机翻转矩阵
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 */
var Solution = function(m, n) {
  this.cache = new Set()
  this.m = m
  this.n = n
  this.max = m * n
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function() {
  let random = Math.floor(Math.random() * this.max)

  while(this.cache.has(random)) {
    random = Math.floor(Math.random() * this.max)
  }
  this.cache.add(random)

  return [Math.floor(random / this.n), random % this.n]
}

/**
 * @return {void}
 */
Solution.prototype.reset = function() {
  this.cache.clear()
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
// @lc code=end
