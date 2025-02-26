class Node{
    constructor(value){
        this.value=value;
        this.right=null;
        this.left=null;
    }
}

class BST{
    constructor(){
        this.root=null;
    }

    insert(value){
        const newNode=new Node(value);
        if(!this.root){
            this.root=newNode;
            return this;
        }else{
            let temp =this.root;
            while (true) {
                if ( newNode.value===temp.value) return undefined; 
                if (temp.value>newNode.value) {
                    if (!temp.right) {
                        temp.right=newNode;
                        return this;
                    }
                    temp=temp.right;
                }else{
                    if (!temp.left) {
                        temp.left=newNode;
                        return this;
                    }
                    temp=temp.left;
                }
            }

        }
    }
}

function Test(){
    let myBST=new BST()
    myBST.insert(2);
    myBST.insert(1);
    myBST.insert(3);

    /*
        THE LINES ABOVE CREATE THIS TREE:
                     2
                    / \
                   1   3
    */


    console.log("Root:", myBST.root.value);
    console.log("\nRoot->Left:", myBST.root.left.value);
    console.log("\nRoot->Right:", myBST.root.right.value);
}
Test();
