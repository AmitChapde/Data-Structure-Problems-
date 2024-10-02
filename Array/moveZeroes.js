/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(arr) {
    let j=-1;
    let n=arr.length;
    //finding the first zero in the array
    for(let i=0;i<n;i++){
        if(arr[i]==0){
            j=i;
            break;
        }
    }
    //If no zero is found return the array
    if(j===-1) return

    //swap nonzero with zero and move zero pointer (j) pointer forward    
    for(let i=j+1;i<n;i++){
        if(arr[i]!=0){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            j++;

        }
    }
    return arr;
};

let arr=[0,1,0,3,12]
console.log(moveZeroes(arr))