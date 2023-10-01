function reverseAlphabet(input) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const reversedAlphabet = alphabet.split('').reverse().join('');
    let result = '';
    
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (alphabet.includes(char)) {
        const index = alphabet.indexOf(char);
        result += reversedAlphabet[index];
      } else {
        result += char;
      }
    }
    
    return result;
  }
  
  const inputString = "SUTNAUQ3";
  const reversedString = reverseAlphabet(inputString);
  console.log(reversedString); 
  