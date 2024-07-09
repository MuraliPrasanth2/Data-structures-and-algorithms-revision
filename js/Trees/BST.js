class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
	}

	toString() {
		return this.value;
	}
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.root = newNode;
			return this;
		}

		let current = this.root;
		while (true) {
			if (current.value === value) {
				return this;
			}

			if (value > current.value) {
				if (!current.right) {
					current.right = newNode;
					return this;
				}
				current = current.right;
			} else {
				if (!current.left) {
					current.left = newNode;
					return this;
				}
				current = current.left;
			}
		}
	}

	contains(value) {
		let current = this.root;
		while (current) {
			if (current.value === value) {
				return true;
			}

			if (value > current.value) {
				current = current.right;
			} else {
				current = current.left;
			}
		}

		return false;
	}

	isEmpty() {
		return this.root === null;
	}

	rContains(value, currentNode = this.root) {
		if (currentNode === null) {
			return false;
		}

		if (value === currentNode.value) {
			return true;
		}

		if (value < currentNode.value) {
			return this.rContains(value, currentNode.left);
		} else {
			return this.rContains(value, currentNode.right);
		}
	}

	rInsert(value, currentNode = this.root) {
		if (!this.root) {
			this.root = new Node(value);
			return;
		}

		if (!currentNode) {
			return new Node(value);
		}

		if (value < currentNode.value) {
			currentNode.left = this.rInsert(value, currentNode.left);
		} else {
			currentNode.right = this.rInsert(value, currentNode.right);
		}

		return currentNode;
	}

	#rDelete(value, currentNode = this.root) {
		if (currentNode === null) {
			return null;
		}

		if (value === currentNode.value) {
			if (!currentNode.left) {
				return currentNode.right;
			}

			if (!currentNode.right) {
				return currentNode.left;
			}

			currentNode.value = this.#leftMostValue(currentNode.right);
			currentNode.right = this.#rDelete(currentNode.value, currentNode.right);
			return currentNode;
		}

		if (value < currentNode.value) {
			currentNode.left = this.#rDelete(value, currentNode.left);
		} else {
			currentNode.right = this.#rDelete(value, currentNode.right);
		}

		return currentNode;
	}

	rDelete(value) {
		this.root = this.#rDelete(value);
	}

	#leftMostValue(currentNode) {
		if (!currentNode.left) {
			return currentNode.value;
		}
		return this.#leftMostValue(currentNode.left);
	}

	BFS() {
		if (!this.root) {
			return [];
		}
		let queue = [this.root];
		let result = [];
		while (queue.length) {
			const currentNode = queue.shift();
			result.push(currentNode.value);
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}

		return result;
	}

	DFSPreOrder(currentNode = this.root, result = []) {
		if (!currentNode) {
			return;
		}

		result.push(currentNode.value);
		this.DFSPreOrder(currentNode.left, result);
		this.DFSPreOrder(currentNode.right, result);
		return result;
	}

	DFSPostOrder(currentNode = this.root, result = []) {
		if (!currentNode) {
			return;
		}

		this.DFSPostOrder(currentNode.left, result);
		this.DFSPostOrder(currentNode.right, result);
		result.push(currentNode.value);
		return result;
	}

	DFSInOrder(currentNode = this.root, result = []) {
		if (!currentNode) {
			return;
		}

		this.DFSInOrder(currentNode.left, result);
		result.push(currentNode.value);
		this.DFSInOrder(currentNode.right, result);
		return result;
	}
}

console.clear();
console.log("normally formed BST");
console.log("-----------------------------");
const bst = new BST();
bst.insert(47);
bst.insert(76);
bst.insert(21);
bst.insert(18);
bst.insert(27);
bst.insert(52);
bst.insert(82);
console.log(bst.contains(52));
console.log(bst.contains(22));
console.log(bst.contains(82));
console.log(bst.contains(2));
console.log(bst.contains(21));
console.log("------------------------------");
console.log("recursviely formed BST");
const rbst = new BST();
rbst.rInsert(47);
rbst.rInsert(76);
rbst.rInsert(21);
rbst.rInsert(18);
rbst.rInsert(27);
rbst.rInsert(52);
rbst.rInsert(82);
console.log(rbst.rContains(52));
console.log(rbst.rContains(22));
console.log(rbst.rContains(82));
console.log(rbst.rContains(2));
console.log(
	"before deleting 21 using dummy deleting and checking if 21 exists",
);
console.log(rbst.rContains(21));
rbst.rDelete(21);
console.log("after deleting 21 using dummy deleting and checking if 21 exists");
console.log(rbst.rContains(21));

const rbst2 = new BST();
rbst2.rInsert(47);
rbst2.rInsert(21);
rbst2.rInsert(76);
rbst2.rInsert(18);
rbst2.rInsert(27);
rbst2.rInsert(52);
rbst2.rInsert(82);
rbst2.rInsert(25);
rbst2.rInsert(29);
rbst2.rInsert(24);
rbst2.rInsert(26);
rbst2.rInsert(28);
rbst2.rInsert(30);
console.log("before deleting 27 using deleting and checking if 27 exists");
rbst2.rDelete(27);
console.log(rbst2.rContains(27));
rbst2.rDelete(27);
console.log("after deleting 27 using deleting and checking if 27 exists");
console.log(rbst2.rContains(27));
rbst2.rDelete(25);
console.log("after deleting 25 using deleting and checking if 25 exists");
console.log(rbst2.rContains(25));

const rbst3 = new BST();
rbst3.rInsert(47);
rbst3.rInsert(21);
rbst3.rInsert(76);
rbst3.rInsert(18);
rbst3.rInsert(27);
rbst3.rInsert(52);
rbst3.rInsert(82);
console.log(rbst3.BFS());
console.log(rbst3.DFSPreOrder());
console.log(rbst3.DFSPostOrder());
console.log(rbst3.DFSInOrder());
