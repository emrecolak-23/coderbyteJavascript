// is true or false whether other numbers sums equal to largest number

function arraySum(arr) {

  let number = 0;

  let values = arr.sort(function(a,b){
    return a - b
  })

  for (var i = 0;i<arr.length-1;i++) {
    number += arr[i]
  }

  if (number == arr[arr.length-1]) {
    return true
  } else {
    return false
  }
}

console.log(arraySum([2,4,6,20,3,5]))

// Second Solution

function arraySum2(arr) {

  let tempArr = arr.sort(function(a,b){
    return a - b
  })

  let largest = tempArr.pop()

  let number = 0

  tempArr.forEach(item=>(number+=item))

  return number == largest
}

console.log(arraySum2([2,4,6,20,3,5]))