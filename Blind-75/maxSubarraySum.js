function maxSubarraySum(arr){
    let sum=arr[0];
    let maxSum=arr[0];
    for(let i=1;i<arr.length;i++){
        sum=Math.max(arr[i],sum+arr[i]);
        maxSum=Math.max(sum,maxSum);
    }
    return maxSum;

}

console.log(maxSubarraySum([5,4,-1,7,8]));//outputs 23