function reduceArray(array) {
  ("use strict");
  let total = 0;
  if (array.length < 0) {
    return 0;
  }
  for (const value of array) {
    total += value;
    // Write code under this line
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
// 6

console.log(reduceArray([-2, 0, 2]));
// 0

console.log(reduceArray([1, 2, 2.5]));
// 5.5
