class Node {
	constructor(value, prev = null, next = null) {
		this.value = value;
		this.prev = prev;
		this.next = next;
	}

	toString() {
		return this.value;
	}
}

class DoublyLinkedList {
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
			newNode.prev = this.tail;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	pop() {
		if (this.isEmpty()) {
			return;
		}

		const nodeToRemove = this.tail;

		if (this.length === 1) {
			this.head = this.tail = null;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			nodeToRemove.prev = null;
		}

		this.length--;
		return nodeToRemove.value;
	}

	unshift(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.head = this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}

		this.length++;
		return this;
	}

	shift() {
		if (this.isEmpty()) {
			return;
		}

		const nodeToRemove = this.head;
		if (this.length === 1) {
			this.head = this.tail = null;
		} else {
			this.head = this.head.next;
			this.head.prev = null;
			nodeToRemove.next = null;
		}

		this.length--;
		return nodeToRemove.value;
	}

	get(index) {
		if (index < 0 || index >= this.length) {
			return;
		}

		const isNodeInLeftSide = index < this.length / 2;
		if (isNodeInLeftSide) {
			let current = this.head;
			for (let i = 0; i < index; i++) {
				current = current.next;
			}
			return current;
		} else {
			let current = this.tail;
			for (let i = this.length - 1; i > index; i--) {
				current = current.prev;
			}
			return current;
		}
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

		const newNode = new Node(value);
		const before = this.get(index - 1);
		const after = before.next;
		before.next = newNode;
		newNode.prev = before;
		newNode.next = after;
		after.prev = newNode;
		this.length++;
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

		const nodeToRemove = this.get(index);
		const before = nodeToRemove.prev;
		const after = nodeToRemove.next;
		before.next = after;
		after.prev = before;
		nodeToRemove.prev = null;
		nodeToRemove.next = null;
		this.length--;
		return nodeToRemove.value;
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

	printInReverse() {
		if (this.isEmpty()) {
			console.log("empty linked list");
			return;
		}
		let current = this.tail;
		let linkedListAsString = "";
		while (current) {
			linkedListAsString += current.value;
			if (current.prev) {
				linkedListAsString += " -> ";
			}
			current = current.prev;
		}
		console.log("printing from tail:", linkedListAsString);
	}

	swapFirstLast() {
		if (this.length < 2) {
			return;
		}

		const tempHeadValue = this.head.value;
		this.head.value = this.tail.value;
		this.tail.value = tempHeadValue;
	}

	reverse() {
		if (this.length < 2) {
			return;
		}

		let prev = null;
		let current = this.head;
		this.tail = current;
		while (current) {
			const next = current.next;
			current.next = prev;
			if (prev) {
				prev.prev = current;
			}
			prev = current;
			current = next;
		}
		this.head = prev;
	}

	isPalindrome() {
		if (this.length < 2) {
			return true;
		}

		let fromHead = this.head;
		let fromTail = this.tail;

		while (fromHead != fromTail) {
			if (fromHead.value != fromTail.value) {
				return false;
			}

			if (fromHead.next == fromTail) {
				break;
			}

			fromHead = fromHead.next;
			fromTail = fromTail.prev;
		}

		return true;
	}

	swapPairs() {
		if (this.length < 2) {
			return;
		}

		let firstNode = this.head;
		let secondNode = firstNode.next;
		let next = secondNode.next;
		this.head = secondNode;

		let prev = null;
		while (true) {
			secondNode.next = firstNode;
			secondNode.prev = prev;
			firstNode.prev = secondNode;
			firstNode.next = next;
			if (prev) {
				prev.next = secondNode;
			}
			prev = firstNode;

			firstNode = next;
			if (!firstNode) {
				break;
			}

			secondNode = firstNode.next;
			if (!secondNode) {
				break;
			}

			next = secondNode.next;
		}

		if (firstNode) {
			firstNode.prev = prev;
		} else {
			this.tail = prev;
		}
	}

	isEmpty() {
		return this.head === null;
	}
}

console.clear();
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.push(6);
doublyLinkedList.push(7);
console.log("before swapping");
doublyLinkedList.print();
doublyLinkedList.printInReverse();
console.log("----------------------------------");
doublyLinkedList.swapPairs();
console.log("after swapping");
doublyLinkedList.print();
doublyLinkedList.printInReverse();
console.log("----------------------------------");
const doublyLinkedList2 = new DoublyLinkedList();
doublyLinkedList2.push(1);
doublyLinkedList2.push(2);
doublyLinkedList2.push(3);
doublyLinkedList2.push(4);
doublyLinkedList2.push(5);
doublyLinkedList2.push(6);
console.log("before swapping");
doublyLinkedList2.print();
doublyLinkedList2.printInReverse();
console.log("----------------------------------");
doublyLinkedList2.swapPairs();
console.log("after swapping");
doublyLinkedList2.print();
doublyLinkedList2.printInReverse();
console.log("----------------------------------");
