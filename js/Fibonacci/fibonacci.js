function fib(n, memo = {}) {
	if (n === 0 || n === 1) {
		return n;
	}
	if (memo[n]) {
		return memo[n];
	}

	const result = fib(n - 1, memo) + fib(n - 2, memo);
	memo[n] = result;
	return result;
}

function fibIterative(n) {
	const result = new Array(n + 1);
	result[0] = 0;
	result[1] = 1;
	for (let i = 2; i <= n; i++) {
		result[i] = result[i - 1] + result[i - 2];
	}

	return result[n];
}
console.clear();
console.log(fib(100));
console.log(fibIterative(100));
