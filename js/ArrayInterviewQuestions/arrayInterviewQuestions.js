function removeElement(nums, val) {
	let swapIndex = -1;
	for (let i = 0; i < nums.length; i++) {
		if (val !== nums[i]) {
			swap(nums, ++swapIndex, i);
		}
	}
	return swapIndex + 1;
}

function swap(array, index1, index2) {
	const temp = array[index1];
	array[index1] = array[index2];
	array[index2] = temp;
}

function findMaxMin(array) {
	let max = array[0];
	let min = array[0];

	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element > max) {
			max = element;
		}
		if (element < min) {
			min = element;
		}
	}

	return [max, min];
}

function findLongestString(stringArray) {
	let longestString = "";
	let longestStringLength = 0;
	for (let i = 0; i < stringArray.length; i++) {
		const string = stringArray[i];
		const stringLength = string.length;
		if (stringLength > longestStringLength) {
			longestString = string;
			longestStringLength = stringLength;
		}
	}

	return longestString;
}

function removeDuplicates(nums) {
	let uniqueIndex = -1;
	let currentNum = -Infinity;

	for (let i = 0; i < nums.length; i++) {
		const element = nums[i];
		if (currentNum !== element) {
			nums[++uniqueIndex] = element;
			currentNum = element;
		}
	}

	nums.length = uniqueIndex + 1;
	return nums.length;
}

console.clear();
const nums = [3, 2, 2, 3];
const newNumsLength = removeElement(nums, 3);
console.log(nums);
console.log(newNumsLength);

const array = [3, 2, 4, 1];
console.log(findMaxMin(array));

const strings = ["murali", "Prasanth", "shalini", "priya"];
console.log(findLongestString(strings));

const nums2 = [1, 1, 2, 2, 3];
removeDuplicates(nums2);
console.log(nums2);
