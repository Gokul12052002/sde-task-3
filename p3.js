"use strict";
const cargoHold=['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//a
cargoHold.splice(3,0,'keys');
console.log(cargoHold);

//b
cargoHold.splice(cargoHold.indexOf('instruction manual'),1);
console.log(cargoHold);

//c
cargoHold.splice(2,4,'cat', 'fob', 'string cheese');
console.log(cargoHold);