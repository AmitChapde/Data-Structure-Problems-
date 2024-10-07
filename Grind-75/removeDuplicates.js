let containsDuplicate = function(nums) {
    let count=0;
    let map=new Map();
    for(let ele of nums){
        let freq=map.get(ele)|| 0;
        map.set(ele,freq+1);
    }
    for(let [key,values] of map ){
        if(values>=2){
            return true;
        }
    }
    return false;
};

let arr=[6,5,5]
console.log(containsDuplicate(arr));