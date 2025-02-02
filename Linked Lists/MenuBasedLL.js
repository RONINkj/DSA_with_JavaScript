const readline = require("readline-sync"); 
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
function Menu() {
    let myLinkedList = new LinkedList(11);
    let ch;
    do {
        console.log("\n Linked List Operations:");
        console.log("1: Add Element:");
        console.log("2: Remove Element:");
        console.log("3: Insert Element at index:");
        console.log("4: Remove Element at index:");
        console.log("5: Print List:");
        console.log("6: Get Head:");
        console.log("7: Get Tail:");
        console.log("8: Get Length:");
        console.log("9: Get Reverse List:");
        console.log("10: Empty List:");
        console.log("0: Exit:");
        ch=parseInt(readline.question("Enter your Choice:"));
        switch(ch){
            case 1:
                let value=parseInt(readline.question("Enter the value to add:"));
                myLinkedList.push(value);
                break;
            case 2:
                console.log(`Removed Element:${myLinkedList.pop().value}`);
                break;
            case 3:
                let index=parseInt(readline.question("Enter index: "));
                let insertValue=parseInt(readline.question("Enter the value to insert:"));
                myLinkedList.insertNodeAtIndex(index,insertValue);
                break;
            case 4:
                let removeIndex=parseInt(readline.question("Enter the index to remove:"));
                console.log(`Removed Element:${myLinkedList.removeAtIndex().value}`);
                break;
            case 5:
                myLinkedList.printList();
                break;
            case 6:
                myLinkedList.getHead();
                break;
            case 7:
                myLinkedList.getTail();
                break;
            case 8:
                myLinkedList.getLength();
                break;
            case 9:
                myLinkedList.reverse();
                console.log("List Reverse.");
                break;
            case 10:
                myLinkedList.makeEmpty();
                console.log("List Cleared.");
                break;
            case 0:
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid Choice, please try again.");
                break;

        }
    } while ( ch!==0);
}


Menu();

