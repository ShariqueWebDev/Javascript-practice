const occasionalSleeper = (function() {
    let lastSleepingTime = performance.now();

    return function() {
      if (performance.now() - lastSleepingTime > 33) {
        lastSleepingTime = performance.now();
        return new Promise(resolve => setTimeout(resolve, 0));
      } else {
        return Promise.resolve();
      }
    }
  }());

  async function asyncBigIntFactorial(n) {       
    let start = performance.now();

    n = BigInt(n);
    if (n <= 1n) return 1n;

    let result = 1n;
    for (let i = 2n; i <= n; i++) {
      await occasionalSleeper();
      result *= i;
    }
    console.log("Timen", (performance.now() - start) / 1000);
    return result;
  }