// const eqObjects = function(object1, object2) {
//   let key1 = Object.keys(object1)
//   let key2 = Object.keys(object2)
//   if(key1.length !== key2.length){
//     return false
//   }
//   for(let key in object1){
//     if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
//        return eqArrays(object1[key],object2[key])
//     }else{
//       if(object1[key] !== object2[key]){
//         return false
//       }
//     }
//   }
//   return true
// };
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
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// // console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// // console.log(eqObjects(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// // console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// // console.log(eqObjects(cd, cd2)); // => false
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log('😄😄Assertion Passed: ' + actual + ' === ' + expected);
//   } else {
//     console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
//   }
// };
// assertEqual(eqObjects(ab, ba), true)
// assertEqual(eqObjects(ab, abc), false)
// assertEqual(eqObjects(cd, dc), true)
// assertEqual(eqObjects(cd, cd2), false)
const subSet = function (obj1, obj2){
  if(typeof obj1 !== "object" || typeof obj2 !== "object"){
    if (obj1 === obj2) {
      return true;
    }
    return false
  }
  let key2 = Object.keys(obj1)
  for(let key in obj1){
    if(!key2.includes(key)) return false
    else{
      if(!subSet(obj1[key],obj2[key])){
        return false
      }
    }
  }
  return true
}
const eqObjects = function(object1, object2) {
  if(subSet(object1, object2) && subSet(object2, object1)){
    return true
  }
  return false
}

console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }))// => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })) // => false