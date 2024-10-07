/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
    let n=nums.length;
    let maxCount=Math.floor(n/2);
    let map=new Map();
    for(let ele of nums){
        let freq=map.get(ele) || 0;
        map.set(ele,freq+1);
    }
    for(let [key,values] of map.entries()){
        if(values>maxCount){
         return key;   
        }
    }
};

