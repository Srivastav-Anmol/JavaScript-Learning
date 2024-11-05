/* const arr=[0,1,2,3,4]
console.log(arr);

arr.push(5)
console.log(arr);

arr.unshift(-1) //for adding value in front of array
console.log(arr);

arr.shift()// for removing first value from array
console.log(arr);

console.log(arr.indexOf(10)) //when not present in array it will return -1
console.log(arr.includes(0));

//const newArr=arr.join('->')
//console.log(newArr);

console.log("A=",arr);
const my1=arr.slice(1,3)
console.log(my1);

console.log("B=",arr);
const my2=arr.splice(1,3)
console.log("C=",arr);
console.log(my2);
 */
//++++++++Important concepts+++++++

const m=['A','B','C']
const x=['X','Y','Z']
//m.push(x)  it will add list within the original list
console.log(m);
//console.log(m[3][0]);

/* const m1=m.concat(x)
console.log(m1); */

const m1=[...m,...x] //spread operator
console.log(m1);


const m2=[1,2,[3,4,5],6,7,[8,9,[10,11]]]
const m3=m2.flat(Infinity)
console.log(m3);

//creating an array from a set of arrays

const d=10
const e=20
const f=30
console.log(Array.of(d,e,f));
console.log(Array.from("Anmol"));






