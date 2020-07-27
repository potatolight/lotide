
const middle = require("../middle")
const assert = require("chai").assert


// let arr1 = middle([1,2,3,4])
// let arr2 = [2, 3]
// assertArraysEqual(arr1, arr2)

// let arr3 = middle([1, 2, 3, 4, 5])
// let arr4 = [3]
// assertArraysEqual(arr3, arr4)

// let arr5 = middle([1,2])
// let arr6 = []
// assertArraysEqual(arr5, arr6)
describe("middle function", () => {
  it("should return the array with only one middle number when the input's length is odd", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
  });
  it("should return the the array with two middle number when the input's length is even", () =>{
   assert.deepEqual(middle([1,2,3,4]),[2, 3])
  });
})