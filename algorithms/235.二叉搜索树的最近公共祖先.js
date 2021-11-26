/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 07:03
// 迭代
var lowestCommonAncestor = function(root, p, q) {
  while(root) {
    if ((root.val - p.val) * (root.val - q.val) <= 0) return root
    root = p.val < root.val ? root.left : root.right
  }
}

// 递归
// var lowestCommonAncestor = function(root, p, q) {
//   if ((root.val - p.val) * (root.val - q.val) <= 0) return root
//   return lowestCommonAncestor(p.val < root.val ? root.left : root.right, p, q)
// };
// @lc code=end
