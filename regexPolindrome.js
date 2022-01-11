
// Basic solution
function checkPalindrome(str) {

  str = str.toLowerCase()

  let first = str.split(' ').join('');
  let second = first.split('').reverse().join('')

  return first == second
}

// Second Solution (for second checklog)

function checkPalindrome2(str) {

  let tempStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase();

  let second = tempStr.split('').reverse().join('');

  return tempStr == second
}


console.log(checkPalindrome("Was it a car or a cat I saw"));

console.log(checkPalindrome("Red -rum-, sir,-is-murder"));

console.log(checkPalindrome("I got up early this morning"));



console.log(checkPalindrome2("Was it a car or a cat I saw"));

console.log(checkPalindrome2("Red -rum-, sir,-is-murder"));

console.log(checkPalindrome2("I got up early this morning"));