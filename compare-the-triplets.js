/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) {
      aliceScore = aliceScore + 1;
    } else if (a[i] < b[i]) {
      bobScore = bobScore + 1;
    }
  }
  return [aliceScore, bobScore];
}
const result = compareTriplets([5, 6, 7], [3, 6, 10]);
console.log(result);
