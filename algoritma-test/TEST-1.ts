function ReverseAlphabet(word: string): string {
  const alphabets = word.replace(/[0-9]/g, '').split('').reverse().join('');
  const numbers = word.replace(/[^0-9]/g, '');
  return alphabets + numbers;
}

const data = 'NEGIE1';
console.log(ReverseAlphabet(data))
