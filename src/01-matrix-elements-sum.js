function getMatrixElementsSum(matrix) {
  let sum = 0;
  const columnCount = matrix[0].length;
  for (let i = 0; i < columnCount; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] !== 0) {
        sum += matrix[j][i];
      } else {
        break;
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
