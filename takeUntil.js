const takeUntil = function(array, callback) {
  let arr = []
  for(let i =0; i< array.length; i++){
     let index = array.indexOf(callback(array))
     if(callback(array[i])){
     arr = array.slice(0,i)
     }
  }
  return arr
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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);