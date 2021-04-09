/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let sum = 0;
  let word1 = s1;
  let word2 = s2;
  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] === word2[j]) {
        sum += 1;
        word1 = word1.replace(word1[i], ' ');
        word2 = word2.replace(word2[j], '');
      }
    }
  }
  return sum;
}

module.exports = getCommonCharacterCount;
