/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU 缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.caches = new Map()
  this.capacity = capacity
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const match = this.find(key)
  if (match) {
    this.caches.delete(key)
    this.caches.set(key, match + '')
    return match
  } else {
    return -1
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const match = this.find(key)
  if (match) {
    this.caches.delete(key)
    this.caches.set(key, value + '')
  } else {
    if (this.caches.size >= this.capacity) {
      this.caches.delete(this.caches.keys().next().value)
    }
    this.caches.set(key, value + '')
  }
};

LRUCache.prototype.find = function(key) {
  return this.caches.get(key)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

