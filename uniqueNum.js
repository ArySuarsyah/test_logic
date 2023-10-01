function uniqueNumber(input) {
    const inputStr = input.toString();
    let uniqueDigit = '';
  
    for (let i = 0; i < inputStr.length; i++) {
      const digit = inputStr[i];
      if (!uniqueDigit.includes(digit)) {
        uniqueDigit += digit;
      }
    }
  
    return parseInt(uniqueDigit);
  }
  
  const inputNumber = 76529752;
  const result = uniqueNumber(inputNumber);
  console.log(result); // Output: 9
  