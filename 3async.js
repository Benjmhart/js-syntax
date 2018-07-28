//can use quokka


const asynchro = (a, callback) => {
  a++;
  return callback(a);
};

const { promisify } = require('util');

const promised = promisify(asynchro);

promised(2)


const fetch = require('node-fetch')

const fetchMyGithub = async () => {
  const document = await fetch('https://api.github.com/users/benjmhart')
}; ///this thing returns a PROMISE!

fetch('https://api.github.com/users/benjmhart').then(r => r.json()).then (j => console.log(j))

await (await fetch('https://api.github.com/users/benjmhart')).json();

//promise.all