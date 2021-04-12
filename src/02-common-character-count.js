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
  const num1 = s1.split('');
  const num2 = s2.split('');
  const arr = [];
  num1.forEach(
    (item) => {
      if (num2.includes(item)) {
        arr.push(item);
        delete num2[num2.indexOf(item)];
      }
    },
  );
  return arr.length;
}

module.exports = getCommonCharacterCount;
