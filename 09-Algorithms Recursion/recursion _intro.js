/* Recursion is a programming technique where a function calls itself in order to solve a problem. It's particularly useful for problems that
can be broken down into smaller, similar subproblems.

Here's a step-by-step explanation of how recursion works:

Key Concepts
Base Case: This is the condition under which the recursive function stops calling itself. It prevents infinite recursion and
ensures that the function eventually terminates.

Recursive Case: This is where the function calls itself with a modified argument, gradually approaching the base case.

*/


// function openGift(){
//     if (iskajalThere) return kajal; // when this line call it is base case
//     openGift();  // recursive case
// }
// openGift();


function openGift(){
    if (1>2) return `ball`; // when this line call it is base case
    openGift();  // recursive case
}
openGift();