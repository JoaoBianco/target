function isFibonacci(num) {
  if (num < 0) {
      return `${num} não pertence à sequência de Fibonacci.`
  }

  let a = 0, b = 1, fib = 0

  while (fib < num) {
      fib = a + b
      a = b
      b = fib
  }

  if (fib === num || num === 0) {
      return `${num} pertence à sequência de Fibonacci.`
  } else {
      return `${num} não pertence à sequência de Fibonacci.`
  }
}

function executeTecnica2(number) {
  console.log(isFibonacci(number))
}