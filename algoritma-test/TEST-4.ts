function Diagonal(matrix: number[][]): number {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    firstDiagonal += matrix[i][i];
    secondDiagonal += matrix[i][n - 1 - i];
  }

  return Math.abs(firstDiagonal - secondDiagonal);
}

const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

console.log(Diagonal(matrix))
