const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require("./without");
const test = require('./test')
const takeUntil = require('./takeUntil')
const map = require('./map')
const letterPositions = require('./letterPositions')
const flatten = require('./flatten')
const findKey = require('./findKey');
const findKeyValue = require('./findKeyValue');
const findKeyByValue = require('./findKeyValue');
const eqObjects = require('./eqObjects')
const eqArrays = require('./eqArrays')
const countOnly = require('./countOnly')
const countLetters = require('./countLetters')
const assertObjetsEqual = require('./assertObjectsEqual')
const assertEqual = require('./assertEqual')
const assertArraysEqual = require('./assertArraysEqual')

// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle,
//   without: without,
//   test: test,
//   takeUntil: takeUntil,
//   map: map,
//   letterPositions: letterPositions,
//   flatten: flatten,
//   findKeyValue: findKeyValue,
//   findKey: findKey,
//   eqObjects: eqObjects,
//   eqArrays: eqArrays,
//   countOnly: countOnly,
//   countLetters: countLetters,
//   assertObjetsEqual: assertObjetsEqual,
//   assertEqual: assertEqual,
//   assertArraysEqual: assertArraysEqual
// };

module.exports = {
  head,
  tail,
  middle,
  without,
  test,
  takeUntil,
  map,
  letterPositions,
  flatten,
  findKeyValue,
  findKey,
  eqObjects,
  eqArrays,
  countOnly,
  countLetters,
  assertObjetsEqual,
  assertEqual,
  assertArraysEqual
};