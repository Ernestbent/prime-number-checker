
function isPrime(number) {
  // Prime numbers must be whole numbers greater than 1
  if (!Number.isInteger(number) || number <= 1) {
    return false;
  }

  // Check for divisors from 2 up to the square root
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

// Export the function
module.exports = {
  isPrime,
};
