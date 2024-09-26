function sorted(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]>=arr[i-1]){

        }else{
            return false;
        }
    }
    return true;
}


let arr=[7, 8, 8, 10, 12];
console.log(sorted(arr));