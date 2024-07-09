function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 1; j < i; j++) {
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
            }
        }
    }
}

function swap(arr, index1, index2) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

console.clear();
const arr1 = [5, 4, 3, 2, 1];
const arr2 = [];
const arr3 = [2, 1];
bubbleSort(arr1);
bubbleSort(arr2);
bubbleSort(arr3);
console.log(arr1);
console.log(arr2);
console.log(arr3);
