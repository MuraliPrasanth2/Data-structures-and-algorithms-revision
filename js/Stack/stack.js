class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}
class Stack {
	constructor() {
		this.top = null;
		this.length = 0;
	}

	push(value) {
		const newNode = new Node(value);

		if (this.isEmpty()) {
			this.top = newNode;
		} else {
			newNode.next = this.top;
			this.top = newNode;
		}

		this.length++;
	}

	pop() {
		if (this.isEmpty()) {
			return;
		}

		const nodeToPop = this.top;
		this.top = nodeToPop.next;
		nodeToPop.next = null;
		this.length--;
		return nodeToPop.value;
	}

	print() {
		if (this.isEmpty()) {
			console.log("Empty stack!");
			return;
		}

		let stackAsString = "";
		let current = this.top;
		while (current) {
			stackAsString += current.value;
			if (current.next) {
				stackAsString += "->";
			}
			current = current.next;
		}
		console.log(stackAsString);
	}

	isEmpty() {
		return this.top === null;
	}
}
console.clear();
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
console.log(stack.pop());
stack.print();
