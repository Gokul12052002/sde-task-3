"use strict";

//a
let element1=['hydrogen', 'H', 1.008];
let element2=['helium', 'He', 4.003];
let element26=['iron', 'Fe', 55.85];

//b
let table=new Array();
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);

//c
console.log(table[1], table[1][1]);

//d
console.log(`mass of element1: ${table[0][2]}\nname of element2: ${table[1][0]}\nsymbol of element26: ${table[2][1]}`);