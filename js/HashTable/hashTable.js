class HashTable {
    constructor(size) {
        this.dataMap = new Array(size);
        this.size = size;
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }

        return hash;
    }

    set(key, value) {
        let index = this._hash(key);

        if (!this.dataMap[index]) {
            this.dataMap[index] = new Array();
        }

        const bucket = this.dataMap[index];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
    }

    get(key) {
        let index = this._hash(key);

        const bucket = this.dataMap[index];

        if (!bucket) {
            return;
        }

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
    }

    keys() {
        let keys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            const bucket = this.dataMap[i];
            if (bucket) {
                for (let j = 0; j < bucket.length; j++) {
                    keys.push(bucket[j][0]);
                }
            }
        }

        return keys;
    }
}

function itemInCommon(arr1, arr2) {
    const map = {};
    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i]] = true;
    }

    for (let i = 0; i < arr2.length; i++) {
        if (map[arr2[i]]) {
            return true;
        }
    }

    return false;
}

function findDuplicates(arr) {
    const map = {};
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = true;
        } else {
            duplicates.push(arr[i]);
        }
    }

    return duplicates;
}

function firstNonRepeatingCharacter(input) {
    const charCount = {};
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (!charCount[char]) {
            charCount[char] = 1;
        } else {
            charCount[char] += 1;
        }
    }

    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

function groupAnagrams(strings) {
    const anagramGroups = new Map();

    for (const string of strings) {
        const chars = Array.from(string);
        chars.sort();
        const canonical = chars.join("");

        if (anagramGroups.has(canonical)) {
            anagramGroups.get(canonical).push(string);
        } else {
            anagramGroups.set(canonical, [string]);
        }
    }

    return Array.from(anagramGroups.values());
}

function twoSum(nums, target) {
    const index = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (index.has(diff)) {
            return [index.get(diff), i];
        } else {
            index.set(num, i);
        }
    }

    return [];
}

function subarraySum(nums, target) {
    let sum = 0;
    const indexSum = new Map();
    indexSum.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        const diff = sum - target;
        if (indexSum.has(diff)) {
            return [indexSum.get(diff) + 1, i];
        }
        indexSum.set(sum, i);
    }

    return [];
}

function removeDuplicates(list) {
    return Array.from(new Set(list));
}

function hasUniqueChars(string) {
    return string.length === new Set(string).size;
}

function hasUniqueChars(string) {
    const charSet = new Set();

    for (let i = 0; i < string.length; i++) {
        const ch = string[i];
        if (charSet.has(ch)) {
            return false;
        }

        charSet.add(ch);
    }

    return true;
}

function findPairs(arr1, arr2, target) {
    const pairs = [];

    const arr2Set = new Set(arr2);
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        const diff = target - element;
        if (arr2Set.has(diff)) {
            pairs.push([element, diff]);
        }
    }

    return pairs;
}

function longestConsecutiveSequence(nums) {
    const setNums = new Set(nums);
    const seen = new Set();
    let longestLength = 0;

    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        if (seen.has(currentNum)) {
            continue;
        }

        let num = currentNum;
        let length = 1;
        seen.add(num);
        while (true) {
            if (setNums.has(++num)) {
                seen.add(num);
                length++;
            } else {
                break;
            }
        }

        num = currentNum;
        while (true) {
            if (setNums.has(--num)) {
                seen.add(num);
                length++;
            } else {
                break;
            }
        }

        longestLength = Math.max(length, longestLength);
    }

    return longestLength;
}

console.clear();
let hashTable = new HashTable(7);
hashTable.set("name", "murali");
hashTable.set("age", 31);
hashTable.set("bolts", 31);
hashTable.set("washers", 28);
console.log(hashTable);
console.log(hashTable.get("name"));
console.log(hashTable.get("age"));
console.log(hashTable.get("bolts"));
console.log(hashTable.get("washers"));
console.log(hashTable.keys());
console.log(itemInCommon([1, 3, 5], [2, 4, 6]));
console.log(itemInCommon([1, 3, 5], [2, 4, 5]));
console.log(findDuplicates([1, 2, 3, 4, 5]));
console.log(findDuplicates([1, 2, 2, 3, 4]));
console.log(findDuplicates([1, 1, 2, 2, 3, 4]));
console.log(firstNonRepeatingCharacter("abcde"));
console.log(firstNonRepeatingCharacter("aabbccdef"));
console.log(firstNonRepeatingCharacter("aabbcc"));
console.log(firstNonRepeatingCharacter(""));
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3, 11, 15], 6));
console.log(twoSum([2, 7, 11, 15], 30));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
console.log(twoSum([], 0));
console.log(subarraySum([1, 4, 20, 3, 10, 5], 33));
console.log(subarraySum([1, 2, 3], 3));
console.log(longestConsecutiveSequence([1, 2, 3, 4, 5]));
console.log(longestConsecutiveSequence([1, 3, 5, 2, 4]));
console.log(longestConsecutiveSequence([2, 1, 4, 7, 3]));
console.log(longestConsecutiveSequence([9, 1, 3, 10, 2, 20, 21]));
console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutiveSequence([]));
