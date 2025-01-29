// Big O drop non-dominants - O(n^2) + O(n) = O(n^2) - the number of operations is directly proportional to the square of the size of the input n
// where O(n^2) is dominant over O(n) so we drop O(n) and the time complexity is O(n^2) 

function logItems(n){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(`I & J are : ${i} & ${j}`); // O(n^2)-- this is a quadratic time complexity
        }
    }
    for (let k = 0; k < array.length; k++) {
        console.log(`K is : ${k}`); // O(n)-- this is a linear time complexity
    }
}