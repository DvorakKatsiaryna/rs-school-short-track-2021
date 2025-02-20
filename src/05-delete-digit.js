/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  let num = 0;
  const arr = [+str.slice(0, 1)];
  for (let i = 1; i < str.length; i++) {
    num = +(str.slice(0, i - 1) + str.slice(i));
    arr.push(num);
  }
  return Math.max(...arr);
}

module.exports = deleteDigit;
