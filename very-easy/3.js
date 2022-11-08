const oldArray = ['Oh', 'Hi', 'Mark']
let newArray = '[ '
let i = -1
function reverse(array) {
  if (i < -oldArray.length) {
    return newArray + ' ]'
  }
  newArray += array.at(i) + ', '
  i--
  return reverse(array)
}

console.log(reverse(oldArray))