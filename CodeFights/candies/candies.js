function candies(n, m) {
	return m - (m % n)
}

console.log(candies(4, 10))