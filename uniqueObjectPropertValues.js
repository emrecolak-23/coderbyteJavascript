// get company names as an unique

let product = [
   {
     title:"Iphone 8",
     company:"Apple"
   },{
     title:"Galaxy",
     company:"Samsung"
   },{
     title:"Iphone 7",
     company:"Apple"
   },{
     title:"Iphone XS",
     company:"Apple"
   },{
     title:"HTC Phone",
     company:"HTC"
   },{
     title:"Note 3",
     company:"Samsung"
   }
]

function getUnique(arr) {

  let tempArr = arr.map(item=>(item.company))
  return [... new Set(tempArr)]
}

console.log(getUnique(product))

// Second Solution

function getUnique2(arr) {

  return [... arr.reduce((acc,curr)=>{
    acc.add(curr.company)
    return acc
  })]
}
console.log(getUnique(product))