let productExceptSelf=function(nums){
    let n=nums.length;
    let output=new Array(n);

    output[0]=1;
    for(let i=1;i<n;i++){
        output[i]=output[i-1]*nums[i-1];
    }

    let right=1;
    for(let i=n-1;i>=0;i--){
        output[i]=output[i]*right;
        right=right*nums[i];
    }
    return output;
}



console.log(productExceptSelf([1, 2, 3, 4])); // Output: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3])); // Output: [0, 0, 9, 0, 0]