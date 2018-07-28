//can use quokka

const thing = {
  stuff: 1,
  vague: 2
};

const dostuff = () => {
  thing.stuff++;
};

if (thing.stuff) {
  dostuff();
}

thing.stuff && dostuff();

/*
both of these will fire the function.
(true) && function()
(false) || function()
*/

// fallback

var abc = thing.stuff || 0;

isprobablyone = (a = 1) => a;
//EARLYRETURNS

function checkstuffrepeatedly() {
  if (thing.stuff) {
    var response = thing.stuff;
  } else {
    var response = thing.stuff + 1;
  }
  if (response) {
    return response;
  }
}
function checkstuffthendothings() {
  if (thing.stuff === 1) {
    return;
  }
  return thing.stuff--;
}

//COERCE TO BOOLEAN

const bool = !thing.stuff;
const bool = !!thing.stuff;

//TERNARIES

var tern = x => (x.stuff ? 1 : 0);

//NESTED TERNARY!
var ntern = x => (x.stuff ? 1 : x.vague ? 1 : 0);
