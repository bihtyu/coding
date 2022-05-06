/*
 * @lc app=leetcode.cn id=933 lang=typescript
 *
 * [933] 最近的请求次数
 */

// @lc code=start
// -_-
// class RecentCounter {
//   public stack: number[]

//   constructor() {
//     this.stack = []
//   }

//   ping(t: number): number {
//     this.stack.push(t);
//     return this.getTotal()
//   }

//   getTotal(): number {
//     if (this.stack.length <= 1) {
//       return 1
//     } else {
//       let res = 1
//       const len = this.stack.length;
//       const max = this.stack[len - 1]
//       const min = max - 3000

//       for (let i = len - 2; i >= 0; i--) {
//         if (this.stack[i] <= max && this.stack[i] >= min) {
//           res++
//         } else {
//           this.stack = this.stack.slice(i + 1)
//           break;
//         }
//       }
//       return res
//     }
//   }
// }

// not bad
class RecentCounter {
    public stack: number[]

    constructor() {
      this.stack = []
    }

    ping(t: number): number {
      this.stack.push(t)
      while(this.stack[0] + 3000 < t) {
        this.stack.shift()
      }
      return this.stack.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
// @lc code=end

