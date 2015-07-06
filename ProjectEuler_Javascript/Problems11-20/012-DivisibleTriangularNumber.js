// The sequence of triangle numbers is generated by adding the natural numbers. 
// So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

// 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

// Let us list the factors of the first seven triangle numbers:

// nth - n * (n/2 + 0.5) - result
// 1st - 1 * 1   -  1: 1
// 2nd - 2 * 1.5 -  3: 1,3
// 3rd - 3 * 2   -  6: 1,2,3,6
// 4th - 4 * 2.5 - 10: 1,2,5,10
// 5th - 5 * 3   - 15: 1,3,5,15
// 6th - 6 * 3.5 - 21: 1,3,7,21
// 7th - 7 * 4   - 28: 1,2,4,7,14,28
// We can see that 28 is the first triangle number to have over five divisors.

// What is the value of the first triangle number to have over five hundred divisors?


// The notes added to the initial example show that the nth triangular number can be calculated as:
// n * (n/2 + 0.5), which will allow us to calculate triangular numbers faster than iteration.
// I confirmed this by running having both iterative and this calculative approach compared in the 
// function, and running it in a while loop.
var nthTriangularNumber = function (nth) {
  return nth * (nth/2 + 0.5);
};

var divisorCount = function (num) {
  var count = 2; // 1 and num
  // We only need to check for divisors from 1 to √n
  if (num === 1) { return 1 ;}
  for (var i = 2 ; i < Math.sqrt(num) ; i++) {
    count += num % i === 0 ? 2 : 0;
  }
  count += Math.sqrt(num) % 1 === 0 ? 1 : 0;
  return count;
};

var triangleNumberDivisors = function (desiredDivCnt) {
  var currCount = 0;
  var nth = 1;
  if(desiredDivCnt === 1) {return 1;}

  while (currCount < desiredDivCnt) {
    nth++;
    currCount = divisorCount(nthTriangularNumber(nth));
  }
  return nthTriangularNumber(nth);
};

console.log(triangleNumberDivisors(500));