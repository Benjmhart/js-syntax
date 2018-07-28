const obj = {
  propA: 'string',
  propB: 'number',
  propD: {
    propE: 7
  }
};

const {
  propA,
  propB,
  propC = 9,
  propD,
  propD: { propE }
} = obj;

function fireSoon({ ready = false, aim, fire }) {
  /*stuff and things*/
}
firesoon(object);

const newobj = { propA, propC };

//easy switch values
/*
THE OLD WAY
var a = 2
var b = 3
var tmp = a
a = b
b = tmp
*/
const firsts = 1;
const seconds = 2;
const [seconds, firsts] = [firsts, seconds];

firsts; //2
seconds; //1

//SPREAD & REST
const arr = [1, 2, 3];
const [first, second] = arr;
function returnArgs(first, second) {
  return arguments;
}
returnArgs(...arr);

const [head, head2, ...tail] = arr;

//object spread es2017
const shallowcopy = { ...obj };

const deepcopy = JSON.parse(JSON.stringify(obj));
