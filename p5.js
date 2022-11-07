"use strict";
let str = 'In space, no one can hear you code.';

//a
console.log(str.split());
console.log(str.split('e'));
console.log(str.split(' '));
console.log(str.split('  '));

//b
let arr = ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join('  '));
console.log(arr.join(' '));

//c and d
let str1 = 'water,space suits,food,plasma sword,batteries';
let str2=str1.split(',').sort().join(',')
console.log(str2);