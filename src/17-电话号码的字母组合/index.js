// https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 思路：利用队列的方式


/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  let numberMap = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz',
  }
  let length = digits.length
  let arr = []
  for(let i=0; i<length; i++) {
    if(i === 0) {
      arr.push(...numberMap[digits[i]].split(''))
    } else {
      while(arr[0].length === i) {
        let sliceDigit = arr.splice(0, 1)[0]
        arr.push(...numberMap[digits[i]].split('').map(item => sliceDigit + item))
      }
    }
  }
  return arr
  
};
console.log(letterCombinations('23'))
console.log(letterCombinations('234'))
console.log(letterCombinations('2356'))