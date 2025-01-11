function executeTecnica5() {
  const str = document.getElementById("input_tecnica5").value.toString() || ""
  const result = document.getElementById("result_tecnica5")

  let invertida = ""

  for (let i = str.length - 1; i >= 0; i--) {
    invertida += str[i]
  }

  result.innerHTML = `String original: ${str}<br/>String invertida: ${invertida}`
}
