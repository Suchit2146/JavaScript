// // Removes duplicates
// const arr=["a","b","a","c","c","e"]
// let n=arr.length;
// function removeDuplicates(arr){
//     let cnt=0;
//     const freq={};
//     for(let i=0;i<n;i++){
//         if(freq[arr[i]]===undefined){
//             freq[arr[i]]=1
//         }else{
//             freq[arr[i]]+=1
//         }
//     }
//   return Object.keys(freq)
// }
// console.log(removeDuplicates(arr))

// var removeDuplicates = function(nums) {
//     let n=nums.length
//     const freq={};
//     for(let i=0;i<n;i++){
//         if(freq[nums[i]]===undefined){
//             freq[nums[i]]=1
//         }else{
//             freq[nums[i]]+=1
//         }
//     }
//   return Object.keys(freq)>1 || "-1"
// };
// const nums=[1,3,2]
// console.log(removeDuplicates(nums))


// best time buy and sell stock to make profit 
// const prices=[7,1,5,3,6];
// function maxProfit(prices){
//     let n=prices.length;
//     maxi=0;
//     for(let i=0;i<n-1;i++){
//         let bp=prices[i]
//         for(let j=i+1;j<n;j++){
//             var sp;
//             if(prices[j]>bp){
//                 sp=prices[j]
//             }
//         }
//         let profit=(sp-bp);
//         if(profit>maxi){
//             maxi=profit;
//         }
//     }
//     return maxi
// }
// console.log(maxProfit(prices))


// const prices=[7,1,5,3,6];
// const prices=[100,180,260,310,40,535,695];
// function maxProfit(prices){
//     let n=prices.length;
//     let maxAns=0;
//     let maxValue=prices[n-1]
//     for(let i=n-2;i>=0;i--){
//         let profit=maxValue-prices[i];
//         maxAns=Math.max(profit,maxAns);
//         maxValue=Math.max(maxValue,prices[i])
//     }
//     return maxAns
// }
// console.log(maxProfit(prices))


// max subarray sum 

// const arr=[4,1,6,-10,8]
// const arr=[1,2,-12,4]
// function maxSubArray(arr){
//     let n=arr.length;
//     let maxValue=Number.MIN_VALUE;
//     for(let i=0;i<n;i++){
//         for(let j=i;j<n;j++){
//             let sum=0;
//             for(let k=i;k<=j;k++){
//                 sum+=arr[k]
//             }
//             maxValue=Math.max(maxValue,sum)
//         }
//     }
//     return maxValue
// }
// console.log(maxSubArray(arr))


// const arr=[4,1,6,-10,8]
// // const arr=[4,3,-10,7]
// function maxSubArray(arr){
//     let maxValue=Number.MIN_VALUE
//     let n=arr.length;
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum+=arr[i];
//         if(sum<0){
//             sum=0;
//         }
//         if(maxValue<sum){
//             maxValue=sum;
//         }
//     }
//         if(sum===0){
//             return Math.max(...arr)
//         }
//         return maxValue
//     }
// console.log(maxSubArray(arr)) 

// const arr=[4,1,6,-10,8]
// let n=arr.length;
// let maxSum=0;
// for(let i=0;i<n;i++){
//     let sum=0;
//     for(let j=i;j<n;j++){
//         sum+=arr[j];
//         maxSum=Math.max(maxSum,sum);
//     }
// }
// console.log(maxSum)

// kadanes algo
// let arr=[4,3,-10,8];
// const arr=[4,3,-10,7] //length->4
// let currSum=arr[0],maxSum=arr[0]; //currSum=4,maxSum=4
// for(let i=1;i<arr.length;i++){ // 1,2,3,4
//     currSum=Math.max(arr[i],arr[i]+currSum); // max(3,3+4)=7,max(-10,-10+7)=-3,max(8,8+(-3))=8
//     maxSum=Math.max(currSum,maxSum); // max(7,4)=7,max(-3,7)=7,max(8,7)=8
// }
// console.log(maxSum);
 
// reverse subarray to sort array  


// let arr=[4,3,-10,8];
// let b=[1,2]
// let c=arr.concat(b)
// console.log(c)


// let arr=[4,3,-10,8];

// console.log(arr.splice(2,1,"sk",90,80))
// console.log(arr)

// let arr=[4,3,-10,8];

// console.log(arr.slice(1,2,))
// console.log(arr)

// MOVE all -ve element to end 
// let arr=[1,-1,3,2,-7,-5,11,6]
// function move(arr,n){
//     const arr1=[]
//     const arr2=[]
//     for(let i=0;i<n;i++){
//         if(arr[i]>=0){
//             arr1.push(arr[i])
//         }else{
//             arr2.push(arr[i])
//         }
//     }
//     // arr1.push(...arr2)
//     let b=arr1.concat(arr2)
//     return b
// }
// console.log(move(arr,8))


// make 2d array 
// let arr=[1,2,3,4,6,9,11,14,15]
// function LCS(arr){
//     arr.sort((a,b)=>a-b);
//     let seq=[];
//     let temp=[];
//     temp.push(arr[0])
//     seq.push(temp)
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]===arr[i-1]+1){
//             let n=seq.length
//             seq[n-1].push(arr[i])
//         }else{
//             let tem=[]
//             tem.push(arr[i])
//             seq.push(tem)
//         }
//     }
//     let ans=1;
//     for(let j=0;j<seq.length;j++){
//         ans=Math.max(ans,seq[j].length)
//     }
//     return ans;
// }
// console.log(LCS(arr))



// make max profit 
// let arr=[10,18,70,26,31,4,53,69]
// function makeMaxProfit(arr){
//     let n=arr.length;
//     let maxP=0;
//     for(let i=0;i<n;i++){
//         for(let j=i+1;j<n;j++){
//             const currentProfit=arr[j]-arr[i];
//             maxP=Math.max(currentProfit,maxP)
//         }
//     }
//     return maxP;
// }
// console.log(makeMaxProfit(arr))

// let arr=[10,18,70,26,31,4,53,69]
// function makeMaxProfit(arr){
//     let n=arr.length;
//     let maxP=0;
//     let currentProfit=arr[0]
//     for(let i=1;i<n;i++){
//        currentProfit=Math.min(arr[i],currentProfit);
//        let profit=arr[i]-currentProfit;
//         maxP=Math.max(profit,maxP)
//     }
//     return maxP;
// }
// console.log(makeMaxProfit(arr))