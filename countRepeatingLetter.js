// string must contain only letters

function countLetters(str) {

  let tempArr = str.split('')
  let letters = []
  let count = 1

  for (var i = 0;i<tempArr.length;i++) {

    if (tempArr[i] == tempArr[i+1]) {
       count += 1
    } else {
      let values = count + tempArr[i]
      letters  = [...letters,values]
      count = 1
    }

  }

  return letters.join('')
}

console.log(countLetters('ffffeerttttooo'));