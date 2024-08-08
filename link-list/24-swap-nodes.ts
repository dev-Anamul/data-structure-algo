class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let first: ListNode | null = head;
  let second: ListNode | null = head.next;

  while (first !== null && second !== null) {
    let data = first.val;
    first.val = second.val;
    second.val = data;

    first = second.next;

    if (first !== null && first.next !== null) {
      second = first.next;
    } else break;
  }

  return head;
}
