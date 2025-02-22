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

}

function test(){
    const myStack =new Stack(10);
    
    console.log("Before push():");
    console.log("--------------");
    myStack.getTop();
    myStack.getLength();

    console.log("\nStack:");
    myStack.printStack();

    myStack.push(1);

    console.log("\n\nAfter push():");
    console.log("-------------");
    myStack.getTop();
    myStack.getLength();

    console.log("\nStack:");
    myStack.printStack();
}
test();