/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(a) {
  const b = [...a];
  let q = 0;
  for (let j = 1; j < a.length; j++) {
    if (a[0] === a[j]) {
      b[j] = `${a[j]}(${q + 1})`;
      q += 1;
    }
    if (a[1] === a[j + 1]) {
      b[j] = `${a[j]}(${q})`;
    }
  }
  return b;
}

module.exports = renameFiles;
