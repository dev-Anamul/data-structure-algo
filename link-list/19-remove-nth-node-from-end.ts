class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let len = 0;
  let temp = head;

  while (temp !== null) {
    len++;
    temp = temp.next;
  }

  let nthNode = len - n + 1;
  let count = 0;

  let prev: ListNode | null = null;
  let temp2 = head;
  while (temp2 !== null) {
    if (nthNode === 1) {
      head = head?.next as ListNode;
      return head;
    }

    count++;
    if (count === nthNode) {
      if (prev !== null) {
        prev.next = temp2?.next as ListNode;
      }
    }
    prev = temp2;
    temp2 = temp2.next;
  }

  return head;
}
