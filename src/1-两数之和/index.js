// https://leetcode-cn.com/problems/two-sum/
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 思路：使用哈希表存储遍历过的元素。另外使用对象比使用map速度要快

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = new Map()
    for(let i=0; i<nums.length; i++) {
      let p = target - nums[i]
      if(obj.has(p)) {
        return [i, obj.get(p)]
      } else {
        obj.set(nums[i], i)
      }
    }
};
let nums = [2, 7, 11, 15], target = 9
let result = twoSum(nums, target)
console.log(result)