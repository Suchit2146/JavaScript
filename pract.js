// Pattern problem 
// let n=3;
// for(let i=0;i<n;i++){
//     let ans="";
//     for(let j=0;j<=i;j++){
//         ans+="*"
//     }
//     console.log(ans)
// }

// let n=3;
// for(let i=0;i<n;i++){
//     let ans="";
//     for(let sp=0;sp<n-1-i;sp++){
//         ans+=" "
//     }
//     for(let j=0;j<=i;j++){
//         ans+="*"
//     }
//     console.log(ans)
// }

// let n=4;
// for(let i=0;i<n;i++){
//     let ans="";
//     for(let sp=0;sp<n-1-i;sp++){
//         ans+=" "
//     }
//     for(let j=0;j<2*i+1;j++){
//         ans+="*"
//     }
//     console.log(ans)
// }



// let n=5;
// for(let i=0;i<n;i++){
//     let ans="";
//     for(let sp=0;sp<n-1-i;sp++){
//         ans+=" "
//     }
//     for(let j=0;j<2*i+1;j++){
//         ans+=j
//     }
//     console.log(ans)
// }

// let n=3;
// for(let i=0;i<n;i++){
//     let ans="";
//     for(let sp=0;sp<n-1-i;sp++) ans+=" ";
//     let num=1;
//     for(let j=0;j<=i;j++) ans+ `${num++}`
//     for(let j=0;j<=i-1;j++)
//       ans+= `${num--}`
//     console.log(ans)
// }

// minimum PATH sum 
// const arr=[[1,3,1],[1,5,1],[4,2,1]];
// let m=arr.length; //3
// let n=arr[0].length; //3
// function minPathSum(arr,i,j){
//     if(i===m-1 && j===n-1)return arr[i][j];
//     let mini=Number.MAX_VALUE;
//     if(i<m-1){
//         let w1=arr[i][j]+minPathSum(arr,i+1,j)
//         mini=Math.min(mini,w1)
//     }
//     if(j<n-1){
//         let w2=arr[i][j]+minPathSum(arr,i,j+1)
//         mini=Math.min(mini,w2)
//     }
//     return mini;
// }
// console.log(minPathSum(arr,0,0))


// const arr=[[1,3,1],[1,5,1],[4,2,1]];
// function minPathSum(arr,i,j){
//     if(i===0 && j===0)return arr[i][j];
//     let mini=Number.MAX_VALUE;
//     if(i>0){
//         let w1=arr[i][j]+minPathSum(arr,i-1,j)
//         mini=Math.min(mini,w1)
//     }
//     if(j>0){
//         let w2=arr[i][j]+minPathSum(arr,i,j-1)
//         mini=Math.min(mini,w2)
//     }
//     return mini;
// }
// console.log(minPathSum(arr,arr.length-1,arr[0].length-1))

// function minPathSum(arr,i,j,dp){
//     if(i===0 && j===0)return arr[i][j];
//     if(dp[i][j]!==-1) return dp[i][j];
//     console.log(i,j)
//     let mini=Number.MAX_VALUE;
//     if(i>0){
//         let w1=arr[i][j]+minPathSum(arr,i-1,j,dp)
//         mini=Math.min(mini,w1)
//     }
//     if(j>0){
//         let w2=arr[i][j]+minPathSum(arr,i,j-1,dp)
//         mini=Math.min(mini,w2)
//     }
//     return dp[i][j]=mini;
// }
// const arr=[[1,3,1],[1,5,1],[4,2,1]];
// let m=arr.length, n=arr[0].length;
// let dp=[];
// for(let i=0;i<m;i++){
//     let temp=[];
//     for(let j=0;j<n;j++){
//         temp.push(-1)
//     }
//     dp.push(temp)
// }
// console.log("ans "+ minPathSum(arr,arr.length-1,arr[0].length-1,dp))


// function minPathSum(arr,i,j,dp){
//     if(i===m-1 && j===n-1)return arr[i][j];
//     if(dp[i][j]!==-1) return dp[i][j]
//     let mini=Number.MAX_VALUE;
//     if(i<m-1){
//         let w1=arr[i][j]+minPathSum(arr,i+1,j,dp)
//         mini=Math.min(mini,w1)
//     }
//     if(j<n-1){
//         let w2=arr[i][j]+minPathSum(arr,i,j+1,dp)
//         mini=Math.min(mini,w2)
//     }
//     return dp[i][j]=mini;
// }
// const arr=[[1,3,1],[1,5,1],[4,2,1]];
// let m=arr.length, n=arr[0].length;
// let dp=[];
// for(let i=0;i<m;i++){
//     let temp=[];
//     for(let j=0;j<n;j++){
//         temp.push(-1)
//     }
//     dp.push(temp)
// }
// console.log("ans "+ minPathSum(arr,0,0,dp))

// Unnique path 
// let arr=[[0,0,0],[0,1,0],[0,0,0]]
// function findUniq(arr,i,j){
//     if(i===0 && j===0){
//         return 1;
//     }
//     if(i<0 || j<0 || arr[i][j]===1){return 0}
//     console.log(i,j)
//     let p1=findUniq(arr,i-1,j)
//     let p2=findUniq(arr,i,j-1)
//     return p1+p2
// }
// console.log("ans: "+ findUniq(arr,arr.length-1,arr[0].length-1))

// function findUniq(arr,i,j,dp){
//     if(i===0 && j===0) return 1;
//     if(i<0 || j<0 || arr[i][j]===1) return 0;
//     console.log(i,j)
//     if(dp[i][j]!=-1) return dp[i][j];
//     let p1=findUniq(arr,i-1,j,dp)
//     let p2=findUniq(arr,i,j-1,dp)
//     return dp[i][j]= p1+p2
// }
// let arr=[[0,0,0],[0,1,0],[0,0,0]]
// let m=arr.length, n=arr[0].length;
// let dp=[];
// for(let i=0;i<m;i++){
//     let temp=[]
//     for(let j=0;j<n;j++){
//         temp.push(-1)
//     }
//     dp.push(temp);
// }
// console.log("ans: "+ findUniq(arr,m-1,n-1,dp))

// Tabulation
// function fibo(n){
//     let dp=[0,1]
//     if(n<=1) return n;
//     for(let i=2;i<=n;i++){
//         dp[i]=dp[i-1]+dp[i-2];
//     }
//     return dp[n]
// }
// console.log(fibo(5))

    function fibo(n){
        let prev=0,curr=1
        if(n<=1) return n;
        for(let i=2;i<=n;i++){
           let temp=prev+curr;
           prev=curr;
           curr=temp;
        }
        return curr
    }
    console.log(fibo(5))

    