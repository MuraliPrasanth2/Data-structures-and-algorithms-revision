class Node {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}
}

class Queue {
	constructor() {
		this.start = null;
		this.end = null;
		this.length = 0;
	}

	enqueue(value) {
		const newNode = new Node(value);
		if (this.isEmpty()) {
			this.start = this.end = newNode;
		} else {
			this.end.next = newNode;
			this.end = newNode;
		}

		this.length++;
	}

	dequeue() {
		if (this.isEmpty()) {
			return;
		}

		const nodeToRemove = this.start;
		if (this.length === 1) {
			this.start = this.end = null;
		} else {
			this.start = nodeToRemove.next;
			nodeToRemove.next = null;
		}

		this.length--;
		return nodeToRemove.value;
	}

	print() {
		if (this.isEmpty()) {
			console.log("Empty Queue!");
			return;
		}

		let queueAsString = "";
		let current = this.start;
		while (current) {
			queueAsString += current.value;
			if (current.next) {
				queueAsString += "->";
			}
			current = current.next;
		}
		console.log(queueAsString);
	}

	isEmpty() {
		return this.start === null;
	}
}

console.clear();
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
