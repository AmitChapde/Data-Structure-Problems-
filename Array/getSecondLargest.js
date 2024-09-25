function getSecondLargest(arr) {
    let fLargest=arr[0];
    let sLargest=-1;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>fLargest){
            sLargest=fLargest;
            fLargest=arr[i];
        }else if(arr[i]<fLargest && arr[i]>sLargest){
            sLargest=arr[i];
        }
    }
    
    return sLargest;
}

const arr = [10, 10];
const arr2 = [12, 35, 1, 10, 34, 1]
console.log(getSecondLargest(arr));
console.log(getSecondLargest(arr2));