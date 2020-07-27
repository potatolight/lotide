const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")


let arr1 = middle([1,2,3,4])
let arr2 = [2, 3]
assertArraysEqual(arr1, arr2)

let arr3 = middle([1, 2, 3, 4, 5])
let arr4 = [3]
assertArraysEqual(arr3, arr4)

let arr5 = middle([1,2])
let arr6 = []
assertArraysEqual(arr5, arr6)