#### Algorithm Available At [CodeFights](https://codefights.com/arcade/code-arcade/intro-gates/vExYvcGnFsEYSt8nQ)

---

Consider integer numbers from `0` to `n - 1` written down along the circle in such a way that the distance between any two neighboring numbers is equal (note that `0` and `n - 1` are neighboring, too).

Given `n` and `firstNumber`, find the number which is written in the radially opposite position to `firstNumber`.

**Example**

For `n = 10` and `firstNumber = 2`, the output should be
`circleOfNumbers(n, firstNumber) = 7`.

![Example][logo]

[logo]: circleofnumbers.png

**Input/Output**

- **[execution time limit] 4 seconds (js)**

- **[input] integer n**

  A positive even integer.

  _Guaranteed constraints:_  
  `4 ≤ n ≤ 20`.

- **[input] integer firstNumber**

  _Guaranteed constraints:_  
  `0 ≤ firstNumber ≤ n - 1`.

- **[output] integer**
