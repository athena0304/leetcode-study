/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  if(n === 0) {
    return ['0']
  }
  let make = (n) => {
    if(n === 1) {
      return ['0', '1']
    } else {
      let prev = make(n - 1)
      console.log('prev', prev)
      let result = []
      // let max = Math.pow(2, n) - 1
      let max = Math.pow(2, n) - 1
      for(let i=0, len = prev.length; i<len; i++) {
        result[i] = `0${prev[i]}`
        result[max - i] = `1${prev[i]}`
      }
      console.log('result', result)
      return result
    }
  }
  return make(n).map(item => parseInt(item, 2))
    
};

console.log(grayCode(3))