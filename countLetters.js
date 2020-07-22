const letterPositions = function(sentence) {
  const results = {};
  for (let i=0; i< sentence.length; i++){
    if(results[sentence[i]] === undefined){
      results[sentence[i]] = 1
    }else{
      results[sentence[i]]++
    }
  }
  return results;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😄😄Assertion Passed: ' + actual + '===' + expected);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};
let count = letterPositions('LHL')
console.log(assertEqual(count["L"],2))
console.log(assertEqual(count["H"],1))