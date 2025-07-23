import { HashMap } from './HashMap.js';

const test = new HashMap(undefined, 0.75);

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log('Capacity before moon:', test.capacity);
console.log('Length before moon:', test.length());

test.set('moon', 'silver');

console.log('Capacity after moon:', test.capacity);
console.log('Length after moon:', test.length());

test.set('apple', 'dark red');
test.set('frog', 'lime');
console.log('Overwrite apple:', test.get('apple'));
console.log('Overwrite frog:', test.get('frog'));

console.log('Has hat?', test.has('hat'));
console.log('Get kite:', test.get('kite'));
console.log('Remove jacket:', test.remove('jacket'));
console.log('Length after remove:', test.length());
console.log('Has jacket?', test.has('jacket'));

console.log('All keys:', test.keys());
console.log('All values:', test.values());
console.log('All entries:', test.entries());

test.clear();
console.log('After clear - length:', test.length());
