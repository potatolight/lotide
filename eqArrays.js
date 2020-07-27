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

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log('😄😄Assertion Passed: ' + actual + ' === ' + expected);
//   } else {
//     console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1]))// => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)

const subSet = function (arr1, arr2){
  if(!Array.isArray(arr1) || !Array.isArray(arr2)){
    if (arr1 === arr2) {
      return true;
    }
    return false
  }
  for(let i = 0; i < arr1.length; i++) {
    if(!subSet(arr1[i], arr2[i])) {
      return false
    }
  }
  return true
}
const eqArrays = function (arr1, arr2) {
  if(subSet(arr1, arr2) && subSet(arr2, arr1)){
    return true
  }
  return false
}

module.exports = eqArrays;