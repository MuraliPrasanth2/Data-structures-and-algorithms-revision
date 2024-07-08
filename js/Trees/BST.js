class Node {
	constructor(value, left = null, right = null) {
		this.value = value;
		this.left = left;
		this.right = right;
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
	}
}

console.clear();
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

const rbst = new BST();
rbst.rInsert(47);
rbst.rInsert(76);
rbst.rInsert(21);
rbst.rInsert(18);
rbst.rInsert(27);
rbst.rInsert(52);
rbst.rInsert(82);
