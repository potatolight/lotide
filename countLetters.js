const countLetters = function (str) {
  let obj = {}
  for(let s of str){
    if(obj[s]===undefined){
      obj[s] = 1
    }else{
      obj[s]++
    }
  }
  return obj
}
console.log(countLetters('lHl'))