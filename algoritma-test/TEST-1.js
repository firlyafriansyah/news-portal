function ReverseAlphabet(data) {
    var alphabets = data.replace(/[0-9]/g, '').split('').reverse().join('');
    var numbers = data.replace(/[^0-9]/g, '');
    return alphabets + numbers;
}
var data = 'NEGIE1';
console.log(ReverseAlphabet(data));
