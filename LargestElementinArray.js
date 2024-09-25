function larArray(arr){
    arr.sort((a,b)=>b-a);
    return arr[0];
}


let arr=[1, 8, 7, 56, 90]
console.log(larArray(arr));