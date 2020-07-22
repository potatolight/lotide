const middle = function(array) {
  if(array.length <=2){
    return []
  }
  let output = []
  let i = Math.floor(array.length/2)
  if(array.length % 2 === 0){
    output.push(array[i-1], array[i])
  }else if(array.length % 2 ===1 ){
    output.push(array[i])
  }
  return output
}

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
  if(eqArrays(arr1,arr2)){
    console.log('Passed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is equal to secondArray}')
  }else{
    console.log('Failed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is not equal to secondArray}')
  }
}
let arr1 = middle([1,2,3,4])
let arr2 = [2, 3]
assertArraysEqual(arr1, arr2)

let arr3 = middle([1, 2, 3, 4, 5])
let arr4 = [3]
assertArraysEqual(arr3, arr4)

let arr5 = middle([1,2])
let arr6 = []
assertArraysEqual(arr5, arr6)

