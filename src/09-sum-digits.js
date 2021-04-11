/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let number = n;
  let sum = 0;
  while (number) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  if (sum < 10) {
    return sum;
  }
  number = sum;
  const result = getSumOfDigits(number);
  return result;
}

module.exports = getSumOfDigits;
