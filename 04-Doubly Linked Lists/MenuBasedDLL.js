//  Menu-Based Program of Doubly Linked Lists  
const readline = require("readline-sync");

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
    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.prv = null;
        this.length = 0;
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
    changeTheValue(index, value) {
        let temp = this.searchAnNode(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    insertNodeAtIndex(index, value) {
        if (index === 0) return this.insertionAtBegginning(value);
        if (index === this.length) return this.push(value);
        if (index < 0 || index > this.length) return `Index out of Bound`;
        const newNode = new Node(value);
        const before = this.searchAnNode(index - 1);
        const after = before.next;
        before.next = newNode;
        newNode.prv = before;
        newNode.next = after;
        after.prv = newNode;
        this.length++;
        return true;
    }
    removeNodeAtIndex(index) {
        if (index === 0) return this.deletionAtBegginning();
        if (index === this.length) return this.pop();
        if (index < 0 || index >= this.length) {
            return `Index Out of Bound`;
        }
        const temp = this.searchAnNode(index);
        temp.prv.next = temp.next;
        temp.next.prv = temp.prv;
        temp.next = null;
        temp.prv = null;
        this.length--;
        return temp;
    }
}

function Menu() {
    let myDoublyLL = new DoublyLinkedLists(11);
    let ch;
    do {
        console.log("\n Doubly Linked List Operations:");
        console.log("1: Add Element:");
        console.log("2: Remove Element:");
        console.log("3: Insert Element at index:");
        console.log("4: Remove Element at index:");
        console.log("5: Search an Node By Index:");
        console.log("6: Change the value at index:");
        console.log("7: Print List:");
        console.log("8: Get Head:");
        console.log("9: Get Tail:");
        console.log("10: Get Length:");
        console.log("11: Empty List:");
        console.log("0: Exit:");
        ch = parseInt(readline.question("Enter your Choice:"));
        switch (ch) {
            case 1:
                let value = parseInt(readline.question("Enter the value to add:"));
                myDoublyLL.push(value);
                break;
            case 2:
                console.log(`Removed Element:${myDoublyLL.pop().value}`);
                break;
            case 3:
                let index = parseInt(readline.question("Enter index: "));
                let insertValue = parseInt(readline.question("Enter the value to insert:"));
                myDoublyLL.insertNodeAtIndex(index, insertValue);
                break;
            case 4:
                let removeIndex = parseInt(readline.question("Enter the index to remove:"));
                console.log(`Removed Element:${myDoublyLL.removeNodeAtIndex(removeIndex).value}`);
                break;
            case 5:
                let ind = parseInt(readline.question("Enter index: "));
                console.log(`The Node at ${ind} index is ${myDoublyLL.searchAnNode(ind).value}`)
                break;
            case 6:
                let inde = parseInt(readline.question("Enter index: "));
                let val = parseInt(readline.question("Enter the value to insert:"));
                myDoublyLL.changeTheValue(inde, val);
                break;
            case 7:
                myDoublyLL.printList();
                break;
            case 8:
                myDoublyLL.getHead();
                break;
            case 9:
                myDoublyLL.getTail();
                break;
            case 10:
                myDoublyLL.getLength();
                break;
            case 11:
                myDoublyLL.makeEmpty();
                console.log("List Cleared.");
                break;
            case 0:
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid Choice, please try again.");
                break;

        }
    } while (ch !== 0);
}


Menu();

