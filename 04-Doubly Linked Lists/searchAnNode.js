// Doubly Linked Lists  

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prv = null;
    }
}

class DoublyLinkedLists {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        console.log("Doubly Linked Lists:");
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prv = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return "Lists is Empty";
        }
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null
        } else {
            this.tail = temp.prv;
            this.tail.next = null;
            temp.prv = null;
        }
        this.length--;
        return temp;
    }

    insertionAtBegginning(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prv = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    deletionAtBegginning() {
        if (!this.head) return "List is empty";
        let temp = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prv = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    searchAnNode(index) {
        if (index < 0 || index >= this.length) {
            return `Index out of bound`;
        }
        let temp = this.head;
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next;
            }
        } else {
            temp = this.tail;
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prv;
            }
        }
        return temp;
    }
}

function test() {
    const myDoublyLL = new DoublyLinkedLists(0);
    myDoublyLL.push(1);
    myDoublyLL.push(2);
    myDoublyLL.push(3);
    myDoublyLL.printList();
    console.log(myDoublyLL.searchAnNode(3).value) // output: 5
    console.log(myDoublyLL.searchAnNode(-1))  // output: index out of bound
    console.log(myDoublyLL.searchAnNode(2).value) // output: 4
    myDoublyLL.printList();
}

test();