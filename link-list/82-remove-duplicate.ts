class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head == null || head.next == null) return head;
  let obj: { [key: number]: number } = {};

  let temp: ListNode | null = head;

  while (temp) {
    if (obj[temp.val]) obj[temp.val]++;
    else obj[temp.val] = 1;

    temp = temp.next;
  }

  let tempArr: number[] = [];

  for (let [k, v] of Object.entries(obj)) {
    if (v === 1) tempArr.push(+k);
  }

  if (!tempArr.length) return null;

  tempArr.sort((a, b) => a - b);

  let newHead: ListNode | null = new ListNode(tempArr.pop(), null);
  while (tempArr.length) {
    newHead = new ListNode(tempArr.pop(), newHead);
  }

  return newHead;
}
