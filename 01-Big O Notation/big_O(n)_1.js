//Big O(n) - Linear Time Complexity - O(n) - the number of operations is directly proportional to the size of the input n

// THis function has a linear time complexity of O(n) because the number of operations is directly
// proportional to the size of the input n. The function will log the value of i for each iteration of the
// loop, so the number of operations is directly proportional to the size of the input n. As n grows, the 
// number of operations grows proportionally.

function logItems(n){ 
    for (let i = 0; i < n; i++) {
        console.log(` I is : ${i}`);
    }
    for (let  j = 0;  j <n;  j++) { // this loop is also O(n) because it is also directly proportional to the size of the input n
    console.log(` J is : ${j}`);
    }
}
logItems(10);