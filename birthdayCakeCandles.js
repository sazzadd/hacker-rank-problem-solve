function birthdayCakeCandles(candles) {
  // Write your code here
  //   console.log(candles);
  const maxHeight = Math.max(...candles);
  //   console.log(maxHeight)
  let count = 0;
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] === maxHeight) {
      count++;
    }
  }
  console.log(count);
}
birthdayCakeCandles([3, 2, 1, 3]);
