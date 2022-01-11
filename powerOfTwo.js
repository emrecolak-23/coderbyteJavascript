// Challenge
// Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed which will be an
//integer and return the string true if it's a power of two. If it's not return the string false.
//For example if the input is 16 then your program should return the string true but if the input is 22 then the
//output should be the string false.
// Sample Test Cases
// Input:4
// Output:"true"
//
// Input:124
// Output:"false"

function powerOfTwo(num) {

  for (var i = 0; i<num;i++) {
    if (num == Math.pow(2,i)) {
      return true
    }
  }
  return false
}

console.log(powerOfTwo(22))