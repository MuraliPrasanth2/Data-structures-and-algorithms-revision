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
console.clear();
console.log(fib(100));
