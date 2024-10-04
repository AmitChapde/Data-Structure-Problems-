let maxProfit = function(prices) {
    //Initializing the min price  as min 
    let min=prices[0];
    //profit rather be 0 than negative
    let maxProfit=0;
    for(let i=0;i<prices.length;i++){
        //calc cost that i.e. initialProfit
        let cost = prices[i]-min;
        maxProfit=Math.max(maxProfit,cost);
        //Update the min var with minimum value
        min=Math.min(prices[i],min);
    }
    return maxProfit;
};

let arr=[7,1,5,3,6,4];
console.log(maxProfit(arr));