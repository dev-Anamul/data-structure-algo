class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let count = 0;
  let temp: ListNode | null = head;

  while (temp) {
    count++;
    temp = temp.next;
  }

  if (count == 1) return null;

  let mid = count % 2 === 1 ? Math.ceil(count / 2) : count / 2 + 1;
  count = 0;
  temp = head;

  while (temp) {
    count++;

    if (count === mid - 1) {
      temp.next = temp.next?.next as ListNode;
      break;
    }

    temp = temp.next;
  }

  return head;
}
