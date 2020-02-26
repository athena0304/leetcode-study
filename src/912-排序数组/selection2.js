/** 选择排序 寻找最小值 4904 ms 40.4 MB
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  for(let i=0; i< nums.length; i++) {
    let index = i
    for(let j=i + 1; j< nums.length; j++) {
        if(nums[i] > nums[j]) {
          tmp = nums[i]
          nums[i] = nums[j]
          nums[j] = tmp
        }
    }
  }

  return nums
};