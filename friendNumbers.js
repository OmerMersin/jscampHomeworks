function isFriendNumber(num1, num2) {
    let finalNumber1 = calculateSubNumbers(num1);
    let finalNumber2 = calculateSubNumbers(num2);
  
    if (finalNumber1 == num2 && finalNumber2 == num1) {
      console.log(`${num1} and ${num2} are friend numbers.`);
    } else {
      console.log(`${num1} and ${num2} are not friend numbers.`);
    }
  }
  
  function calculateSubNumbers(num1) {
    const calculateNumbers = [];
    let finalNumber = 0;
    for (let i = 0; i < num1; i++) {
      if (num1 % i == 0) {
        calculateNumbers.push(i);
      }
    }
    for (let j = 0; j < calculateNumbers.length; j++) {
      finalNumber += calculateNumbers[j];
    }
    return finalNumber;
  }
  
  isFriendNumber(220, 284);
  isFriendNumber(50, 60);