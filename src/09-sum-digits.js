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
function getSumOfDigits(a) {
  const s = a.toString().split('').map((value) => +value);
  if (s.length === 1) {
    return Number(s);
  }
  const f = s.reduce((n, m) => n + m);
  return getSumOfDigits(f);
}

module.exports = getSumOfDigits;
