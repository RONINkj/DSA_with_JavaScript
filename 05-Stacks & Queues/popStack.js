class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(value){
        const newNode=new Node(value);
        this.top=newNode;
        // this.bottom=newNode;
        this.length=1; 
    }
    printStack(){
        const array=[]
        let currentNode=this.top;
        if(this.length==0){
            return`Stack is Empty`
        }
        else{
            while(currentNode){
                array.push(currentNode.value);
                currentNode=currentNode.next;
            }
        }
        console.log(array);
        
    }
    getTop() {
        if (this.top === null) {
            console.log("Top: null");
        } else {
            console.log("Top: " + this.top.value);
        }
    }
    makeStackEmpty(){
        this.top=null;
        this.length=0;
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    push(value){
        const newNode=new Node(value);
        if (!this.top){
            this.top=newNode;
        }else{
        newNode.next=this.top;
        this.top=newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.top) return `Stack is Empty`;
        let temp = this.top; 
        this.top=this.top.next;
        temp.next=null;
        this.length--;
        return temp;

    }

}

function test(){
    const myStack =new Stack(2);
    myStack.push(1);

    // (2) Items - Returns 1 Node
    if (myStack.length !== 0) {
        console.log(myStack.pop().value);
    } else {
        console.log("undefined");
    }

    // (1) Item - Returns 2 Node
    if (myStack.length !== 0) {
        console.log(myStack.pop().value);
    } else {
        console.log("undefined");
    }

    // (0) Items - Returns undefined
    if (myStack.length !== 0) {
        console.log(myStack.pop().value);
    } else {
        console.log("undefined");
    }
}
test();