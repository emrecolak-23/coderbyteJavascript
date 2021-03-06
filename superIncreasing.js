// Challenge
// Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr 
//and determine if the array forms a superincreasing sequence where each element in the array is greater than the 
//sum of all previous elements. The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] 
//then your program should return the string "true" because it forms a superincreasing sequence. If a superincreasing 
//sequence isn't formed, then your program should return the string "false"
// Sample Test Cases
// Input:1,2,3,4
// Output:"false"
//
// Input:1,2,5,10
// Output:"true"

function superIncreasing(arr) {

  let value = 0;
  
  for (var i=1;i<arr.length;i++) {
    value += arr[i-1];
    if (value>arr[i]) {
      return false
    }

  }
  return true
} 

console.log(superIncreasing([1, 3, 6, 13, 54, 1000]))
console.log(superIncreasing([1,2,3,4]))