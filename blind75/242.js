/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map1 = new Map();
    let map2 = new Map();
    if (s.length!==t.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (map1.get(s[i])===undefined) map1.set(s[i],1);
        else map1.set(s[i],map1.get(s[i])+1);
        if (map2.get(t[i])===undefined) map2.set(t[i],1);
        else map2.set(t[i],map2.get(t[i])+1);

    }
    if (map1.size!==map2.size) return false;
    let val2;
    for (let [key, val] of map1) {
        val2 = map2.get(key);
        if (val2 !== val || (val === undefined && !map2.has(key))) {
            return false;
        }
    }
    return true;

};
