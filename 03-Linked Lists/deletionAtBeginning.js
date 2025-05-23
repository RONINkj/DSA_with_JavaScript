class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        console.log("Linked List:");
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
        this.length = 0;
    }
    push(value){
        const newNode=new Node(value)
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++
        return this;
    }
    pop(){
        if (!this.head) {
            return undefined;
        }
        let temp=this.head
        let prv=this.head
        while(temp.next){
            prv=temp
            temp=temp.next
        }
        this.tail=prv
        this.tail.next=null
        this.length--
        if(this.length===0){
            this.head=null
            this.tail=null
        } 
        return temp
    }

    insertAtBeginning(value){
        const newNode=new Node(value)
        if (!this.head) {
            this.head=newNode
            this.tail=newNode
        }else{
            newNode.next=this.head
            this.head=newNode
        }
        this.length++
        return this
    }

    deletionAtBeginning(){
        if (!this.head) {
            return undefined
        }
        let temp=this.head
        this.head=this.head.next
        temp.next=null
        this.length--
        if(this.length===0){
            this.tail=null
        }
        return temp
    }
}
 

function test() {
    let myLinkedList = new LinkedList(2);
    myLinkedList.push(1)
        // (2) Items in LL - Returns 2 Node
        if (myLinkedList.length !== 0) {
            console.log(myLinkedList.deletionAtBeginning().value);
        } else {
            console.log("null");
        }
    
        // (1) Item in LL - Returns 1 Node
        if (myLinkedList.length !== 0) {
            console.log(myLinkedList.deletionAtBeginning().value);
        } else {
            console.log("null");
        }
    
        // (0) Items in LL - Returns null
        if (myLinkedList.length !== 0) {
            console.log(myLinkedList.deletionAtBeginning().value);
        } else {
            console.log("null");
        }    
}


test();

