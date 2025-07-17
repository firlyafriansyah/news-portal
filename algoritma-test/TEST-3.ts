function CountArray(input: string[], query: string[]): number[] {
  return query.map(q => input.filter(word => word === q).length);
}

const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];

console.log(CountArray(input, query));
