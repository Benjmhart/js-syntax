var sequence = new (require('events')).EventEmitter(); //or baconjs etc.

sequence.on('end', x => {
  //return  the last value
});

sequence.on('getUser', () => {
  //...end
});

sequence.emit('getuser');
