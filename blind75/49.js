/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let groups = [];
    let len = new Map();
    let con = true;
    for (let i = 0; i < strs.length; i++) {
        if (!len.has(strs[i].length)){
            len.set(strs[i].length,[groups.length]);
            groups.push([strs[i]]);

        }
        else{
            let indexes = len.get(strs[i].length);
            for (let j = 0; j < indexes.length; j++) {
                if (isAnagram(groups[indexes[j]][0],strs[i])){
                    groups[indexes[j]].push(strs[i]);
                    con = false;
                }
            }
            if (con) {

                let ar = len.get(strs[i].length);
                ar.push(groups.length);
                len.set(strs[i].length,ar);
                groups.push([strs[i]]);
            }
            con = true;

        }
    }
    return groups;
};

function isAnagram(first, second ){
    let dif = new Map();
    for (let i = 0; i < first.length; i++) {
        let one = first[i];
        let two = second[i];

        if (one===two) continue;

        if (dif.has(one)) dif.set(one,dif.get(one)+1);
        else dif.set(one,1);

        if (dif.has(two)) dif.set(two,dif.get(two)-1);
        else dif.set(two,-1);
    }
    for (const val of dif.values()){
        if (val!==0)return false;
    }
    return true;
}

//horrible, horrible solution, no idea what i was thinking
//split the string to array, sort the array, join the string
//save the output to a map, if it exists in the map just add the new string to the value