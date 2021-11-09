/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归
var swapPairs = function(head) {
  if (!head || !head.next) return head

  let one = head, two = one.next, three = two.next

  two.next = one
  one.next = swapPairs(three)

  return two
}

// 迭代
// var swapPairs = function(head) {
//   if (!head) return null

//   const target = new ListNode(0, head)
//   let cur = target

//   while(cur.next && cur.next.next) {
//     const node1 = cur.next
//     const node2 = cur.next.next

//     cur.next = node2
//     node1.next = node2.next
//     node2.next = node1

//     cur = node1
//   }

//   return target.next
// }
// @lc code=end
