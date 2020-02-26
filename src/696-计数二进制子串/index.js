//计数二进制子串 
// https://leetcode-cn.com/problems/count-binary-substrings/solution/

var countBinarySubstrings = function(str) {
  let arr = []
  // 给定任意子输入都返回第一个符合条件的字串
  let match = (str) => {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if(reg.test(str)) {
      return RegExp.$1
    } else {
      return ''
    }
  }
  for(let i=0, len = str.length - 1; i< len; i++ ) {
    let sub = match(str.slice(i))
    if(sub) {
      arr.push(sub)
    }
  }
  return arr
}

console.log(countBinarySubstrings('00110011'))