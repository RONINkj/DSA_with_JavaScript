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

let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 8, 10];
console.log(merge(arr1, arr2));
