class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next == null) return head;

  let temp: ListNode | null = head;
  let count = 0;

  while (temp !== null) {
    count++;
    temp = temp.next;
  }

  if (k % count === 0) return head;

  temp = head;
  let newHead: ListNode | null = null;

  let i = 0;
  while (temp?.next !== null) {
    i++;
    if (count - (k % count) === i) {
      newHead = temp?.next as ListNode;

      if (temp) temp.next = null;

      temp = newHead;
    } else temp = temp?.next as ListNode;
  }

  temp.next = head;

  return newHead;
}
