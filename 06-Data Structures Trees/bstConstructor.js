class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}

class BST{
    constructor(){
        // const newNode=new newNode(value); 
        // this.root=newNode;
        this.root=null;
    }
}

function Test(){
    const myTree=new BST();
    if (myTree.root === null) {
        console.log("Root: null");
    } else {
        console.log("Root:", myTree.root.value);
    }
     
}
Test()