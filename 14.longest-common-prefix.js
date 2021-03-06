/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (33.00%)
 * Total Accepted:    413.6K
 * Total Submissions: 1.3M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";

    if (strs.length == 0) return prefix;

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        let occurence = 0;
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] == char) {
                occurence += 1;
            } else {
                break;
            }
        }
        if (occurence == strs.length - 1) {
            prefix += char;
        } else {
            return prefix;
        }
    }

    return prefix;
};

