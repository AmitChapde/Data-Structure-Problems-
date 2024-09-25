function Largest(arr){
    let largest=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
}

const arr= [12, 35, 1, 10, 34, 1]
console.log(Largest(arr));