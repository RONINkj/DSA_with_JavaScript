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
        }else{
            this.head = this.head.next;
            this.head.prv = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }
}

function test() {
    const myDoublyLL = new DoublyLinkedLists(2);
    myDoublyLL.push(1);
    myDoublyLL.push(4);
    myDoublyLL.push(5);
    // (2) Items in LL - Returns 2 Node
    if (myDoublyLL.length !== 0) {
        console.log(myDoublyLL.deletionAtBegginning().value);
    } else {
        console.log("null");
    }

    // (1) Item in LL - Returns 1 Node
    if (myDoublyLL.length !== 0) {
        console.log(myDoublyLL.deletionAtBegginning().value);
    } else {
        console.log("null");
    }

    // (0) Items in LL - Returns null
    if (myDoublyLL.length !== 0) {
        console.log(myDoublyLL.deletionAtBegginning().value);
    }else {
        console.log("null");
    }   
    myDoublyLL.printList(); 
}

test();