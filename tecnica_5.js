function inverterString(str) {
  let invertida = ""

  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i]
  }

  return invertida
}

function executeTecnica5() {
  const inputString = "Exemplo de string"
  
  const resultado = inverterString(inputString)
  
  console.log(`String original: ${inputString}`)
  console.log(`String invertida: ${resultado}`)
}
