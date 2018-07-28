//can use quokka

var add = function(a, b) {
  return a + b;
};
add(1, 2); //?

add = (a, b) => {
  return a + b;
};
add(1, 2); //?

add = (a, b) => a + b;
add(1, 2); //?

var addOne = a => a + 1;

addOne(2); //?
//currying
