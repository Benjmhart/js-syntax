/*
for in/for of

for name in names


for let name of names (specifically for iterators/generators)
*/
const obj = {
  propA: 'string',
  propB: 'number',
  propD: {
    propE: 7
  }
};

const arr = [1, 2, 3, 5, 64, 4, 32, 2];

for (let x = 0; x < arr.length; x++) {
  console.log(arr[x]);
}

for (key in obj) {
  console.log(obj[key]);
}

function* foo() {
  yield 1;
  yield 2;
}

for (let o of foo()) {
  console.log(o);
  // expected output: 1

  break; // closes iterator, triggers return
}
