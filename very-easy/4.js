function calculo(n) {
  let algarismos = String(n).split('')
  const algarismosCalculados = algarismos.map(alg => {
    return Number(alg) ** 2
  })
  return algarismosCalculados.join('')
}

console.log(calculo(3514))