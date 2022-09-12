// pattern problem

// let n=6;
// for(let i=0;i<n;i++){
//     let ans="";
//     for(let sp=0;sp<=n-1-i;sp++){
//         ans+=" "
//     }
//     for(let j=0;j<2*i+1;j++){
//         ans+="*"
//     }
//     console.log(ans)
// }



// hollow square problem
// *****
// *   *
// *   *
// *   *
// *****

// let n=5;
// for(let i=0;i<n;i++){
//     let str=" ";
//     for(let j=0;j<n;j++){
//         if(i===0 || i===n-1){
//             str+="*"
//         }else if(j===0 || j===n-1){
//             str+="*"
//         }else{
//             str+=" "
//         }
//     }
//     console.log(str)
// }




// right triangle pattern 
// *
// **
// ***
// ****
// *****

// let n=5;
// for(let i=0;i<n;i++){
//     let str="";
//     for(let sp=0;sp<n-1-i;sp++){
//         str+=" ";
//     }
//     for(let j=0;j<=i;j++){
//         str+="*"
//     }
//     console.log(str)
// }

// Downward Triangle Star Pattern
// *****
// ****
// ***
// **
// *

// let n=5;
// for(let i=n;i>0;i--){
//     let str="";
//     for(let j=0;j<i;j++){
//         str+="*"
//     }
//     console.log(str)
// }

// let n=5;
// for(let i=0;i<n;i++){
//     let str=""
//     for(let j=0;j<n-i;j++){
//         str+="*"
//     }
//     console.log(str)
// }

// Hollow Triangle Star Pattern
// *
// **
// * *
// *  *
// *   *
// ******

// let n=6;
// for(let i=1;i<=n;i++){
//     str="";
//     for(let j=0;j<i;j++){
//         if(i===n){
//             str+="*"
//         }else if(j===0 || j==i-1){
//             str+="*"
//         }else{
//             str+=" "
//         }
//     }
//     console.log(str)
// }


// Pyramid Pattern
//     *
//    ***
//   *****
//  *******
// *********

// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let sp=0;sp<n-i;sp++){
//         str+=" ";
//     }
//     for(let j=0;j<2*i-1;j++){
//         str+="*"
//     }
//     console.log(str)
// }


// Hollow Pyramid Star Pattern
//     *
//    * *
//   *   *
//  *     *
// *********

// let n=5;
// for(let i=1;i<=n;i++){
//     let str="";
//     for(let sp=1;sp<=n-i;sp++){
//         str+=" ";
//     }
//     for(let j=0;j<2*i-1;j++){
//         if(i===1 ||i===n){str+="*"}
//         else if(j==0 || j==2*i-2){
//             str+="*"
//         }else{
//             str+=" "
//         }
//     }
//     console.log(str)
// }


//  Diamond Pattern in Javascript
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

// let n=5;
// let str=""
// for(let i=0;i<n;i++){
//     for(let sp=0;sp<n-1-i;sp++){
//         str+=" ";
//     }
//     for(let j=0;j<2*i+1;j++){
//         str+="*"
//     } 
//     str+="\n"
// }
// for(let i=0;i<n-1;i++){
//     for(let sp=0;sp<=i;sp++){
//         str+=" "
//     }
//     for(j=0;j<((n-1-i)*2)-1;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)

// Hollow Diamond Pattern
//     *
//    * *
//   *   *
//  *     *
// *       *
//  *     *
//   *   *
//    * *
//     *

// let n=5;
// let str="";
// for(let i=1;i<=n;i++){
//     for(let sp=0;sp<n-i;sp++){
//         str+=" "
//     }
//     for(let j=0;j<2*i-1;j++){
//         if(j===0 || j===2*i-2){
//             str+="*"
//         }else{
//             str+=" "
//         }
//     }
//     str+="\n"
// }
// for(let i=1;i<=n-1;i++){
//     for(let sp=0;sp<i;sp++){
//         str+=" "
//     }
//     for(let j=(n - i) * 2 - 1;j>=1;j--){
//         if(j===1 || j===((n-i)*2)-1){
//             str+="*"
//         }else{
//             str+=" "
//         }
//     }
//     str+="\n"
// }

// console.log(str)




// Heart Star Pattern In JavaScript
//  ***   ***
// ***** *****
// ***********
//  *********
//   *******
//    *****
//     ***
//      *


// let n=6;
// let str="";
// for (let i = n / 2; i < n; i += 2) {
//     // print first spaces
//     for (let j = 1; j < n - i; j += 2) {
//       str += " ";
//     }
//     // print first stars
//     for (let j = 1; j < i + 1; j++) {
//       str += "*";
//     }
//     // print second spaces
//     for (let j = 1; j < n - i + 1; j++) {
//       str += " ";
//     }
//     // print second stars
//     for (let j = 1; j < i + 1; j++) {
//       str += "*";
//     }v 
//     str += "\n";
//   }
// for(let i=n;i>0;i--){
//     for(let sp=0;sp<n-i;sp++){
//         str+=" "
//     }
//     for(let j=0;j<2*i-1;j++){
//         str+="*"
//     }
//     str+="\n"
// }
// console.log(str)