/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// hash - memory - O(n)
// var detectCycle = function(head) {
//   if (!head) return null

//   const wm = new WeakMap()
//   let target = null
//   let cur = head

//   while(cur) {
//     if (wm.get(cur)) {
//       target = cur
//       break
//     }
//     wm.set(cur, cur)
//     cur = cur.next
//   }

//   return target
// }

// fast and slow point - memory - O(1)
var detectCycle = function(head) {
  let slow = head
  let fast = head
  
  while(fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      let cur = head
      while(cur !== slow) {
        cur = cur.next
        slow = slow.next
      }
      return cur
    }
  }

  return null
}
// @lc code=end