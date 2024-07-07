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
