const without = function (source, itemsToRemove) {
  let arr = []
  for(let i=0; i < source.length; i++){
    if(!itemsToRemove.includes(source[i])){
       arr.push(source[i])
    }
  }
  console.log(arr)
}


const assertArraysEqual = function (arr1, arr2) {
  let len = arr1.length === arr2.length
  let isMatch = true 
  for(let i=0; i< arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      isMatch = false 
      break;
    }
  }
  if(isMatch && len){
    console.log('Passed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is equal to secondArray}')
  }else{
    console.log('Failed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is not equal to secondArray}')
  }
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

const words1 = [1, 2, 3]
without(words1, [1])
assertArraysEqual(words1,[1, 2, 3])

const words2 = ["1", "2", "3"]
without(words2, [1, 2, "3"]) // => ["1", "2"]
assertArraysEqual(words2,["1", "2", "3"])

// const eqArrays = function (arr1, arr2) {
//   let len = arr1.length === arr2.length
//   let isMatch = true 
//   for(let i=0; i< arr1.length; i++){
//     if(arr1[i] !== arr2[i]){
//       isMatch = false 
//       break;
//     }
//   }
//   if(isMatch && len){
//     return true
//   }else{
//     return false
//   }
// }