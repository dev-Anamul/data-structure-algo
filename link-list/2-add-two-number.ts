class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let num1Str = "";
  let num2Str = "";

  let temp1 = l1;
  while (temp1 !== null) {
    num1Str = temp1?.val + num1Str;
    temp1 = temp1?.next as ListNode;
  }

  let temp2 = l2;
  while (temp2 !== null) {
    num2Str = temp2?.val + num2Str;
    temp2 = temp2?.next as ListNode;
  }

  let sum = BigInt(num1Str) + BigInt(num2Str);
  console.log(sum, num1Str, num2Str);

  let sumArr = sum.toString().split("");

  let head: ListNode | null = null;
  for (let s of sumArr) {
    if (s !== "n") head = new ListNode(parseInt(s) || 0, head);
  }

  return head;
}
