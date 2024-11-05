const name='Anmol-Srivastava'
let age=23
console.log(`Hello my name is ${name} and i am ${age} years old`);
console.log(name.__proto__); //string is an object which stores value and characters
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(2));
console.log(name.indexOf('o'));


const newName=name.substring(0,4) //dont work with negative values
console.log(newName+"...");

const anotherName=name.slice(-16,4)
console.log(anotherName);

const secondName="   hello,world    "
console.log(secondName);
console.log(secondName.trim()); //trimStart and trimEnd

console.log(name.split('-'));
console.log(name.replace('-',' '));
console.log(name.includes('Sri')); //for checking substring in a given string




