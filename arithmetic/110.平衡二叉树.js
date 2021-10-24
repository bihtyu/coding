/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 1. 自上而下
// var isBalanced = function(root) {
//   if (!root) return true

//   const left = balance(root.left)
//   const right = balance(root.right)

//   return Math.abs(left - right) < 2 && isBalanced(root.left) && isBalanced(root.right)
// };

// var balance = function(node) {
//   if (!node) return 0

//   const left = balance(node.left)
//   const right = balance(node.right)
//   return 1 + Math.max(left, right)
// }

// ---------------------------------

// 2. 自下而上
var isBalanced = function(root) {
  return balance(root) !== -1
}

var balance = function(node) {
  if (!node) return 0
  
  const left = balance(node.left)
  const right = balance(node.right)

  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
    return -1
  }

  return 1 + Math.max(left, right)
}
// @lc code=end
