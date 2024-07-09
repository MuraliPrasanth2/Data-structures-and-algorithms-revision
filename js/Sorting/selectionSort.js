function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        swap(arr, min, i);
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
selectionSort(arr1);
selectionSort(arr2);
selectionSort(arr3);
console.log(arr1);
console.log(arr2);
console.log(arr3);
