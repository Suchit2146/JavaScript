// reverse string 
// function reverseString(s){
//     let st=s.split("");
//     let n=st.length;
//     for(let i=0;i<Math.floor(n/2);i++){
//         let temp=st[i]
//         st[i]=st[n-1-i]
//         st[n-1-i]=temp;
//     }
//     return st.join("");
// }
// console.log(reverseString("ramuk tihcus"))

// function reverseString(st){
//     st=st.split("");
//     let n=st.length;
//     for(let i=0;i<Math.floor(n/2);i++){
//         let temp=st[i]
//         st[i]=st[n-1-i]
//         st[n-1-i]=temp;
//     }
//     return st.join("");
// }
// console.log(reverseString("ramuk tihcus"))


// let hamInTheGlobalScope="spam";
// function createFunctionScope(){
//     let eggInTheFunctionScope="egg"
//     console.log(hamInTheGlobalScope)
//     console.log(eggInTheFunctionScope)
// }
// createFunctionScope();

// let x;
// console.log(x)


// console.log(x)
// var x=7;


// let tea="sweet";
// if(tea){
//     let tea="ice";
//     // tea="sour"
//     console.log(tea)
// }


// let desert="tart";
// if(desert){
//     let desert="cannaoli";
//     if(desert.length<5){
//         console.log("pass")
//     }else{
//         console.log("nooo")
//     }
// }else{
//     console.log("yehh")
// }


// function findnthpower(a,b){
//     let ans=1;
//     for(let i=0;i<b;i++){
//         ans*=a
//     }
//     return ans;
// }
// console.log(findnthpower(1,0))
// console.log(findnthpower(0,1))
// console.log(findnthpower(2,3))
// console.log(findnthpower(3,2))



// function findnthpower(a,b){
//     let ans=1;
//     while(b>0){
//         ans*=a;
//         b--;
//     }
//     return ans
// }
// console.log(findnthpower(1,0))
// console.log(findnthpower(0,1))
// console.log(findnthpower(2,3))
// console.log(findnthpower(3,2))



// const arr=[1,2,3,4,5];
// function rotate(arr,d){
//     let n=arr.length;
//     let temp=[]
//     for(let i=0;i<d;i++){
//         temp.push(arr[i])
//     }
//     for(let i=0;i<n;i++){
//         arr[i]=arr[i+d]
//     }
//     for(let i=0;i<d;i++){
//         arr[n-d+i]=temp[i]
//     }
//     return arr;
// }
// console.log(rotate(arr,2))

// reverse a number 
// function revNumber(num){
//     let rev=0;
//     while(num>0){
//         let temp=num%10;
//         rev=(rev*10)+temp;
//         num=Math.floor(num/10)
//     }
//     return rev;
// }
// console.log(revNumber(123))


// hcf
// function hcff(a,b){
//     let mini=Math.min(a,b);
//     for(let i=mini;i>=0;i--){
//         if(a%i===0 && b%i===0){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(hcff(36,72))

// Lcm 

function lcmm(a,b){
    let ans;
    for(let i=Math.max(a,b);i<=a*b;i++){
        if(i%Math.min(a,b)===0){
           ans=i
        }
    }
    return ans
}
console.log(lcmm(13,39))