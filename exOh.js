// Challenge
// Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string
//true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered
//in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there
//are 6 x's and 5 o's.

// Sample Test Cases
// Input:"xooxxo"
// Output:"true"
//
// Input:"x"
// Output:"false"

function xo(str) {

  let strArr = str.split('');
  let xCount = 0;
  let oCount = 0;

  for (var i = 0;i<strArr.length;i++) {
    if (/[xX]/.test(strArr[i])) {
        xCount += 1
    } else if (/[oO]/.test(strArr[i])) {
        oCount += 1
    }
  }

  if (xCount == oCount) {
    return true
  } else {
    return false
  }

}

console.log(xo("xoxxxxoooxoo"))