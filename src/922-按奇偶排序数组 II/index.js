/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let arr = []
  let oddIndex = 1
  let evenIndex = 0
  let isEven = (num) => {
      return num % 2 === 0
  }

  for(let i=0; i< A.length; i++) {
      if(isEven(A[i])) {
          arr[evenIndex] = A[i]
          evenIndex += 2
      } else {
          arr[oddIndex] = A[i]
          oddIndex += 2
      }
  }
  return arr
};