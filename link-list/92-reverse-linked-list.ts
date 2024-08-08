class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (head === null || head.next === null) return head;

  if (left === right) return head;

  let count = 0;
  let p1Last: ListNode | null = null;
  let p2First: ListNode | null = null;

  let stack: number[] = [];

  let temp = head;

  while (temp !== null && count <= right) {
    count++;

    if (count < left) p1Last = temp;

    if (count >= left && count <= right) {
      stack.push(temp.val);
    }

    if (count === right) {
      p2First = temp.next;
      break;
    }

    temp = temp.next as ListNode;
  }

  console.log(p1Last, p2First, stack);

  for (let i = 0; i < stack.length; i++) {
    p2First = new ListNode(stack[i], p2First);
  }

  console.log(p2First);

  if (p1Last) p1Last.next = p2First;
  else return p2First;

  return head;
}
