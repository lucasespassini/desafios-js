function media(numeros) {
  let totalNumeros = 0
  let soma = 0
  numeros.forEach(numero => {
    soma += numero
    totalNumeros += 1
  })
  return soma / totalNumeros
}

console.log(media([2, 5, 7, 1, -2]))