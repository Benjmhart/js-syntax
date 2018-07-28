//factorial 4 = 4*3*2*1

var factorial = function(n) {
  if (n == 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};

//tail call optimization
