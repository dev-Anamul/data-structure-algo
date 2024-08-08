class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  head: ListNode | null;
  constructor() {
    this.head = null;
  }

  get(index: number): number {
    if (index < 0) return -1;

    let i = 0;
    let temp: ListNode | null = this.head;
    while (i < index && temp) {
      temp = temp.next as ListNode;
    }

    if (temp) return temp.val;

    return -1;
  }

  addAtHead(val: number): void {
    let temp = new ListNode(val, this.head);
    this.head = temp;
  }

  addAtTail(val: number): void {
    if (this.head === null) {
      let n = new ListNode(val);
      this.head = n;
      return;
    }

    let temp = this.head;
    while (temp?.next !== null) {
      temp = temp?.next as ListNode;
    }
    let n = new ListNode(val);
    temp.next = n;
  }

  addAtIndex(index: number, val: number): void {
    if (index === 0) {
      this.head = new ListNode(val, this.head);
      return;
    }

    let i = 0;
    let temp = this.head;

    while (temp !== null) {
      if (i === index - 1) {
        if (temp) temp.next = new ListNode(val, temp?.next);
        break;
      }
      i++;
      temp = temp?.next as ListNode;
    }
  }

  deleteAtIndex(index: number): void {
    if (index === 0) {
      this.head = this.head?.next as ListNode;
      return;
    }

    let i = 0;
    let temp = this.head;

    while (temp !== null) {
      if (i == index - 1) {
        temp.next = temp.next?.next as ListNode;
        break;
      }
      i++;
      temp = temp.next;
    }
  }
}

var obj = new MyLinkedList();

obj.addAtHead(1);
obj.addAtHead(2);
obj.addAtHead(3);
obj.addAtIndex(3, 0);
obj.deleteAtIndex(2);
obj.addAtHead(6);
obj.addAtTail(4);
console.log(obj.get(4));
obj.addAtHead(4);
// obj.addAtIndex(5, 0);
// obj.addAtHead(6);

console.log(obj.head?.next?.next);
