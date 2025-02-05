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
    const newNode=new Node(value);
    this.head=newNode;
    this.tail=newNode;
    this.length=1;
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
    
    push(value){
        const newNode=new Node(value);
        if (!this.head) {
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            newNode.prv=this.tail;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

}

function test(){
    const myDoublyLL=new DoublyLinkedLists(7)
    myDoublyLL.push(11)
    myDoublyLL.push(1)
    console.log("\nDoubly Linked List:");
    myDoublyLL.printList();
    
    
}

test();