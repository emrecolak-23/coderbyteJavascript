function longestWord(str) {

  let arr = str.match(/[a-z]+/gi);

  let sorted = arr.sort(function(a,b){
    return b.length - a.length
  })

  str = sorted[0]

  return str
}

console.log(longestWord("I have dogs"))

// Second Solution Methods

function longestWord2(str) {

  let words = str.split(' ')

  let longestWord = ""

  for (word of words) {

    if (word.length > longestWord.length) {
       
      longestWord = word
    }

  }

  return longestWord
}

console.log(longestWord2("I have dogs"))