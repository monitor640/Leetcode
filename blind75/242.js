/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let map1 = {};
    let map2 = {};
    if (s.length!==t.length) return false;
    for (let i = 0; i < s.length; i++) {
        if (map1[s[i]]===undefined) map1[s[i]]=1;
        else map1[s[i]]+=1;
        if (map2[s[i]]===undefined) map2[s[i]]=1;
        else map2[s[i]]+=1;

    }


    return map1 === map2;

};

isAnagram("anagram","gramana");