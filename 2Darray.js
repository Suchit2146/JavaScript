// Multiply matrix 
// const m1=[[1,1],[1,1]];
// const m2=[[1,2,1],[3,4,1]];
// let m=m1.length;
// let n=m1[0].length;
// let k=m2[0].length
// function mulMatrix(m1,m2,m,n,k){
//     let ans=new Array(m);
//     for(let i=0;i<m;i++){
//         ans[i]=new Array(k)
//     }
//     // console.log(ans)
//     for(let i=0;i<m;i++){
//         for(let j=0;j<k;j++){
//             let sum=0;
//             for(let p=0;p<n;p++){
//                 sum+=m1[i][p]*m2[p][j]
//             }
//             ans[i][j]=sum
//         }
//     }
//     return ans;
// }
// console.log(mulMatrix(m1,m2,m,n,k))


// add Two maatrix 
// const m1=[[1,1],[1,1]];
// const m2=[[1,2],[3,4]];
// let m=m1.length;
// let n=m2[0].length;
// // let k=m2[0].length
// function addTwoMatrix(m1,m2,m,n){
//     let ans=new Array(m);
//     for(let i=0;i<m;i++){
//         ans[i]=new Array(n)
//     }
//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             ans[i][j]=m1[i][j]+m2[i][j]
//         }
//     }
//     return ans;
// }
// console.log(addTwoMatrix(m1,m2,m,n))


// Transpose matrix 
// const m2=[[1,2],[3,4]];
// let m=m2.length;
// let n=m2[0].length;
// function transposeMatrix(m2,m,n){
//     let ans=new Array(m);
//     for(let i=0;i<m;i++){
//         ans[i]=new Array(n)
//     }
//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             ans[i][j]=m2[j][i]
//         }
//     }
//     return ans;
// }
// console.log(transposeMatrix(m2,m,n))

// 90degree rotate matrix 
// const m2=[[1,2,3],[4,5,6],[7,8,9]];
// let m=m2.length;
// let n=m2[0].length;
// function rotateMatrix(m2,m,n){
//     let ans=new Array(m);
//     for(let i=0;i<m;i++){
//         ans[i]=new Array(n)
//     }
//     // console.log(ans)
//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//           ans[i][j]=m2[m-1-j][i]
//         }  
//     }
//     // for(let i=0;i<m;i++){
//     //     for(let j=0;j<n;j++){
//     //       m2[i][j]=ans[m-1-j][i]
//     //     }  
//     // }
//     // return m2;
//     return ans;
// }
// console.log(rotateMatrix(m2,m,n))


// Transpose then rotate 
// function transposeMatrix(m1,m,n){
//     let ans=new Array(m)
//         for(let i=0;i<m;i++){
//             ans[i]=new Array(n)
//         }
//         //transpose
//         for(let i=0;i<m;i++){
//             for(let j=0;j<n;j++){
//                 ans[i][j]=m1[j][i]
//             }
//         }
  
//         //swap column
//         // let i=0; j=m-1;
//         // while(i<j){
//         //     for(let k=0;k<m;k++){
//         //         let temp=ans[k][i]
//         //         ans[k][i]=ans[k][j];
//         //         ans[k][j]=temp;
//         //     }
//         //     i++;
//         //     j--;
//         // }
//         return ans;
// }

// const m1=[[1,2,3],[4,5,6],[7,8,9]];
// let m=m1.length;
// let n=m1[0].length;
// console.log(transposeMatrix(m1,m,n))


// for(let i=0;i<m;i++){
//     for(let j=0;j<n;j++){
//         let temp=ans[j][i]
//         ans[j][i]=ans[j][m-1-i];
//         ans[j][m-1-i]=temp;
//     }
// }

// function transposeMatrix(matrix,n){
// for(let i=0;i<n;i++){
//     let j=i;
//     while(j<n){
//         let temp=matrix[i][j]
//         matrix[i][j]=matrix[j][i]
//         matrix[j][i]=temp;
//         j++
//     }
// }
// // return matrix
// console.log(matrix)
// }

// function rotate(matrix){
//     let n=matrix.length;
//     transposeMatrix(matrix,n)
//     let i=0;j=n-1;
//     while(i<j){
//         for(let k=0;k<n;k++){
//             let temp=matrix[k][i]
//             matrix[k][i]=matrix[k][j]
//             matrix[k][j]=temp;
//         }
//         i++;
//         j--;
//     }
//     return matrix
// }
// const matrix=[[1,2,3],[4,5,6],[7,8,9]];
// console.log(rotate(matrix))

// explode bomb
// function explodeBomb(arr,m,n){
//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             if(arr[i][j]===-1){
//                 continue;
//             }
//             if(i-1>=0 && arr[i-1][j]===-1){
//                 arr[i][j]++
//             }
//             if(i+1<m && arr[i+1][j]===-1){
//                 arr[i][j]++
//             } if(j-1>=0 && arr[i][j-1]===-1){
//                 arr[i][j]++
//             } if(i+1<n && arr[i][j+1]===-1){
//                 arr[i][j]++
//             }
//         }
//     }
//     return arr;
// }
// let arr=[[0,0,0],[0,-1,0],[-1,0,0]]
// let m=arr.length;
// let n=arr[0].length
// console.log(explodeBomb(arr,m,n))

// print matrix in soirial form 
// const matrix=[[1,2,3],[4,5,6],[7,8,9]];
// let m=matrix.length
// let n=matrix[0].length
// function spirailOrder(matrix,m,n){
//     let ans=[];
//     let fr=0;lr=m-1; fc=0;lc=n-1;
//     while(fr<=lr && fc<=lc){
//         //fr=fc--lc
//         for(let i=fc;i<=lc;i++){
//             ans.push(matrix[fr][i])
//         }
//         fr++;
//         //lc=fr--lr
//         for(let i=fr;i<=lr;i++){
//             ans.push(matrix[i][lc])
//         }
//         lc--;
//         if(fr>lr){break;}
//         //lr=lc--fc
//         for(let i=lc;i>=fc;i--){
//             ans.push(matrix[lr][i])
//         }
//         lr--;
//         //fc=lr--fr
//         for(let i=lr;i>=fr;i--){
//             ans.push(matrix[i][fc])
//         }
//         fc++
//     }
//     return ans;
// }
// console.log(spirailOrder(matrix,m,n))


// diagonal 
// let matrix=[[1,0,0],[0,1,0],[0,0,1]]
// let matrix=[[0,0,1],[0,1,0],[1,0,0]]
// let m=matrix.length
// function isDiagonal(matrix,m){
//     for(let i=0;i<m;i++){
//         for(let j=0;j<m;j++){
//             if(i+j===m-1){
//                 continue
//             }
//             if(matrix[i][j]!==0){
//                 return false
//             }
//         }
//     }
//     return true
// }
// console.log(isDiagonal(matrix,m))


// find unique
// const arr=[[1,8,4],[4,5,5],[9,8,9]];
// let m=arr.length;
// let n=arr[0].length;
// function findUniq(arr,m,n){
//     let freq={};
//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             if(freq[arr[i][j]]===undefined){
//                 freq[arr[i][j]]=1
//             }else{
//                 freq[arr[i][j]]+=1
//             }
//         }
//     }
//     let ans=[];
//     const b=Object.keys(freq)
//     for(let i=0;i<b.length;i++){
//         if(freq[b[i]]===1){
//             ans.push(b[i])
//         }
//     }
//     return ans;
// }
// console.log(findUniq(arr,m,n))

// island peimeter 
// const arr=[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
// let m=arr.length;
// let n=arr[0].length;
// let cnt=0;
// function findPeimeter(arr,m,n){
//     for(let i=0;i<m;i++){
//         for(let j=0;j<n;j++){
//             if(arr[i][j]===1){
//                 if(i===0 || arr[i-1][j]===0) cnt++
//                 if(i===m-1 || arr[i+1][j]===0) cnt++
//                 if(j===0 || arr[i][j-1]===0) cnt++
//                 if(j===n-1 || arr[i][j+1]===0) cnt++
//             }
//         }
//     }
//     return cnt;
// }
// console.log(findPeimeter(arr,m,n))



