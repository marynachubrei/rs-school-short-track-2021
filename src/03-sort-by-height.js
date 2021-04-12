/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let j = 0;
  const arr3 = arr.slice(0, arr.length);
  const arr2 = arr.slice(0, arr.length).sort((a, b) => a - b).filter((value) => value !== -1);
  for (let i = 0; i < arr.length; i++) {
    if (arr3[i] !== -1) {
      arr3[i] = arr2[j];
      j += 1;
    }
  }
  return arr3;
}

module.exports = sortByHeight;
