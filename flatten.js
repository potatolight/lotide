const flatten = function (arr) {
  let array = []
  for(let i = 0; i < arr.length; i++){
    if(!Array.isArray(arr[i])){
       arr[i] = [arr[i]]
    }
    arr[0] = arr[0].concat(arr[i])
  }
  arr[0].shift()
  return arr[0]
}
console.log(flatten([1, 2, [3, 4], 5, [6]]))