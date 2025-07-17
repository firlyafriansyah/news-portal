function FindLongestWord(sentence: string): string {
  let longestWord = '';
  const words = sentence.split(' ');

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return `${longestWord}: ${longestWord.length} character`
}

const sentence = 'Saya sangat senang mengerjakan soal algoritma';
console.log(FindLongestWord(sentence));
