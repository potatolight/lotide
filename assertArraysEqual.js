
// const assertArraysEqual = function (arr1, arr2) {
//   let len = arr1.length === arr2.length
//   let isMatch = true 
//   for(let i=0; i< arr1.length; i++){
//     if(arr1[i] !== arr2[i]){
//       isMatch = false 
//       break;
//     }
//   }
//   if(isMatch && len){
//     console.log('Passed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is equal to secondArray}')
//   }else{
//     console.log('Failed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is not equal to secondArray}')
//   }
// }
// assertArraysEqual([1,2],[3,4])
// assertArraysEqual(['good','luck'],['good','luck'])

const eqArrays = function (arr1, arr2) {
  let len = arr1.length === arr2.length
  let isMatch = true 
  for(let i=0; i< arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      isMatch = false 
      break;
    }
  }
  if(isMatch && len){
    return true
  }else{
    return false
  }
}
const assertArraysEqual = function (arr1, arr2) {
  if(eqArrays(arr1, arr2)){
    console.log('Passed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is equal to secondArray}')
  }else{
    console.log('Failed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is not equal to secondArray}')
  }
}
