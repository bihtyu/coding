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
 var detectCycle = function(head) {
  if (!head) return null

  const wm = new WeakMap()
  let target = null

  let fast = head
  let slow = head

  fast = fast.next
  fast = fast ? fast.next : fast

  while(slow && fast) {
    if (wm.get(slow)) {
      target = slow
      break
    }
    wm.set(slow, slow)

    slow = slow.next
    fast = fast.next
  }

  return target
}
// @lc code=end
