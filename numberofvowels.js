function vowelNumber(str) {

  var vowels = ["a","e","i","o","u"]

  var tempArr = str.split('')
  var count = 0

  for (var i=0;i<tempArr.length;i++) {

    if (vowels.indexOf(tempArr[i]) != -1 ) {
       count += 1
    }
 
  }


  return count
}

console.log(vowelNumber("hello coderbyte"))