
function reverseString(str) {

  let tempArr = str.split('')

  tempArr.reverse()

  str = tempArr.join('')

  return str
}

console.log(reverseString("hello world from earth"));