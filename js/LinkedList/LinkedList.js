class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	toString() {
		return this.value;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.head = this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	unshift(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	shift() {
		if (this.isEmpty()) {
			return;
		}

		const prevHead = this.head;

		if (this.length === 1) {
			this.head = this.tail = null;
		} else {
			this.head = this.head.next;
			prevHead.next = null;
		}

		this.length--;
		return prevHead.value;
	}

	pop() {
		if (this.isEmpty()) {
			return undefined;
		}

		const prevToTail = this.getPrev(this.tail);
		const prevTail = this.tail;

		if (this.length === 1) {
			this.head = this.tail = null;
		} else {
			prevToTail.next = null;
			this.tail = prevToTail;
		}

		this.length--;
		return prevTail.value;
	}

	getPrev(node) {
		let prev = null;
		let current = this.head;

		while (node != current) {
			if (!current.next) {
				return null;
			}
			prev = current;
			current = current.next;
		}

		return prev;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return null;
		}

		let current = this.head;
		for (let i = 0; i < index; i++) {
			current = current.next;
		}

		return current;
	}

	set(index, value) {
		const node = this.get(index);

		if (node) {
			node.value = value;
		}
	}

	insert(index, value) {
		if (index < 0 || index > this.length) {
			return;
		}

		if (index === 0) {
			return this.unshift(value);
		}

		if (index === this.length) {
			return this.push(value);
		}

		const prev = this.get(index - 1);
		const newNode = new Node(value);
		newNode.next = prev.next;
		prev.next = newNode;
		this.length++;
		return this;
	}

	remove(index) {
		if (index < 0 || index >= this.length) {
			return;
		}

		if (index === 0) {
			return this.shift();
		}

		if (index === this.length - 1) {
			return this.pop();
		}

		const before = this.get(index - 1);
		const itemToRemove = before.next;
		before.next = itemToRemove.next;
		itemToRemove.next = null;
		this.length--;
		return itemToRemove.value;
	}

	reverse() {
		const tempHead = this.head;
		this.head = this.tail;
		this.tail = tempHead;

		let prev = null;
		let current = this.tail;
		let next = current.next;

		while (next) {
			current.next = prev;
			prev = current;
			current = next;
			next = next.next;
		}

		current.next = prev;
	}

	findMiddleNode() {
		let fast = this.head;
		let slow = this.head;

		while (fast && fast.next) {
			fast = fast.next.next;
			slow = slow.next;
		}

		return slow;
	}

	hasLoop() {
		let slow = this.head;
		let fast = this.head;

		while (fast && fast.next) {
			slow = slow.next;
			fast = fast.next.next;

			if (fast === slow) {
				return true;
			}
		}

		return false;
	}

	partitionList(x) {
		let current = this.head;
		let left = new Node(0);
		let leftLast = left;
		let right = new Node(0);
		let rightLast = right;

		while (current) {
			if (current.value < x) {
				leftLast.next = current;
				leftLast = current;
			} else {
				rightLast.next = current;
				rightLast = current;
			}
			current = current.next;
		}

		leftLast.next = right.next;
		rightLast.next = null;
		this.head = left.next;

		left.next = null;
		right.next = null;
	}

	removeDuplicates() {
		const uniqueValues = new Set();
		let prev = null;
		let current = this.head;

		while (current) {
			if (uniqueValues.has(current.value)) {
				prev.next = current.next;
				current.next = null;
				current = prev.next;
				this.length--;
			} else {
				uniqueValues.add(current.value);
				prev = current;
				current = current.next;
			}
		}
	}

	binaryToDecimal() {
		let current = this.head;
		let sum = 0;

		while (current) {
			sum = sum * 2 + current.value;
			current = current.next;
		}

		return sum;
	}

	reverseBetween(m, n) {
		if (this.head === null) {
			return;
		}

		let dummy = new Node(0);
		dummy.next = this.head;

		let leftPrev = dummy;
		let left = this.head;

		for (let i = 0; i < m; i++) {
			leftPrev = current;
			left = left.next;
		}

		let prev = null;
		let current = left;
		for (let i = 0; i < n - m + 1; i++) {
			const tempNext = current.next;
			current.next = prev;
			prev = current;
			current = tempNext;
		}

		leftPrev.next = prev;
		left.next = current;
		this.head = dummy.next;
	}

	reverseBetweenMethod2(m, n) {
		if (this.head === null) {
			return null;
		}

		let prev = null;
		let current = this.head;

		// moving the current pointer to the node that is located in the index denoted in m
		for (let i = 0; i < m; i++) {
			prev = current;
			current = current.next;
		}

		const beforeStart = prev;
		const start = current;
		// reversing each node from the from the node that is pointed by current pointer to the node the number of nodes calculated using the (n - m) + 1
		const noOfNodesToReverse = n - m + 1;
		for (let i = 0; i < noOfNodesToReverse; i++) {
			const tempNext = current.next;
			current.next = prev;
			prev = current;
			current = tempNext;
		}

		const end = current;
		if (beforeStart != null) {
			beforeStart.next = prev;
		} else {
			this.head = prev;
		}

		start.next = end;
	}

	bubbleSort() {
		if (this.length < 2) {
			// the list is already sorted.
			return;
		}

		let sortedUntil = null;
		while (this.head.next != sortedUntil) {
			let current = this.head;
			while (current != this.tail && current.next != sortedUntil) {
				if (current.value > current.next.value) {
					this.#swap(current, current.next);
				}
				current = current.next;
			}
			sortedUntil = current;
		}
	}

	selectionSort() {
		if (this.length < 2) {
			return;
			//the list is already sorted.
		}

		let current = this.head;
		while (current.next) {
			let smallest = current;
			let innerCurrent = current.next;
			while (innerCurrent != null) {
				if (innerCurrent.value < smallest.value) {
					smallest = innerCurrent;
				}
				innerCurrent = innerCurrent.next;
			}
			if (smallest != current) {
				this.#swap(smallest, current);
			}
			current = current.next;
		}
	}

	insertionSort() {
		if (this.length < 2) {
			return;
		}

		let dummyHead = new Node(0);
		dummyHead.next = this.head;

		let prev = null;
		let current = this.head;
		while (current != null) {
			if (prev) {
				if (prev.value > current.value) {
					this.#insertInCorrectPlace(dummyHead, prev, current);
					current = prev.next;
					continue;
				}
			}
			prev = current;
			current = current.next;
		}
		this.head = dummyHead.next;
	}

	#insertInCorrectPlace(dummyHead, nodeToInsertPrev, nodeToInsert) {
		let prev = dummyHead;
		let current = dummyHead.next;
		while (current.value <= nodeToInsert.value) {
			prev = current;
			current = current.next;
		}
		nodeToInsertPrev.next = nodeToInsert.next;
		prev.next = nodeToInsert;
		nodeToInsert.next = current;
	}

	merge(otherList) {
		let current1 = this.head;
		let current2 = otherList.head;

		const dummyHead = new Node(0);
		let current = dummyHead;
		while (current1 && current2) {
			if (current1.value < current2.value) {
				current.next = current1;
				current = current.next;
				current1 = current1.next;
			} else {
				current.next = current2;
				current = current.next;
				current2 = current2.next;
			}
		}

		while (current1) {
			current.next = current1;
			current = current.next;
			this.tail = current1;
			current1 = current1.next;
		}

		while (current2) {
			current.next = current2;
			current = current.next;
			this.tail = current2;
			current2 = current2.next;
		}

		this.head = dummyHead.next;
	}

	#swap(node1, node2) {
		const temp = node1.value;
		node1.value = node2.value;
		node2.value = temp;
	}

	print() {
		if (this.isEmpty()) {
			console.log("empty linked list");
			return;
		}
		let current = this.head;
		let linkedListAsString = "";
		while (current) {
			linkedListAsString += current.value;
			if (current.next) {
				linkedListAsString += " -> ";
			}
			current = current.next;
		}
		console.log("printing from head:", linkedListAsString);
	}

	isEmpty() {
		return this.head === null;
	}
}

console.clear();
const linkedList = new LinkedList();
linkedList.push(2);
linkedList.unshift(1);
linkedList.shift();
linkedList.shift();
console.log(linkedList);
linkedList.push(2);
linkedList.unshift(1);
linkedList.unshift(1);
console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));
console.log(linkedList.set(0, 3));
console.log("before inserting 5 in index 2");
console.log(linkedList);
linkedList.insert(2, 5);
console.log("after inserting 5 in index 2");
console.log(linkedList);
linkedList.reverse();
console.log("After reversing the linked list");
console.log(linkedList);
console.log("middle node is ", linkedList.findMiddleNode());
console.log(linkedList.remove(0));
console.log(linkedList);
console.log(linkedList.remove(1));
console.log(linkedList);
linkedList.pop();
console.log(linkedList);
linkedList.pop();
console.log(linkedList);
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);

const linkedList2 = new LinkedList();
linkedList2.push(5);
linkedList2.push(4);
linkedList2.push(3);
linkedList2.push(2);
linkedList2.push(1);
linkedList2.print();
linkedList2.bubbleSort();
linkedList2.print();

const linkedList3 = new LinkedList();
linkedList3.push(5);
linkedList3.push(4);
linkedList3.push(3);
linkedList3.push(2);
linkedList3.push(1);
linkedList3.print();
linkedList3.selectionSort();
linkedList3.print();

const linkedList4 = new LinkedList();
linkedList4.push(5);
linkedList4.push(4);
linkedList4.push(3);
linkedList4.push(2);
linkedList4.push(1);
linkedList4.print();
linkedList4.insertionSort();
linkedList4.print();
