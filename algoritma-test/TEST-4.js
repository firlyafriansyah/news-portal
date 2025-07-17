function Diagonal(matrix) {
    var firstDiagonal = 0;
    var secondDiagonal = 0;
    var n = matrix.length;
    for (var i = 0; i < n; i++) {
        firstDiagonal += matrix[i][i];
        secondDiagonal += matrix[i][n - 1 - i];
    }
    return Math.abs(firstDiagonal - secondDiagonal);
}
var matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
console.log(Diagonal(matrix));
