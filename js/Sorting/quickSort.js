function swap(array, index1, index2) {
	const temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

function pivot(array, start = 0, end = array.length) {
	const pivot = start;
	let swapIndex = pivot;
	for (let i = pivot + 1; i <= end; i++) {
		if (array[i] < array[pivot]) {
			swap(array, ++swapIndex, i);
		}
	}

	swap(array, swapIndex, pivot);
	return swapIndex;
}

function quickSort(array, left = 0, right = array.length - 1) {
	if (left >= right) {
		return;
	}
	let pivotIndex = pivot(array, left, right);
	quickSort(array, left, pivotIndex - 1);
	quickSort(array, pivotIndex + 1, right);
}

console.clear();
const array = [4, 6, 1, 7, 3, 2, 5];
quickSort(array);
console.log(array);
