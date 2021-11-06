function isPerfectNumber(num) {
  const subNumbers = [];
  let finalNum = 0;
  for (let i = 0; i < num + 1; i++) {
    if (num % i == 0) {
      subNumbers.push(i);
    }
  }
  for (let j = 0; j < subNumbers.length; j++) {
    finalNum += subNumbers[j];
  }
  if (finalNum == num * 2) {
    console.log(num + " is a perfect number.");
  }
}

for (let i = 1; i < 1000; i++) {
  isPerfectNumber(i);
}