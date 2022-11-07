"use strict";
let people = ["Greg", "Mary", "Devon", "James"];

//1
for(let person of people){
    console.log(person);
}

//2
people.shift();
console.log(people);

//3
people.pop();
console.log(people);

//4
people.unshift("Matt");
console.log(people);

//5
people.push("Gokul");
console.log(people);

//6
for(let person in people){
    if(people[person]!="Mary"){
        console.log(people[person]);
    }
    else{
        console.log(people[person]);
        break;
    }
    
}

//7
let copyPeople=people.slice(2);
console.log(copyPeople);

//8
console.log(people.indexOf("Mary"));

//9
console.log(people.indexOf("Foo"));

//10
people.splice(people.indexOf("Devon"), 0, "Elizabeth", "Artie");
console.log(people);

//11
let withBob=["Bob"];
people=people.concat(withBob);
console.log(people);