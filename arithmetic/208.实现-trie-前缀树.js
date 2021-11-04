/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

var Trie = function() {
  this.tree = Object.create(null)
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.tree

  for (const s of word) {
    !node[s] && (node[s] = Object.create(null))
    node = node[s]
  }

  node.isEnd = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    return !!this.traverse(word).isEnd
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  return !!this.traverse(prefix)
};

Trie.prototype.traverse = function(word) {
  let node = this.tree
  
  for(const s of word) {
    if (node[s]) {
      node = node[s]
    } else {
      return false
    }
  }

  return node
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end

