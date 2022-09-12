// let arr=[3,4,5,2];
// function maxProducts(arr){
//     let n=arr.length;
//     let maxx=(arr[0]-1)*(arr[1]-1)
//     for(let i=1;i<n;i++){
//         for(let j=i+1;j<n;j++){
//            let currMax=(arr[0]-1)*(arr[1]-1)
//            maxx=Math.max(currMax,maxx)
//         }
//     }
//     return maxx
// }
// console.log(maxProducts(arr))
// let nums=[1,2,5,2,3]
// let target=2
// var targetIndices = function(nums,target) {
//     nums.sort((a,b)=>a-b)
//     let n=nums.length;
//     let ans=[]
//     for(let i=0;i<n;i++){
//         if(nums[i]===target){
//             ans.push(i)
//         }
    
//     }
//     return ans;
// };
// console.log(targetIndices(nums,target))


// let nums = [5,6,2,7,4]
// var maxProductDifference = function(nums) {
//     nums.sort((a,b)=>a-b)
//     let n=nums.length;
//     return ((nums[n-1]*nums[n-2])-(nums[0]*[nums[1]]))
// };
// console.log(maxProductDifference(nums))

// let seats = [3,1,5], students = [2,7,4]
// var minMovesToSeat = function(seats, students) {
//     seats.sort((a,b)=>a-b);
//     students.sort((a,b)=>a-b)
//     let n=seats.length;
//     let sum=0
//     for(let i=0;i<n;i++){
//         sum+=Math.abs(students[i]-seats[i])
//     }
//     return sum;
// };
// console.log(minMovesToSeat(seats, students))

// var minMovesToSeat = function(seats, students) {
    
//     seats.sort((a,b)=>a-b)
//     students.sort((a,b)=>a-b)
//     let n=seats.length
    
    
//     let moves=0
//     let i=0
    
    
//     while(i<n ){
//         moves+= students[i]-seats[i]
//         i++
    
//     }
//     return moves
// };

// How Many Numbers Are Smaller Than the Current Number
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

// let nums = [8,1,2,2,3]
// var smallerNumbersThanCurrent = function(nums) {
//     let n=nums.length;
//     let cnt=0,ans=[];
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             if(nums[i]>nums[j]){
//                 cnt++
//             }
//         }
//         ans.push(cnt)
//         cnt=0;
//     }
//     return ans;
// };
// console.log(smallerNumbersThanCurrent(nums))

// let nums = [8,1,2,2,3]
// var smallerNumbersThanCurrent = function(nums) {
//     let n=nums.length;
//     let ans=[];
//     for(let i=0;i<n;i++){
//         let cnt=0;
//         for(let j=0;j<n;j++){
//             if(nums[i]>nums[j]){
//                 cnt++
//             }
//         }
//         ans.push(cnt)
//     }
//     return ans;
// };
// console.log(smallerNumbersThanCurrent(nums))

// Maximum Product of Two Elements in an Array
// Input: nums = [3,4,5,2]
// Output: 12 

// let nums = [3,4,5,2]
// var maxProduct = function(nums) {
//     nums.sort((a,b)=>a-b);
//     let n=nums.length;
//     return ((nums[n-1]-1)*(nums[n-2]-1))
// };
// console.log(maxProduct(nums))

// Find Target Indices After Sorting Array
// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]

// let nums = [1,2,5,2,3], target = 2
// var targetIndices = function(nums, target) {
//     nums.sort((a,b)=>a-b);
//     let n=nums.length;
//     let ans=[]
//     for(let i=0;i<n;i++){
//         if(target==nums[i]){
//             ans.push(i)
//         }
//     }
//     return ans;
// };
// console.log(targetIndices(nums,target))


// Minimum Sum of Four Digit Number After Splitting Digits
// Input: num = 2932
// Output: 52

// let num = 2932;
// var minimumSum = function(num) {
//     let v=num.toString().split("");
//     v.sort((a,b)=>a-b)
//     let n=v.length;
//         return Number(v[0]+v[n-1])+Number(v[1]+v[n-2])
// };
// console.log(minimumSum(num))

// let num = 2932;
// var minimumSum = function(num) {
//     let arr=[];
//     while(num){
//         let temp=num%10;
//         arr.push(temp);
//         num=Math.floor(num/10)
//     }
//     arr.sort((a,b)=>a-b);
//     let n=arr.length;
//     let sum=0
//     for(let i=0;i<Math.floor(n/2);i++){
//         sum+=(arr[i]*10+arr[n-1-i])
//     }
//     return sum;
// };
// console.log(minimumSum(num))

// let num = 2932;
// var minimumSum = function(num) {
//     let arr=[];
//     while(num){
//         let temp=num%10;
//         arr.push(temp);
//         num=Math.floor(num/10)
//     }
//     arr.sort((a,b)=>a-b);
//     let n=arr.length;
//     return (arr[0]*10+arr[n-1])+(arr[1]*10+arr[n-2])
// };
// console.log(minimumSum(num))


// Keep Multiplying Found Values by Two
// Input: nums = [5,3,6,1,12], original = 3
// Output: 24

// let nums = [5,3,6,1,12], original = 3
// var findFinalValue = function(nums, original) {
//     if(nums.indexOf(original)===-1){ return original}
//     return findFinalValue(nums, original*2)
// };
// console.log(findFinalValue(nums, original))


// Unique Morse Code Words

// let arr=[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// let s='abcdefghijklmnopqrstuvwxyz'
// let words = ["gin","zen","gig","msg"]
// var uniqueMorseRepresentations = function(words) {
    
// };

// height checker
// Input: heights = [1,1,4,2,1,3]
// Output: 3

// let heights = [1,1,4,2,1,3]
// var heightChecker = function(heights) {
//     let obj={}
//     heights.forEach(element => {
//         obj[i]=element
//     });
//     heights.sort((a,b)=>a-b)
//     let cnt=0;
//     heights.forEach((element)=>{
//         obj[i]!==element
//         cnt++;
//     })
//     return cnt;
// };


// let heights = [1,1,4,2,1,3]
// var heightChecker = function(heights) {
//     let cnt=0;
//     let sortedArr=[...heights]
//     sortedArr.sort((a,b)=>a-b)
//     let n=heights.length;
//     for(let i=0;i<n;i++){
//         if(heights[i]!==sortedArr[i]){
//             cnt++
//         }
//     }
//     return cnt;
// };
// console.log(heightChecker(heights))



// Sort Array By Parity
// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// let nums = [3,1,2,4]
// var sortArrayByParity = function(nums) {
//     let ev=[],od=[]
//     nums.forEach(element => {
//         if(element%2===0){
//             ev.push(element)
//         }else{
//             od.push(element)
//         }
//     });
//     return [...ev,...od]
// };
// console.log(sortArrayByParity(nums))

// let nums = [3,1,2,4]
// var sortArrayByParity = function(nums) {
// let arr=[];
// nums.forEach(element => {
//     if(element%2===0){
//         arr.unshift(element)
//     }else{
//         arr.push(element)
//     }
// });
//     return arr
// };
// console.log(sortArrayByParity(nums))


// function swap(arr,i,j){
//     let temp=arr[i];
//     arr[i]=arr[j]
//     arr[j]=temp;
//     return
// }
// let nums = [3,1,2,4]
// var sortArrayByParity = function(nums) {
// let lo=0, hi=nums.length-1;
// while(lo<hi){
//     if(nums[lo]%2===0) lo++;
//     else if(nums[hi]%2!==0) hi--;
//     else{
//         swap(nums,lo++,hi--)
//     }
// }
//     return nums;
// };
// console.log(sortArrayByParity(nums))


// Array Partition
// Input: nums = [1,4,3,2]
// Output: 4
// Explanation: All possible pairings (ignoring the ordering of elements) are:
// 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
// 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
// 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
// So the maximum possible sum is 4.

// let nums = [6,2,6,5,1,2]
// var arrayPairSum = function(nums) {
//     nums.sort((a,b)=>a-b)
//     let n=nums.length;
//     let sum=0;
//   for(let i=0;i<n;i+=2){
//     sum+=Math.min(nums[i],nums[i+1])
//   }
//     return sum;
// };
// console.log(arrayPairSum(nums))