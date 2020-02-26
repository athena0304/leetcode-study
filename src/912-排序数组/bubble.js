/** 冒泡排序
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  for(let i=1; i< nums.length; i++) {
      for(let j=0; j< nums.length - 1; j++) {
          if(nums[j] > nums[j+1]) {
            [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            //   tmp = nums[j]
            //   nums[j] = nums[j+1]
            //   nums[j+1] = tmp
          }
      }
  }
  
  return nums
};