let arr=[[2,4],[4,7],[1,9],[6,8]]
function mergeUnique(arr){
    arr.sort((a,b)=>a[0]-b[0])
    let prevInt=arr[0];
    let n=arr.length;
    // let m=arr[0].length;
    let temp=[]
    console.log(arr)
    for(let i=1;i<n;i++){
        if(arr[i][1]<=prevInt[1]){
            temp.push(prevInt[0],Math.max(prevInt[1],arr[i][1]))
        }
        prevInt=temp;
        // console.log(temp)
    }
return temp;
}
mergeUnique(arr)
console.log(arr)