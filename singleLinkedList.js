
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
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
        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if (this.length === 0) {
        this.tail = null;
        }
        return currentHead;
    }

    pop() {
        if (!this.head) {
            return undefined;
        } else if (this.length == 1) {
            let targetNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return targetNode;
        } else {
            let current = this.head;
            let targetNode = this.tail;
            while (current.next.next != null) {
                current = current.next;
            }
            this.tail = current;
            this.tail.next = null;
            this.length--;
            return targetNode;
        }
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        } else if (index == 0) {
            return this.head;
        } else if (index == this.length - 1) {
            return this.tail;
        } else {
            let counter = 0;
            let current = this.head;
            while (index != counter) {
                current = current.next;
                counter++;
            }
            return current;
        }
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        } else if (index == 0) {
            return this.shift()
        } else if (index == this.length - 1) {
            return this.pop()
        } else {
            let previousNode = this.get(index - 1);
            let targetNode = previousNode.next;
            previousNode.next = targetNode.next;
            this.length--;
            return targetNode;
        }
    }
}

let singlyLinkedList = new SinglyLinkedList();
console.log(singlyLinkedList.push(10).push(20).push(30).push(40));
console.log(singlyLinkedList);
