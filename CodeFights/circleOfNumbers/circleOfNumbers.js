function circleOfNumbers(n, firstNumber) {
	const opposite = n / 2 + firstNumber;
	return opposite > n - 1 ? opposite - n : opposite;
}

console.log(circleOfNumbers(10, 2))