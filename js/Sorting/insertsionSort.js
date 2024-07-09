function insersetionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j;
        for (j = i - 1; arr[j] > temp && j >= 0; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
}

console.clear();
const arr1 = [5, 4, 3, 2, 1];
const arr2 = [];
const arr3 = [2, 1];
insersetionSort(arr1);
insersetionSort(arr2);
insersetionSort(arr3);
console.log(arr1);
console.log(arr2);
console.log(arr3);
