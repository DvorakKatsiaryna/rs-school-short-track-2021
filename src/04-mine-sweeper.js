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
  const cols = matrix.length;
  const rows = matrix[0].length;
  const result = matrix.map((x) => x.map(() => 0));

  function increaseCell(i, j) {
    if (i >= 0 && i < cols && j >= 0 && j < rows) {
      result[i][j]++;
    }
  }

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (matrix[i][j]) {
        increaseCell(i - 1, j - 1);
        increaseCell(i - 1, j);
        increaseCell(i - 1, j + 1);
        increaseCell(i, j - 1);
        increaseCell(i, j + 1);
        increaseCell(i + 1, j - 1);
        increaseCell(i + 1, j);
        increaseCell(i + 1, j + 1);
      }
    }
  }
  return result;
}

module.exports = minesweeper;
