function countWordsInArray(input, query) {
    const wordCount = {};
  
    for (const word of input) {
      if (!wordCount[word]) {
        wordCount[word] = 0;
      }
      wordCount[word]++;
    }
  
    const output = [];
    for (const q of query) {
      output.push(wordCount[q] || 0);
    }
  
    return output;
  }
  
  const INPUT = ['xc', 'dz', 'bbb', 'dz'];
  const QUERY = ['bbb', 'ac', 'dz'];
  const output = countWordsInArray(INPUT, QUERY);
  console.log(output); // Output: [1, 0, 2]
  