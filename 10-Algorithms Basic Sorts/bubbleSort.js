// const readline = require("readline-sync");
// bubble sort 
function bubbleSort(arr){
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-i-1; j++) {
            if(arr[j]>arr[j+1]){  
                temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

// let arr[]=parseInt(readline.question("Enter the Array:"));
let arr=[5,3,8,4,2];
console.log(bubbleSort(arr));