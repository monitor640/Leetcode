/**
 * @param {number[]} plantTime
 * @param {number[]} growTime
 * @return {number}
 */
var earliestFullBloom = function(plantTime, growTime) {
    const flowers = [];
    for (let i = 0; i < plantTime.length; i++) {
        flowers[i]=[plantTime[i], growTime[i]];
    }
    flowers.sort((a,b) => b[1]-a[1]);

    let totalTime = 0;
    let plantingTime = 0;
    for (let i = 0; i < plantTime.length; i++) {
        totalTime = Math.max(totalTime,plantingTime+flowers[i][0]+flowers[i][1])
        plantingTime+=flowers[i][0];
    }
    return totalTime;
};

