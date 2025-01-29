// Big O different Terms  for inputs a and b - O(a+b) - the number of operations is directly proportional 
// to the sum of the sizes of the inputs a and b 
function logItems(a,b){
    for (let i = 0; i < a; i++) {
        console.log(`I is : ${i}`); //
    }
    for (let j = 0; j < b; j++) {
        console.log(`J is : ${j}`); // O(n)-- this is a linear time complexity
    }
}

logItems(10,5); // O(a+b) - the number of operations is directly proportional to the sum of the sizes of the inputs a and b

// similar to the above example, the time complexity of the following code snippet is O(a*b) - the number of operations is 
// directly proportional to the product of the sizes of the inputs a and b 

// function logItems(a,b){
// for (let i = 0; i < a; i++) {
//     for (let j = 0; j < b; j++) {
//         console.log(`I & J are : ${i} & ${j}`); // O(a*b)-- this is a quadratic time complexity
//     }
// }
// }
// logItems(10,5); // O(a*b) - the number of operations is directly proportional to the product of the sizes of the inputs a and b 