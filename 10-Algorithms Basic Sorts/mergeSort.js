function merge(arr1, arr2) {
    let combined = [];
    let i = j = 0;
    while (i < arr1.length || j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            combined.push(arr1[i]);
            i++;
        } else {
            combined.push(arr2[j]);
            j++;
        }
    }
     while (i < arr1.length) {
        combined.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        combined.push(arr2[j]);
        j++;
    }
   
    return combined;
}

function mergeSort(arr){
    if(arr.length===1) return arr;
    let mid=Math.floor(arr.length/2);
    let left=arr.slice(0,mid);
    let  right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

let arr = [1, 3, 5, 7, 9,2, 4, 6, 8, 10];
console.log(mergeSort(arr));
