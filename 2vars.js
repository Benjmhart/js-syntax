//can use quokka

var arr = [1, 2, 3, 4];

var a = 1; //FUNCTION SCOPED

const b = 2; //BLOCK SCOPED, Can't be redefined (primitive types)

let c = 3; //BLOCK SCOPED, Can be redefined

a;

if (a) {
  const d = 4;
  var e = 5;
}

b;

c;

//d;
//UNDEFINED
//e;

const f = {
  g: 'thing'
};

f.g = 'newthing';
f = { g: 'oldthing' };
//let h = 5
//h = 6
