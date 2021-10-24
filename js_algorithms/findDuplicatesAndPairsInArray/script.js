exports.uniqueNumbers = (inputArray) => {
  let uniqueNumbers = inputArray.length === 0 ? 0 : 1;

  inputArray.sort();
  for (let i = 0; i < inputArray.length - 1; i++) {
    const currentNumber = inputArray[i];
    const nextNumber = inputArray[i + 1];
    if (currentNumber !== nextNumber) {
      uniqueNumbers += 1;
    }
  }

  return uniqueNumbers;
};

exports.numberOfPairs = (inputArray) => {
  let numberOfPairs = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const sameNumberOccurrences = inputArray.filter(
      (number) => number === inputArray[i]
    );
    if (sameNumberOccurrences.length === 2) {
      numberOfPairs += 1;
    }
  }

  return numberOfPairs / 2;
};

exports.largestPair = (inputArray) => {
  let pairs = [];

  for (let i = 0; i < inputArray.length; i++) {
    const sameNumberOccurrences = inputArray.filter(
      (number) => number === inputArray[i]
    );
    if (sameNumberOccurrences.length === 2) {
      pairs.push(sameNumberOccurrences[0])
    }
  }
  pairs.sort((a, b) => a - b)

  return pairs.length === 0 ? 'No pairs in the input array' : pairs[pairs.length - 1];
};