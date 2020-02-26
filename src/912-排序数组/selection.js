/** 选择排序 寻找最小值 1516 ms 40.3 MB
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  for(let i=0; i< nums.length; i++) {
    let index = i
    for(let j=i + 1; j< nums.length; j++) {
        if(nums[index] > nums[j]) {
          index = j
        }
    }
    if(index !== i) {
        tmp = nums[i]
        nums[i] = nums[index]
        nums[index] = tmp
    }
}

return nums
};