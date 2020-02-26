// 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let arr1 = nums1.slice(0, m)
  let p=0, q=0

  while((p<m) && (q<n)) {

    if(arr1[p] <= nums2[q]) {
      nums1[p + q] = arr1[p]
        p++
    } else {
      nums1[p + q] = nums2[q]
        q++
    }
  }
  while((p<m)) {
    nums1[p + q] = arr1[p]
    p++
  }
  
};

var nums1 = [2,0]
var m = 1
var n = 1
var nums2 = [1]
merge(nums1, m, nums2, n)
console.log(nums1)