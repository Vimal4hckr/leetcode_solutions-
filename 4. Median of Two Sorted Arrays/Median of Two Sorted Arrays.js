var findMedianSortedArrays = function(nums1,nums2) {
    let nums=[...nums1,...nums2].sort((a,b)=>a-b);
    let n=nums.length;
    if(n%2) return nums[Math.floor(n/2)];
    return (nums[n/2-1]+nums[n/2])/2;
};