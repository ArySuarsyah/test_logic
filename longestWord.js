function longest(sentence) {
    const words = sentence.split(' ');
    let longestWord = '';
    
    for (const word of words) {
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    
    console.log(`${longestWord}: ${longestWord.length} karakter`);
  }
  
  const sentence = "Saya sangat senang mengerjakan soal algoritma dari PT. Quantus Telematika";
  longest(sentence); // Output: "mengerjakan: 11 karakter"
  