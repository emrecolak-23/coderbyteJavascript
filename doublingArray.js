function doubling(arr) {

  let results = [];

  for (var i=0; i < arr.length;i++) {

    results.push(Math.pow(arr[i],2))

  }

  return results
}

console.log(doubling([2,4,5,7,8,9]))