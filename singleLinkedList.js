class Node {
    constructor(val) {
        this.val    = val;
        this.next   = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head   = null;
        this.tail   = null;
        this.length = 0;
    }

    push(val) {

        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    shift() {

        // If list is empty
        if (!this.head) return undefined;

        // If list is not empty
        let currentHead     = this.head;
        this.head           = currentHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }


}


let singlyLinkedList = new SinglyLinkedList;
console.log(singlyLinkedList.push(10).push(20).shift());
console.log(singlyLinkedList);


