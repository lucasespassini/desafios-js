let chunks = 'chunk'
function procedimentoRecursivo(n) {
  if (n <= 1) return chunks
  chunks += '-chunk' 
  return procedimentoRecursivo(n - 1)
}

console.log(procedimentoRecursivo(2))