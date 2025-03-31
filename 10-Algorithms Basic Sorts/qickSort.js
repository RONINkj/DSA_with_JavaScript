function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}


function pivot(arr, pivotIndex = 0, endIndex = arr.length - 1) {
    let swapIndex = pivotIndex;
    let pivotValue = arr[pivotIndex];
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (arr[i] < pivotValue) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, pivotIndex, swapIndex)
    return swapIndex;
}
function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;

}
let arr = [4, 6, 1, 7, 3, 2, 5];

console.log(quickSort(arr, 0, arr.length - 1));
