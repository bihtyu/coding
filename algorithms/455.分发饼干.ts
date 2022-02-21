/*
 * @lc app=leetcode.cn id=455 lang=typescript
 *
 * [455] 分发饼干
 */

// @lc code=start
// 22:10
function findContentChildren(g: number[], s: number[]): number {
  let res = 0
  g.sort((a, b) => a - b)
  s.sort((a, b) => a - b)

  let i = 0;
  let j = 0;
  while(j <= s.length - 1) {
    if (g[i] <= s[j++]) {
      res++
      i++
    }
  }
  return res
};
// @lc code=end
