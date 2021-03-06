
const eqObjects = function(object1, object2) {
  let key1 = Object.keys(object1)
  let key2 = Object.keys(object2)
  if(key1.length !== key2.length){
    return false
  }
  for(let key in object1){
    if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
       return eqArrays(object1[key],object2[key])
    }else{
      if(object1[key] !== object2[key]){
        return false
      }
    }
  }
  return true
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
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };//false

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  if(eqObjects(actual, expected)){
    console.log('Passed: {actualObject: '+inspect(actual) +"; expectedObject: "+inspect(expected)+' actualObject is equal to expectedObject}')
  }else{
    console.log('Failed: {actualObject: '+inspect(actual) +"; expectedObject: "+inspect(expected)+' actualObject is not equal to expectedObject}')
  }
};
assertObjectsEqual(ab, ba)
assertObjectsEqual(ab, abc)
assertObjectsEqual(cd, dc)
assertObjectsEqual(cd, cd2)