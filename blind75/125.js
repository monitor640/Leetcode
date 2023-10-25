/**
 * @param {string} s
 * @return {boolean}
 */
//Input: s = "A man, a plan, a canal: Panama"
//Output: true
//Explanation: "amanaplanacanalpanama" is a palindrome.
var isPalindrome = function(s) {
 s=s.replace(/[^a-zA-Z0-9]+/g,"").toLowerCase();

    for (let i = 0, j = s.length-1; i < j; i++, j--) {
        if (s[i]!==s[j]) return false;
    }
 return true;
};
