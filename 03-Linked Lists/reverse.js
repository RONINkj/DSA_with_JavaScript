    
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
    searchAnNode(index){
        if (index<0 || index>=this.length) {
            return undefined
        }
        let temp=this.head
        for (let i = 0; i <index; i++) {
                temp=temp.next
        }
        return temp
    }
    changeTheValue(index,value){
        let temp =this.searchAnNode(index)
        if (temp) {
            temp.value=value
            return true
        } 
            return false
    }
    insertNodeAtIndex(index,value){
        if ( index===0) {
            return this.insertAtBeginning(value)
        }else if ( index===this.length) {
            return this.push(value)
        }else if ( index<0 || index >this.length) {
            return false
        }
        const newNode=new Node(value)
        const temp=this.searchAnNode(index-1)
        newNode.next=temp.next
        temp.next=newNode 
        this.length++
        return true 
    }
    removeAtIndex(index){
        if (index===0) {
            return this.deletionAtBeginning()            
        }else if (index===this.length-1) {
            return this.pop()            
        }else if (index<0 || index>= this.length) {
            return undefined
        }
        const prv=this.searchAnNode(index-1)
        const temp=prv.next
        prv.next=temp.next
        temp.next=null
        this.length--
        return temp
    }
    reverse(){
        let temp=this.head
        this.head=this.tail
        this.tail=temp
        let next =temp.next
        let prv=null
        for (let i = 0; i < this.length; i++) {
            next=temp.next
            temp.next=prv
            prv=temp
            temp=next 
        }
        return this 
    }
    
}
function test() {
    let myLinkedList = new LinkedList(11);
    myLinkedList.push(3)
    myLinkedList.push(23)
    myLinkedList.push(7)
    myLinkedList.push(10)
    console.log("LL before reverse():");
    myLinkedList.printList();

    myLinkedList.reverse();

    console.log("\nLL after reverse():");
    myLinkedList.printList();
}


test();

