/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let allPossible = [];
    let chosen = [];
    let sum = 0;
    let max = 0;
    let ver = 0;
    if (points.length===1) return 0;
    for (let i = 0; i < points.length; i++) {
        allPossible[i] = [];
        for (let j = 0; j < points.length; j++) {
            let dis = Math.abs(points[j][0] - points[i][0]) + Math.abs(points[j][1] - points[i][1]);
            allPossible[i][j]=dis;
            if (dis>max) max=dis;
        }
    }
    console.log(allPossible)

    for (let x =0; x < points.length - 1; x++) {
        let a;
        let b;
        let min = max;
        if (x===points.length-2 && chosen.length===points.length){chosen=[]}
        for (let i = 0; i < allPossible.length; i++) {
            for (let j = 0; j < allPossible.length; j++) {
                if (!(chosen.includes(j) && chosen.includes(i))&& i!==j && allPossible[i][j] < min && allPossible[i][j]!==0) {
                    min = allPossible[i][j];
                    a = i;
                    b = j;
                }
            }
        }
        allPossible[a][b]=0;
        allPossible[b][a]=0;
        if (!(chosen.includes(a))) chosen.push(a);
        if (!(chosen.includes(b))) chosen.push(b);
        sum+=min;
        ver += 1;
    }
    return sum;


};

console.log(minCostConnectPoints([[2,-3],[-17,-8],[13,8],[-17,-15]]));