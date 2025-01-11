function executeTecnica1() {
  const INDICE = 13
  let SOMA = 0
  let K = 0

  while (K < INDICE) {
    K += 1
    SOMA += K
  }

  const result = document.getElementById("result_tecnica1")
  result.innerHTML = `Soma dos ${INDICE} primeiros números inteiros: ${SOMA}`
}
