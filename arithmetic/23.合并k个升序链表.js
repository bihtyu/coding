/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个升序链表
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 22:10
var mergeKLists = function(lists) {
  if (lists.length === 0) return null
  if (lists.length === 1) return lists[0]

  while(lists.length > 1) {
    lists.push(mergeTwoList(lists.shift(), lists.shift()))
  }

  return lists[0]
};

var mergeTwoList = function(l1, l2) {
  const target = new ListNode(null)
  let cur = target

  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1
      l1 = l1.next
    } else {
      cur.next = l2
      l2 = l2.next
    }
    cur = cur.next
  }
  cur.next = l1 || l2

  return target.next
}
// @lc code=end
