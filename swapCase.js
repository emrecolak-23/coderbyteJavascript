// Challenge
// Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each character.
//For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay the way they are.
// Sample Test Cases
// Input:"Hello-LOL"
// Output:"hELLO-lol"
//
// Input:"Sup DUDE!!?"
// Output:"sUP dude!!?"

function swapCase(str) {

  let strArr = str.split('');

  for (var i = 0;i<strArr.length;i++) {

    if (strArr[i] == strArr[i].toLowerCase()) {
        strArr[i] = strArr[i].toUpperCase();
    } else if (strArr[i] == strArr[i].toUpperCase()) {
        strArr[i] = strArr[i].toLowerCase()
    }
  }

  strArr = strArr.join('')

  return strArr
}

console.log(swapCase("Hello-LOL"))