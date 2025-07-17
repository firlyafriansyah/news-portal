function FindLongestWord(sentence) {
    var words = sentence.split(' ');
    var longestWord = '';
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return "".concat(longestWord, ": ").concat(longestWord.length, " character");
}
var sentence = 'Saya sangat senang mengerjakan soal algoritma';
console.log(FindLongestWord(sentence));
