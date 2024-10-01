function removeDuplicates(arr){
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i]!=arr[j]){
            //if unique element is found , get the unique element  next to the first unique element
            arr[i+1]=arr[j];
            //increment i counter because we are done checking for 1st element 
            i++;

        }
    }
    //return count of unique elements 
    return (i+1);

}

let arr=[0,0,1,1,1,2,2,2,3,3,4]
console.log(removeDuplicates(arr));