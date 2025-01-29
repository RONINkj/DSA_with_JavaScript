// Big O(n^2) - Quadratic Time Complexity - O(n^2) - the number of operations is directly 
// proportional to the square of the size of the input n 
// n*n = n^2 that is why it is called quadratic time complexity
function logItems(n){
    for (let i = 0; i <n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`I & J are : ${i} & ${j}`);
        }
    }
}
logItems(5); 

// Big O(n^3) - Cubic Time Complexity - O(n^3) - the number of operations is directly is also called quadratic time complexity .it always comes under 
// Big O(n^2) - Quadratic Time Complexity - O(n^2) - the number of operations is directly proportional to the square of the size of the input n
function logItems(n){
    for (let i = 0; i <n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                console.log(`I & J & K are : ${i} & ${j} & ${k}`);
            }
        }
    }
}
logItems(5); 