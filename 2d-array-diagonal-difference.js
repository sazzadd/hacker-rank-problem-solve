// left site
// a[0][0]
// a[1][1]
// a[2][2]
// right site
// a[0][2]
// a[1][1]
// a[2][0]

function diagonalDifference(arr) {
  let leftSite = 0;
  let rightSite = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSite += arr[i][i];
    rightSite += arr[i][arr.length - 1 - i];
  }
  const result = Math.abs(rightSite - leftSite);
  console.log(result);
}
const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
diagonalDifference(arr);
