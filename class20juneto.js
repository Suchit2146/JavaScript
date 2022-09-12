// minimumof three
// function minOfThree(a,b,c){
//     let cnt=0;
//     while(a&&b&&c){
//         a--;
//         b--;
//         c--;
//         cnt++
//     }
//     return cnt
// }
// console.log(minOfThree(3,6,8))

// avg of two number 
// function add(a,b){
//     return a+b;
// }
// function avg(a,b,fn){
//     return fn(a,b)/2
// }
// console.log(avg(4,8,add))

// check number is prime or not 
// function isPrime(n){
//     if(n===2){return true}
//     for(let i=2;i<=n;i++){
//         if(n%i!==0){
//             return true;
//         }
//         return false
//     }
// }

//  function addPrime(num){
//     let sum=0;
//     for(let j=2;j<=num;j++){
//         if(isPrime(j)){
//             sum+=j
//         }
//     }
//     return sum;
//  }
// console.log(addPrime(7))

// let a=(11).toString(2)
// let a=parseInt("10010",2)
// let a=(0b1000).toString(10)
// console.log(a)
// console.log(7>>1)  

// sum of digit
// function sumOfDigit(num){
//     let s=num.toString();
//     let n=s.length
//     let sum=0;
//     for(let i=0;i<n;i++){
//         let d=parseInt(s[i])
//         sum+=d
//     }
//     return sum
// }
// let num=12345601
// console.log(sumOfDigit(num))


// sum of digit

// function SOD(num){
//     let sum=0
//     while(num>0){
//         let temp=num%10;
//         sum+=temp;
//         num=parseInt(num/10)
//     }
//     return sum;
// }
// let num=12345601
// console.log(SOD(num))


// sum of inner digit 
// function sumOfDigitInner(num){
//     let sum=0
//     let s=num.toString();
//     let n=s.length;
//     if(num<100){return -1}
//     for(let i=1;i<n-1;i++){
//         let d=parseInt(s[i])
//         sum+=d
//     }
//     return sum;
// }
// let num=123
// console.log(sumOfDigitInner(num))


// Bitwise operator
// function sum(a,b){
//     while(b!==0){
//         let carry=a&b;
//         a=a^b;
//         b=carry<<1;
//     }
//     return a;
// }
// console.log(sum(3,4))


//  reaarange
const arr=[1,3,2,2,5]
function reArrange(arr){
    arr.sort((a,b)=>b-a)
    let n=arr.length
    let p=0;
    let q=n-1;
    let op=[]
    for(let i=0;i<n;i++){
        if(i%2==0){
            op.push(arr[q]);
            q--
        }else{
            op.push(arr[p])
            p++
        }
    }
    return op; 
}
console.log(reArrange(arr))