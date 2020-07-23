
const findKey = function(obj, callback){
  let str = ''
  for(let key in obj){
    if(callback(obj[key])){
      str = key
      break
    }
  }
  return str
}

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😄😄Assertion Passed: ' + actual + '===' + expected);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

let actual = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) 
let expected = "noma"
assertEqual(actual, expected)