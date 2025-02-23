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
        this.length=0;
    }

    getLength() {
        console.log("Length: " + this.length);
    }

}
function Test(){
    const myQueue =new Queue(10);
  
    myQueue.getFirst();
    myQueue.getLast();
    myQueue.getLength();

    console.log("\nQueue:");
    myQueue.printQueue();
}
Test()
