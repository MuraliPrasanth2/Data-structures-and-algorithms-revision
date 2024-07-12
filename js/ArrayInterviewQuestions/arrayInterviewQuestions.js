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

function maxProfit(prices) {
	let maxProfit = 0;
	let l = 0;
	for (let r = 1; r < prices.length; r++) {
		if (prices[l] > prices[r]) {
			l = r;
			continue;
		}

		const profit = prices[r] - prices[l];
		if (profit > maxProfit) {
			maxProfit = profit;
		}
	}
	return maxProfit;
}

function rotate(nums, k) {
	reverseFromTo(nums);
	k = ((k % nums.length) + nums.length) % nums.length;
	reverseFromTo(nums, 0, k - 1);
	reverseFromTo(nums, k);
}

function reverseFromTo(nums, from = 0, to = nums.length - 1) {
	while (from < to) {
		swap(nums, from++, to--);
	}
}

function maxSubarray(nums) {
	if (nums.length === 0) {
		return 0;
	}

	let currentSum = 0;
	let maxSum = nums[0];
	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];
		if (currentSum < 0) {
			currentSum = 0;
			continue;
		}

		if (currentSum > maxSum) {
			maxSum = currentSum;
		}
	}

	return maxSum;
}

function maxSubarray2(nums) {
	if (nums.length === 0) {
		return 0;
	}
	let maxSum = nums[0];
	let currentSum = nums[0];
	for (let i = 1; i < nums.length; i++) {
		currentSum = Math.max(nums[i], currentSum + nums[i]);
		maxSum = Math.max(maxSum, currentSum);
	}
	return maxSum;
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

const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices));

const nums3 = [5, 6, 7, 8];
rotate(nums3, -1);
console.log(nums3);

const nums4 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray(nums4));
const nums5 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubarray2(nums4));
