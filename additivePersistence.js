
// Challenge
// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed which
//will always be a positive integer and return its additive persistence which is the number of times you must add the
//digits in num until you reach a single digit. For example: if num is 2718 then your program should return 2
//because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.
// Sample Test Cases
// Input:4
// Output:0
//
// Input:19
// Output:2

function additivePersistence(num) {

  let numArr = num.toString().split("");
  let counter = 0;

    do {
        var total = 0;
        for (var i = 0; i < numArr.length; i++) {
            total = total + Number(numArr[i]);
        }
        console.log(total)
        numArr = total.toString().split("");
		    counter++;

    }
    while (total > 9);
    return counter;
}

console.log(additivePersistence(4))