/**
 * Return the total sum of all even fibonacci numbers up to and including
 * the value given to you at `maxFibValue`
 *
 * @param  {Number} maxFibValue
 * @return {Number} sum
 */
function _sumFibs(maxFibValue) {
  let sum = 1;
  let next = 2;
  let previous = 1;
  const fibs = [];

  while (next <= maxFibValue) {
    next = sum + previous;
    previous = sum;
    sum = next;
    if (sum % 2 === 0) {
      fibs.push(sum);
    }
  }

  sum = 0;
  for (let i = 0; i < fibs.length; i++) {
    sum += fibs[i];
  }

  return sum;
}

// bonus round
//define your base case, validate your inputs
function _highestFibonacciNumber(maxFibValue) {
  var highest = 1;
  let next = 2;
  let previous = 1;

  if (typeof maxFibValue === 'number') {
    while (next <= maxFibValue) {
      next = highest + previous;
      previous = highest;
      if (next < maxFibValue) {
        highest = next;
      }
    }

    return highest;
  } else {
    throw new Error('Please provide a valid number');
  }

};

/**
 * Do not modify code below.
 * You must be at least level 10 to understand.
 */
module.exports = {
  sumFibs: _sumFibs,
  highestFibonacciNumber: _highestFibonacciNumber
};