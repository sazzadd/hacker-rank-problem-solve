function minMax(arr) {
  arr.sort((a, b) => a - b);

  let min = arr[0] + arr[1] + arr[2] + arr[3];
  let max = arr[1] + arr[2] + arr[3] + arr[4];

  console.log(min, max);
}
minMax([7, 69, 2, 221, 8974]);
