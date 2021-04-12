/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resulter = [];
  for (let i = 0; i < matrix.length; i++) {
    if (Array.isArray(matrix[i])) {
      resulter[i] = [];
      for (let j = 0; j < matrix[i].length; j++) {
        resulter[i][j] = 0;
        let number = 0;
        if (i !== 0) {
          if (j !== 0) {
            if (matrix[i - 1][j - 1] === true) {
              number++;
            }
          }
          if (matrix[i - 1][j] === true) {
            number++;
          }
          if (j !== matrix[i].length - 1) {
            if (matrix[i - 1][j + 1] === true) {
              number++;
            }
          }
        }
        if (i !== matrix.length - 1) {
          if (j !== 0) {
            if (matrix[i + 1][j - 1] === true) {
              number++;
            }
          }
          if (matrix[i + 1][j] === true) {
            number++;
          }
          if (j !== matrix[i].length - 1) {
            if (matrix[i + 1][j + 1] === true) {
              number++;
            }
          }
        }
        if (j !== matrix[i].length - 1) {
          if (matrix[i][j + 1] === true) {
            number++;
          }
        }
        if (j !== 0) {
          if (matrix[i][j - 1] === true) {
            number++;
          }
        }
        resulter[i][j] = number;
      }
    }
  }
  return resulter;
}

module.exports = minesweeper;
