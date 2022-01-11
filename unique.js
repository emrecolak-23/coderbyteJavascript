// Find repeating letter in string return true or false

function unique(str) {

  var obj = {}

  for (var i = 0; i<str.length;i++) {

    var currentChar = str.charAt(i);

    if (obj[currentChar] == undefined) {

      obj[currentChar] = 1
    } else {

      obj[currentChar] +=1
      return false
    }
 }
  return true
}

console.log(unique('emre'))

// Second Solution

function unique2(str) {

 let values = [];

 for (let letter of str) {

  if (values.indexOf(letter) != -1) {

    return false
  }
  values.push(letter)
 }
 return true
}
console.log(unique2('emre'))

// third Solution 

function unique3(str) {

  let values = [];

  for (let letter of str) {

    if (values[letter]) {
       return false
    }
    values[letter] = "e"

  }
  return true
}
console.log(unique2('emre'))
