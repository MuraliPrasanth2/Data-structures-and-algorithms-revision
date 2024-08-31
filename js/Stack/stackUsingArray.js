class Stack {
    constructor() {
        this.stackList = [];
    }

    getStackList() {
        return this.stackList;
    }

    printStack() {
        for (let i = this.stackList.length - 1; i >= 0; i--) {
            console.log(this.stackList[i]);
        }
    }

    isEmpty() {
        return this.stackList.length === 0;
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        } else {
            return this.stackList[this.stackList.length - 1];
        }
    }

    size() {
        return this.stackList.length;
    }

    push(value) {
        this.stackList.push(value);
    }

    pop() {
        if (this.isEmpty()) {
            return null;
        }

        return this.stackList.pop();
    }

    peek() {
        if (this.stackList.length > 0) {
            return this.stackList[this.stackList.length - 1];
        }
    }
}

function reverseString(string) {
    const stack = new Stack();

    for (let i = 0; i < string.length; i++) {
        stack.push(string[i]);
    }

    let reversedString = "";
    while (!stack.isEmpty()) {
        reversedString += stack.pop();
    }

    return reversedString;
}

function isBalancedParentheses(input) {
    const stack = new Stack();
    for (let i = 0; i < input.length; i++) {
        const char = input[i];
        if (char === "(") {
            stack.push(char);
        } else {
            if (stack.isEmpty()) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.isEmpty();
}

function sortStack(stack) {
    const tempStack = new Stack();

    while (!stack.isEmpty()) {
        const current = stack.pop();

        while (!tempStack.isEmpty() && tempStack.peek() > current) {
            stack.push(tempStack.pop());
        }

        tempStack.push(current);
    }

    while (!tempStack.isEmpty()) {
        stack.push(tempStack.pop());
    }
}

console.clear();
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.printStack();
