var findMedianSortedArrays = function(nums1, nums2) {
    let allnum = nums1.concat(nums2);
  let totalnum = (allnum.length);

if (totalnum % 2 === 0) {
  let todivide = (totalnum/2)
    let a =  allnum[todivide]
     let b =  allnum[todivide-1]++;
   
  let ans = (a + b)/2;
  return ans
}else{ 
  
}

  
};
console.log(findMedianSortedArrays([1,1,3,5],[4,5,7,8]));