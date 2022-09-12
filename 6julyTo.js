// perform multiple operation 
// function performOperation(operationType){
//     if(operationType==='addition'){
//         return function(a,b){
//             return a+b;
//         }
//     }
//     if(operationType==='subtraction'){
//         return function(a,b){
//             return a-b
//         }
//     }
//     if(operationType==='multiplication'){
//         return function(a,b){
//             return a*b
//         }
//     }
// }
// const perform='addition';
// let a=10;
// let b=5;
// // console.log(performOperation((perform)(a,b)))
// console.log((performOperation)(perform)(a,b))

// greet();
// function greet(){
//     console.log('hello')
// }

// Storing function in a variable 
// const add=(a,b)=>{return a+b}
// const addition=add;
// // add(1,4)
// // addition(2,4)
// console.log(addition(2,4))


// passing function as an argument 
// const add=(a,b)=>{return a+b}
// const pass=(fun)=>{
//     return fun(3,4)
// }
// console.log(pass(add))

// return function as a result 

// const funReturn=(a,b)=>{
//     return()=>{
//         console.log(a+b+6)
//     }
// }
// funReturn(1,9)()


// merge two sorted Array; 
// let arr1=[2,6,8,10,12];
// let arr2=[1,3,5,7]
// let ans=[];
// arr1.forEach((e)=>{
//     ans.push(e)
// })
// arr2.forEach((e)=>{
//     ans.push(e)
// })
// ans.sort((a,b)=>a-b)
// console.log(ans)


// let arr1=[2,6,8,10,12];
// let arr2=[1,3,5,7]
// let m=arr1.length;
// let n=arr2.length
// let ans=[];
// let s1=0,e1=m,s2=0,e2=n;
// while(s1<e1 && s2<e2){
//     if(arr1[s1]<arr2[s2]){
//         ans.push(arr1[s1])
//         s1++
//     }else{
//         ans.push(arr2[s2])
//         s2++
//     }
// }
// while(s1<e1){
//     ans.push(arr1[s1])
//     s1++
// }
// while(s2<e2){
//     ans.push(arr2[s2])
//     s2++
// }
// console.log(ans)


// let arr1=[2,6,8,10,12];
// let arr2=[1,3,5,7]
// let m=arr1.length;
// let n=arr2.length
// let ans=[];
// let s1=0,e1=m,s2=0,e2=n;
// while(s1<e1 && s2<e2){
//     if(arr1[s1]<arr2[s2]){
//         ans.push(arr1[s1++])
       
//     }else{
//         ans.push(arr2[s2++])
        
//     }
// }
// while(s1<e1){
//     ans.push(arr1[s1++])
    
// }
// while(s2<e2){
//     ans.push(arr2[s2++])
    
// }
// console.log(ans)



https://leetcode.com/problems/replace-elements-in-an-array/
// var arrayChange=function(nums,op){
//     let obj={}
//         nums.forEach((e,idx)=>{
//             obj[e]=idx
//         })
//         op.forEach((e)=>{
//             let i=obj[e[0]]
//             nums[i]=e[1]
//             obj[e[1]]=i
//         })
//         return nums
// }
// const nums=[1,2];
// // const op=[1,3][2,1][3,2]
// const op=[[1,3],[2,1],[3,2]]
// console.log(arrayChange(nums,op))

// var arrayChange = function(nums, op) {
//     let nums=[1,2],op=[[1,3],[2,1],[3,2]];
//     let obj={};
//     nums.forEach((e,idx)=>{
//         obj[e]=idx; // obj[1]=0,obj[2]=1
//     })
//     op.forEach((e)=>{ // [1,3],[2,1],[3,2]
//         let i=obj[e[0]]; // obj[1]=0,obj[2]=1,obj[3]=0
//         nums[i]=e[1]; // nums[0]=3,nums[1]=1,nums[0]=2
//         obj[e[1]]=i; // obj[3]=0, obj[1]=1,obj[2]=0
//     })
//     return nums;
// };
// console.log(arrayChange(nums, op))

