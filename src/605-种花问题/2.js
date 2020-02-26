/** 利用正则匹配，前后补0
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let str = `0${flowerbed.join('')}0`
  let arr = str.match(/0+/g)
  let l = 0
  arr.forEach(item => {
      if (item.length === 3) {
          l += 1
      } else if(item.length > 3) {
          if (item.length % 2 === 0) {
              l += item.length/2 - 1
          } else {
              l += Math.ceil(item.length/2) - 1
          }
          
      }
      
  })
  return l >= n 
};