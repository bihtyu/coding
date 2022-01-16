/*
 * @lc app=leetcode.cn id=382 lang=typescript
 *
 * [382] 链表随机节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 1. O(n), O(1)
// class ListNode {
//   val: number
//   next: ListNode | null

//   constructor(val?: number, next?: ListNode | null) {
//     this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
//   }
// }

// class Solution {
//   head: ListNode;
//   length: number;

//   constructor(head: ListNode | null) {
//     this.head = head;
//     this.length = this.getListLength();
//   }

//   getRandom(): number {
//     const random = Math.floor(Math.random() * this.length);
//     return this.getNodeByIndex(random);
//   }

//   getListLength(): number {
//     if (!this.head) return 0;

//     let cur = this.head;
//     let count = 0;
//     while(cur) {
//       count++;
//       cur = cur.next;
//     }

//     return count;
//   }

//   getNodeByIndex(index: number): number {
//     let cur = this.head;
//     while(index--) {
//       cur = cur.next;
//     }
//     return cur.val;
//   }
// }

// 水塘抽样（空间小，时间复杂度低，可以用于大数据流中的随机抽样问题）
class Solution {
  head: ListNode;

  constructor(head: ListNode | null) {
    this.head = head;
  }

  getRandom(): number {
    let cur = this.head;
    let i = 0;
    let res;
    while(cur) {
      if (Math.floor(Math.random() * (++i)) === 0) {
        res = cur.val;
      }
      cur = cur.next;
    }

    return res;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end

