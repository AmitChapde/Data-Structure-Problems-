/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortedSquares = function(nums) {
    let n=nums.length;
    for(let i=0;i<n;i++){
        nums[i]=nums[i]*nums[i];
    }
    return nums.sort((a, b) => a - b);
};

let arr=[-4,-1,0,3,10]
console.log(sortedSquares(arr));