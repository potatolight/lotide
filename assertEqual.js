const assertEqual = function (actual, expected){
  let errorMsg = '😢Assertion Failed: ';
  if(actual === expected){
    console.log('😄😄Assertion Passed: '+actual+ '===' +expected);
  }else{
    console.log(errorMsg + actual+ '!==' +expected);
  }
}
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("amy", "amy");
assertEqual(1, 1);
assertEqual(1, 2);