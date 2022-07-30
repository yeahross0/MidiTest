const Timidity = require('timidity')

console.debug('here');

const player = new Timidity('timidity')
player.load('overworld.mid')
player.play()