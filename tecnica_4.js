const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
}

function calcularPercentuais(faturamento) {
  const valorTotal = Object.values(faturamento).reduce((total, valor) => total + valor, 0)

  const percentuais = Object.fromEntries(
    Object.entries(faturamento).map(([estado, valor]) => [estado, (valor / valorTotal) * 100])
  )

  return { valorTotal, percentuais }
}

const { valorTotal, percentuais } = calcularPercentuais(faturamentoMensal)

function executeTecnica4() {
  console.log(`Faturamento Total: R$ ${valorTotal.toFixed(2)}`)
  for (const [estado, percentual] of Object.entries(percentuais)) {
    console.log(`${estado}: ${percentual.toFixed(2)}%`)
  }
}
