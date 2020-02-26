/** 双指针
 * @param {number[]} A
 * @return {number[]}
 */

// 大方向是让所有的偶数位里面都保证是偶数，遍历偶数位，如果遇到奇数，就找到奇数位不是奇数的那一位，和当前的位置互换
var sortArrayByParityII = function(A) {
  let j = 1
  for(let i = 0; i< A.length; i+=2) {
      if(A[i] % 2 === 1) {
          while(A[j] % 2 === 1) {
              j+=2
          }
          [A[j], A[i]] = [A[i], A[j]]
      }
  }
  return A
};