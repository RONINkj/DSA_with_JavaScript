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
                if (newNode.value>temp.value) {
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
}

function Test() {
    let myBST = new BST()
    myBST.insert(47);
    myBST.insert(21);
    myBST.insert(76);
    myBST.insert(18);
    myBST.insert(27);
    myBST.insert(52);
    myBST.insert(82);


    console.log("BST Contains 27:");
    console.log(myBST.searchAnNode(27));

    console.log("\nBST Contains 17:");
    console.log(myBST.searchAnNode(17));
}
Test();
