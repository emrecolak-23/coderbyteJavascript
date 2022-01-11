function mathSequence(arr) {

  let arith = new Set();
  let goe = new Set();

  for (var i = 1; i<arr.length;i++) {

    let number1 = arr[i] - arr[i-1]
    arith.add(number1)
    
    let number2 = arr[i]/arr[i-1]
    goe.add(number2)
  }

  if (arith.size == 1) {
    return "Arithmetic"
  }
  if (goe.size == 1) {
    return "Geometric"
  }


  return -1
}

console.log(mathSequence([3,6,9,12,15]))
console.log(mathSequence([3,15,75,375]))