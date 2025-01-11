const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}

function executeTecnica4() {
  const result = document.getElementById("result_tecnica4")

  const valorTotal = Object.values(faturamentoMensal).reduce(
    (total, valor) => total + valor,
    0
  )

  const percentuais = Object.fromEntries(
    Object.entries(faturamentoMensal).map(([estado, valor]) => [
      estado,
      (valor / valorTotal) * 100,
    ])
  )

  result.innerHTML = `Faturamento Total: R$ ${valorTotal.toFixed(2)}<br/>`
  for (const [estado, percentual] of Object.entries(percentuais)) {
    result.innerHTML += `${estado}: ${percentual.toFixed(2)}%<br/>`
  }
}
