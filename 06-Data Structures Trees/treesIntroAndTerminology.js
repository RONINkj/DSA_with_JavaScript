/*
----Trees are a fundamental data structure in computer science, used to represent hierarchical relationships.

Here's an overview of trees:

--Basic Concepts
Node: The fundamental element of a tree. Each node can have a value and links to other nodes.
Root: The topmost node of a tree.
Edge: The link between two nodes.
Parent and Child: A parent node is directly connected to one or more child nodes.
Leaf: A node with no children.
Subtree: A tree consisting of a node and its descendants.


---- Binary Trees
A binary tree is a tree data structure in which each node has at most two children ,referred to as the left child and the right child .

--Properties of binary tree :-
1-Structure:Each node in a binary tree can have zero or two children .
2- Levels :the root is at level 0,its children at level 1 and so on. 
3- Height: the height of a tree is the number of edges on the longest path from the root
to a leaf.

--Types of Binary tree:-
1- Full Binary Tree: Every node has either 0 or 2 children.
2- Complete Binary tree: All levels are fully filled except possibl the last level which is filled from left to right.
3- Perfect Binary Tree: All levels are fully filled ,and  all leaves are at the same level
4. Balacnced Binary Tree: The height of the two child subtree of any node differ by at.

--Operations on Binary Trees
-Insertion: Adding a new node to the tree.
-Deletion: Removing a node from the tree.

-Traversal:
-Pre-order: Visit the root, then the left subtree, then the right subtree.
-In-order: Visit the left subtree, then the root, then the right subtree.
-Post-order: Visit the left subtree, then the right subtree, then the root.
-Level-order: Visit nodes level by level from top to bottom.

----Binary Search Tree (BST)
--A Binary Search Tree (BST) is a type of binary tree where each node follows the binary search property:

-The left subtree of a node contains only nodes with values less than the node's value.
-The right subtree of a node contains only nodes with values greater than the node's value.
-Both the left and right subtrees must also be binary search trees.

--Operations on BST

-Insertion: New values are inserted into the tree while maintaining the binary search property.
-Search: Efficient search operations can be performed, with an average time complexity of 
O(log n) for balanced trees.

-Deletion: Nodes can be deleted while maintaining the binary search property.

-Traversal: Similar to binary trees, BSTs can be traversed in pre-order, in-order, and post-order.


----Comparison of Big O with BST and Linked List  

--Search: BSTs are generally more efficient for searching, especially balanced BSTs, which offer O(logn) complexity compared to O(n) for linked lists.

--Insertion and Deletion: Linked lists can be more efficient for insertion and deletion if the position is known, offering 
O(1) complexity. However, BSTs provide more structured data organization, which can be beneficial for other operations like range queries.

--Space Complexity: Both data structures have a space complexity of O(n), but BSTs require additional space for pointers to child nodes.


*/ 