console.clear();

class Heap {
    #heap = [];

    getHeap() {
        return [...this.#heap];
    }

    #leftChild(index) {
        return 2 * index + 1;
    }

    #rightChild(index) {
        return 2 * index + 2;
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }

    #swap(index1, index2) {
        const temp = this.#heap[index1];
        this.#heap[index1] = this.#heap[index2];
        this.#heap[index2] = temp;
    }

    insert(value) {
        this.#heap.push(value);
        let current = this.#heap.length - 1;
        while (true) {
            if (current <= 0) {
                break;
            }

            const parent = this.#parent(current);
            if (this.#heap[parent] > this.#heap[current]) {
                break;
            }

            this.#swap(current, parent);
            current = parent;
        }
    }

    remove() {
        if (this.#heap.lenght === 0) {
            return null;
        }

        if (this.#heap.length === 1) {
            return this.#heap.pop();
        }

        const maxValue = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#sinkDown(0);

        return maxValue;
    }

    #sinkDown(index) {
        let maxIndex = index;
        const size = this.#heap.length;
        while (true) {
            const leftChild = this.#leftChild(index);
            const rightChild = this.#rightChild(index);

            if (leftChild < size && this.#heap[leftChild] > this.#heap[maxIndex]) {
                maxIndex = leftChild;
            }
            if (rightChild < size && this.#heap[rightChild] > this.#heap[maxIndex]) {
                maxIndex = rightChild;
            }

            if (maxIndex === index) {
                break;
            }
            this.#swap(index, maxIndex);
            index = maxIndex;
        }
    }
}

const myHeap = new Heap();
myHeap.insert(99);
myHeap.insert(72);
myHeap.insert(61);
myHeap.insert(58);
console.log(myHeap.getHeap());

myHeap.insert(100);
console.log(myHeap.getHeap());

myHeap.insert(75);
console.log(myHeap.getHeap());

console.log(myHeap.remove());
console.log(myHeap.getHeap());
console.log(myHeap.remove());
console.log(myHeap.getHeap());
console.log(myHeap.remove());
console.log(myHeap.getHeap());
console.log(myHeap.remove());
console.log(myHeap.getHeap());
