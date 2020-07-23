const words = ["ground", "control", "to", "major", "tom"];
const callback = function(str) {
  return str[0]
}
const len = function(str){
  return str.length
}
const noFirst = function(str){
  return str.slice(1)
}
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
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
  if(eqArrays(arr1, arr2)){
    console.log('Passed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is equal to secondArray}')
  }else{
    console.log('Failed: {firstArray: ['+arr1 +"]; secondArray: ["+arr2+'] firstArray is not equal to secondArray}')
  }
}
let arr1 = map(words, callback)
let arr2 = ['g','c','t','m','t']
assertArraysEqual(arr1, arr2)

let arr3 = map(words, len)
let arr4 = [6,7,2,5,3]
assertArraysEqual(arr3, arr4)

let arr5 = map(words, noFirst)
let arr6 = ['round','ontrol','o','ajor','om']
assertArraysEqual(arr5, arr6)
