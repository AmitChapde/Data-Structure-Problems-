let rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;  // In case k is larger than n
    
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
    };
    
    // Reverse the entire array
    reverse(nums, 0, n - 1);
    
    // Reverse the first k elements
    reverse(nums, 0, k - 1);
    
    // Reverse the remaining elements
    reverse(nums, k, n - 1);
};

let arr=[7, 8, 8, 10, 12];
rotate(arr,3);
console.log(arr)