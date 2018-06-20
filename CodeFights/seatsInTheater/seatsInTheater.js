function seatsInTheater(nCols, nRows, col, row) {
	return (nRows - row) * (nCols - col + 1)
}

console.log(seatsInTheater(16, 11, 5, 3))