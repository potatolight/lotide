const countOnly = function(allItems, itemsToCount) {
  let obj = {}
  for(let item of allItems){
    if(itemsToCount[item] === true){
      if(obj[item] === undefined){
        obj[item] = 1
      }else{
        obj[item]++
      }
    }
  }
  return obj
}
const countOnly = function(allItems, itemsToCount) {
  let result = {}
  return result
}
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('😄😄Assertion Passed: ' + actual + '===' + expected);
  } else {
    console.log(`😢Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);