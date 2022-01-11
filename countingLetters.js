// find word which has max counting letter and length

function counLetters(str) {

  var tempArr = str.split(' ')

  tempArr = tempArr.map(item => {
    let tempItem = item.toLowerCase().split('')
    return tempItem.reduce(function(acc,curr){
      acc[curr] = acc[curr] ? acc[curr] + 1 : 1
      if (acc[curr]>acc.max) {
        acc.max = acc[curr]
      }
      return acc
    },{max:1,word:item})
  })

  let amount = 1
  let word = ''

  for (let item of tempArr) {
    if (item.max>amount) {
      amount = item.max
      word = item.word
    }
  }

  if (amount > 1) {
    return word
  }

  return -1
}

console.log(counLetters("Emre Çolak is a best programmer leader manager visonary"))