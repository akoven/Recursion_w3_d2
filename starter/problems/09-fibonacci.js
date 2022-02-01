/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

0, 1, 1, 2, 3, 5, 8, etc....

We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

// your code here

const fib = (num) => {
  if (num <= 0) return 0;
  if (num === 1 || num === 2) return 1;

  // 4
  return fib(num - 2) + fib(num - 1);
  //fib( 2 )                   // fib ( 3 )
                               // fib ( 3 - 2 ) + fib ( 3 - 1 )
                               // fib ( 1 )  + fib ( 2 )
  //        1                           ( 1 + 1 )
};

console.log(fib(3)); // 2
console.log(fib(10)); // 3

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = fibonacci;
} catch (e) {
  module.exports = null;
}
