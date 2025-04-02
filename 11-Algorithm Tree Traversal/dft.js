class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        } else {
            let temp = this.root;
            while (true) {
                if (newNode.value === temp.value) return undefined;
                if (newNode.value > temp.value) {
                    if (!temp.right) {
                        temp.right = newNode;
                        return this;
                    }
                    temp = temp.right;
                } else {
                    if (!temp.left) {
                        temp.left = newNode;
                        return this;
                    }
                    temp = temp.left;
                }
            }

        }
    }

    searchAnNode(value) {
        if (!this.root) return false
        let temp = this.root;
        while (temp) {
            if (value > temp.value) {
                temp = temp.right;
            } else if (value < temp.value) {
                temp = temp.left;
            } else {
                return true
            }
        }
        return false
    }

    minValNode(currentNode) {
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        return currentNode
    }
    BFS() {
        let currentNode = this.root;
        let queue = [];
        let res = [];
        queue.push(currentNode);
        while (queue.length) {
            currentNode = queue.shift();
            res.push(currentNode.value);
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }
        return res;
    }

    DfsPreOrder(){
        let res=[];
        function traverse(currentNode){
            res.push(currentNode.value);
            if(currentNode.left) traverse(currentNode.left);
            if(currentNode.right) traverse(currentNode.right);
        }
        traverse(this.root);
        return res;
    }

    DfsPostOrder(){
        let res=[];
        function traverse(currNode){
            if(currNode.left) traverse(currNode.left);
            if(currNode.right) traverse(currNode.right);
            res.push(currNode.value);
        }
        traverse(this.root);
        return res;
    }
    DfsInOrder(){
        let res=[];
        function traverse(currNode){
            if(currNode.left)traverse(currNode.left);
            res.push(currNode.value);
            if(currNode.right) traverse(currNode.right);
        }
        traverse(this.root);
        return res;
    }
}

function Test() {
    let myBST = new BST();
    myBST.insert(47);
    myBST.insert(21);
    myBST.insert(76);
    myBST.insert(18);
    myBST.insert(27);
    myBST.insert(76);
    myBST.insert(52);
    myBST.insert(82);

    console.log(myBST.DfsPreOrder()); // [47,21,18,27,76,52,82]
    console.log(myBST.DfsPostOrder()); // [18,27,21,52,82,76,47]
    console.log(myBST.DfsInOrder()); // [18,21,27,47,52,76,82]
}
Test();