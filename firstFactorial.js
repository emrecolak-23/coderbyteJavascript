function factorial(num) {

  let prod = 1

  for (var i = num;i>0;i--) {
    prod *= i
  }


  return prod
}

console.log(factorial(4))