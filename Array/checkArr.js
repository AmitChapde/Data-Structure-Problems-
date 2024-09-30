
var check = function(nums) {
    let n=nums.length;
    let count=0;
    //count the number of breaks in the sorted array 
    for(let i=1;i<n;i++){
        if(nums[i-1]>nums[i]){
            count++;
        }
    }
    //check for break between last and first element as we are considering circular array
    if(nums[n-1]>nums[0]){
        count++;
    }
    // The array can be sorted and rotated if there are at most 1 break
    return count<=1;
};

const testArrays = [
    [3, 4, 5, 1, 2],    // True: it's a rotated sorted array
    [2, 1, 3, 4],       // False: more than one break (2 > 1 and 4 > 3)
    [1, 2, 3, 4],       // True: already sorted
    [2, 3, 4, 5, 1],    // True: rotated sorted array
    [1],                // True: single element is considered sorted
    [1, 2],             // True: already sorted
    [2, 1],             // True: one rotation
    [5, 1, 2, 3, 4]     // True: rotated sorted array
];

// Run tests
for (let arr of testArrays) {
    console.log(`Array: ${arr}, Can be sorted and rotated: ${check(arr)}`);
}
