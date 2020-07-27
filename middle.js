const middle = function(array) {
  if(array.length <=2){
    return []
  }
  let output = []
  let i = Math.floor(array.length/2)
  if(array.length % 2 === 0){
    output.push(array[i-1], array[i])
  }else if(array.length % 2 ===1 ){
    output.push(array[i])
  }
  return output
}

module.exports = middle


