const head = function (array){
  if(array.length === 0){
    return undefined
  }
  return array[0]
}
const assertEqual = function (actual, expected){
  if(actual === expected){
    console.log('😄😄Assertion Passed: '+actual+ ' === ' +expected);
  }else{
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
}
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");