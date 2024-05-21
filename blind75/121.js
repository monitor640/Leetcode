/**
 * @param {number[]} prices
 * @return {number}
 */

//sliding window problem, not
var maxProfit = function (prices) {
    if (prices.length === 1) return 0;
    let dif = 0;
    let min = prices[0]+1;
    let max = 0;
    let maxloc = 0;
    let maxin = 0;
    let maxinloc = 0;
    let len = prices.length;
    for (let i = 0; i < len; i++) {
        if (prices[i] < min) {
            let minloc = prices[i];
            if (maxin > i) {
                dif = max - minloc;
                min = minloc;
                continue;
            } else {
                for (let j = i + 1; j < len; j++) {
                    if (prices[j] > maxloc) {
                        maxloc = prices[j];
                        maxinloc = j;
                    }
                }
            }
            if (maxloc - minloc > dif) {
                dif = maxloc - minloc;
                min = minloc;
                max = maxloc;
                maxin = maxinloc;
            }
            maxloc = 0;
            minloc = 0;
        }

    }
    return dif;
};

let arr = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr));