// Day-1

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4

// function findtarget(nums,target){
//     let n=nums.length
//     let ans;
//     for(let i=0;i<n;i++){
//         if(nums[i]===target) return i;
//     }
//     return -1;
// }
// let nums = [-1,0,3,5,9,12];
// let target = 9;
// console.log(findtarget(nums,target))

// function findtarget(nums,target){
//     let n=nums.length
//     for(let i=0;i<n;i++){
//         if(nums[i]===target){
//             return i;
//         }else{
//             if(nums[i]>target){
//                 return i-1;
//             }else if(target > nums[n-1]){
//                 return n-1;
//             }
//         }
//     }
// }
// let nums = [-1,0,3,5,9,12];
// let target = 11;
// console.log(findtarget(nums,target))

// Day 2