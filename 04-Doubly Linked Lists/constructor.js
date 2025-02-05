// Doubly Linked Lists Constructor

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prv=null;
    }
}

class DoublyLinkedLists{
    constructor(value){
    const newNode=new Node(value)
    this.head=newNode;
    this.tail=newNode;
    this.length=1;
    // return this;
    }

    printList() {
        let temp = this.head;
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

}

function test(){
    const myDoublyLL=new DoublyLinkedLists(7)
    // console.log(myDoublyLL);
    myDoublyLL.getHead();
    myDoublyLL.getTail();
    myDoublyLL.getLength();

    console.log("\nDoubly Linked List:");
    myDoublyLL.printList();
    
    
}

test()