"use strict";
let holdCabinet1=['duct tape', 'gum', 3.14, false, 6.022e23];
let holdCabinet2=['orange drink', 'nerf toys', 'camera', 42, 'parsnip'];
var lenbef=holdCabinet1.length+holdCabinet2.length;

//a
console.log(holdCabinet1.concat(holdCabinet2));

//b
console.log(holdCabinet1.slice(0,2));
console.log(holdCabinet2.slice(2, 4));
var lenaft=holdCabinet1.length+holdCabinet2.length;
if(lenbef==lenaft){
    console.log("slice doesn't alter the array");
}
else{
    console.log("slice... alter the array!");
}

//c
holdCabinet1.reverse();
holdCabinet2.sort();
console.log(holdCabinet1);
console.log(holdCabinet2);