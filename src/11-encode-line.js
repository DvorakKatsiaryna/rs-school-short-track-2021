/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let repeats = 1;
  const arr = [];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      repeats += 1;
      if (i === str.length - 1) {
        arr.push(`${repeats}${str[i - 1]}`);
      }
    } else {
      if (repeats === 1) {
        arr.push(str[i - 1]);
      } else {
        arr.push(`${repeats}${str[i - 1]}`);
      }
      repeats = 1;
      if (i === str.length - 1) {
        arr.push(str[i]);
      }
    }
  }
  return arr.join('');
}

module.exports = encodeLine;
