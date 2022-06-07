class ListNode {
  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

class ArrayToListNode {
  constructor (array) {
    this.array = array
  }

  transform() {
    if (!Array.isArray(this.array) || this.array.length === 0) throw new Error('参数异常')

    const target = new ListNode(-1, null)
    let current = target

    while(this.array.length) {
      current.next = new ListNode(this.array.shift(), null)
      current = current.next
    }

    return target.next
  }
}

module.exports = ArrayToListNode