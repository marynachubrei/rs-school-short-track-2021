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
  const num = [];
  const c = n.toString();
  for (let i = 0; i < c.length; i++) {
    const f = new RegExp(`${c[i]}`);
    num.push(+c.replace(f, ''));
  }
  return Math.max(...num);
}

module.exports = deleteDigit;
