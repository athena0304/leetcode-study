/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  let len = s.length
  for(let i=1; i<= len/2 ; i++) {
    let item = s.slice(0, i)
    let count = len / i
    if(Number.isInteger(count) && item.repeat(count) === s) {
      return true
    }
  }
  return false
};

console.log(repeatedSubstringPattern("abab"))