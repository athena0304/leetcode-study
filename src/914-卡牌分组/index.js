// https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  let gcd = (a, b) => {
      if(b === 0) {
          return a
      }  else {
          return gcd(b, a%b)
      }
  }
  if(deck.length < 2 ) return false
  let obj = {}
  // for(let i=0; i< deck.length; i++) {
  //     if(obj[deck[i]] !== undefined) {
  //         obj[deck[i]] += 1 
  //     } else {
  //         obj[deck[i]] = 1
  //     }
  // }
  deck.forEach(item => {
    obj[item] = obj[item] ? obj[item] + 1: 1
  })
  console.log(obj)
  let resArr = Object.values(obj)
  let first = resArr[0]

  if(resArr.length > 1) {
      let g = first
      for(let i=1; i< resArr.length; i++) {
          console.log(first, resArr[i])
          g = gcd(g, resArr[i])
          if(g <= 1) {
              return false
          }
      }
  } 


  return true

};
