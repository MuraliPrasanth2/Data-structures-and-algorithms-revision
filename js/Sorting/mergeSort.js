function merge(array1, array2) {
	const mergedSortedArray = new Array(array1.length + array2.length);

	let array1Index = 0;
	let array2Index = 0;

	while (array1Index < array1.length && array2Index < array2.length) {
		if (array1[array1Index] < array2[array2Index]) {
			mergedSortedArray[array1Index + array2Index] = array1[array1Index];
			array1Index++;
		} else {
			mergedSortedArray[array1Index + array2Index] = array2[array2Index];
			array2Index++;
		}
	}

	while (array1Index < array1.length) {
		mergedSortedArray[array1Index + array2Index] = array1[array1Index];
		array1Index++;
	}

	while (array2Index < array2.length) {
		mergedSortedArray[array1Index + array2Index] = array2[array2Index];
		array2Index++;
	}

	return mergedSortedArray;
}

function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}

	let midIndex = Math.floor(array.length / 2);
	let left = mergeSort(array.slice(0, midIndex));
	let right = mergeSort(array.slice(midIndex));

	return merge(left, right);
}

console.clear();
const array = [5, 4, 3, 2, 1];
console.log(array);
sortedArray = mergeSort(array);
console.log(sortedArray);
