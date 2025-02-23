class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Queue{
    constructor(value){
        const newNode=new Node(value);
        this.first=newNode;
        this.last=newNode;
        this.length=1;
    }
    printQueue(){
        const array=[]
        let currentNode=this.first;
        if(this.length==0){
            return`Queue is Empty`
        }
        else{
            while(currentNode){
                array.push(currentNode.value);
                currentNode=currentNode.next;
            }
        }
        console.log(array);
        
    }
    getFirst() {
        if (this.first === null) {
            console.log("First: null");
        } else {
            console.log("First: " + this.first.value);
        }
    }
    
    getLast() {
        if (this.last === null) {
            console.log("Last: null");
        } else {
            console.log("Last: " + this.last.value);
        }
    }
    makeQueueEmpty(){
        this.first=null;
        this.last=null;
        this.length=0;
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    enqueue(value){
        const newNode=new Node(value);
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        this.length++;
        return this;
    }
    
    dequeue(){
        let temp=this.first;
        if(!this.first) return `Queue is Empty`
        if(this.length===1){
            this.first=null;
            this.last=null;
        }else{
            this.first =this.first.next;
            temp.next=null;

        }
        this.length--;
        return temp;
    }

}
function Test(){
    const myQueue =new Queue(2);
    
    myQueue.enqueue(1);

    // (2) Items - Returns 2 Node
    if (myQueue.length !== 0) {
        console.log(myQueue.dequeue().value);
    } else {
        console.log("undefined");
    }

    // (1) Item - Returns 1 Node
    if (myQueue.length !== 0) {
        console.log(myQueue.dequeue().value);
    } else {
        console.log("undefined");
    }

    // (0) Items - Returns undefined
    if (myQueue.length !== 0) {
        console.log(myQueue.dequeue().value);
    } else {
        console.log("undefined");
    }
}
Test()
