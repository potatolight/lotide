const tail = require("../tail")
// const assertEqual = require("../assertEqual")
const assert = require("chai").assert

describe ("tail Function" , function (){
  it("should return the length of input arr", () => {
    let input = [1, 2, 3]
    assert.strictEqual(input.length, 3)
  });
  it("should return the rest of the word except the first one", () =>{
    let input = ["Yo Yo", "Lighthouse", "Labs"]
    let output  = ["Lighthouse", "Labs"]
    assert.deepEqual(tail(input), output)
  });
  it("should return undefined when the input is not defined",()=>{
    assert.strictEqual(tail(), null)
  });
  it("should return [] when the input only has one item",()=>{
    assert.deepEqual(tail([1]), [])
  })

});