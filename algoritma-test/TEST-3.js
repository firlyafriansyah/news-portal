function CountArray(input, query) {
    return query.map(function (q) { return input.filter(function (word) { return word === q; }).length; });
}
var input = ['xc', 'dz', 'bbb', 'dz'];
var query = ['bbb', 'ac', 'dz'];
console.log(CountArray(input, query));
