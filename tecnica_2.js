function executeTecnica2() {
  const num = Number(document.getElementById("input_tecnica2").value) || 0
  const result = document.getElementById("result_tecnica2")

  if (num < 0) {
    return (result.innerHTML = `${num} não pertence à sequência de Fibonacci.`)
  }

  let a = 0,
    b = 1,
    fib = 0

  while (fib < num) {
    fib = a + b
    a = b
    b = fib
  }

  fib === num || num === 0
    ? (result.innerHTML = `${num} pertence à sequência de Fibonacci.`)
    : (result.innerHTML = `${num} não pertence à sequência de Fibonacci.`)
}
