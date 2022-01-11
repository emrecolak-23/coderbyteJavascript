// first solution

function capitalizeWords(str) {

  var arr = str.split(' ')

  for (var i=0;i<arr.length;i++) {
    arr[i] = arr[i].substr(0,1).toUpperCase() + arr[i].substr(1)
  }


  return arr.join(' ')
}

console.log(capitalizeWords("Emre colak the best person"));

// Second Solution 

function capitalizedWords2(str) {

  let words = str.split(' ').map(word =>{
    let firstletter = word.slice(0,1);
    let restletter = word.slice(1);
    firstletter = firstletter.toUpperCase();
    word = firstletter + restletter
    return word
  })

   return words.join(' ')
}

console.log(capitalizedWords2("Emre colak the best person"));

// third solution

function capitalizedWords3(str) {

  let words  = str.split(' ').map(word=> {

    return word.charAt(0).toUpperCase() + word.slice(1)
  })

  return words.join(' ')
}

console.log(capitalizedWords3("Emre colak the best person"));
