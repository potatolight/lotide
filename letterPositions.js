const letterPositions = function(sentence) {
  const results = {};
  let array = sentence.split('')
  for(let i =0; i < array.length; i++){
    if(results[array[i]] === undefined ){
      results[array[i]] = [i]
    }else{
      results[array[i]].push(i)
    }
  }
  return results;
};

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
const assertArraysEqual = function (x) {
  if(x === true){
    console.log('😊Passed: {firstArray is equal to secondArray}')
  }else{
    console.log('😢Failed: {firstArray is not equal to secondArray}')
  }
}
let position = letterPositions("lighthouse in the house")
let letterI = eqArrays(position['i'], [1, 11])
let letterH = eqArrays(position['h'], [3, 5, 15, 18])
let letterT = eqArrays(position['t'], [4, 14])
let letterE = eqArrays(position['e'], [9, 16, 22])
assertArraysEqual(letterI)
assertArraysEqual(letterH)
assertArraysEqual(letterT)
assertArraysEqual(letterE) 