/*
Sample Test Cases
Input:"coderbyte"
OutPut:"bcdeeorty"
*/

function alphabetize(str) {

  let tempStr = str.split('').sort().join('')

  return tempStr
}

console.log(alphabetize("coderbyte"))