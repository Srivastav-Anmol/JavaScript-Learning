//global and local scope--{} by using const,let and var

let a=10
const b=20
var c=30
if(true){
    let a=100
    const b=200
    var c=300
    console.log("INNER BLOCK-->",a,b,c);
}
console.log("OUTER-->",a,b,c);
/*
INNER BLOCK--> 100 200 300
OUTER--> 10 20 300
*/

//block ke andar ki value andar he rahegi usko global me access nhi kr skte but var shows different behaviour..

function one(){
    const name="Anmol"
    two()
    function two(){
        const age=23
        console.log(name);
    }
    //console.log(age); cannot access it because of scope block
}
one()

//way of describing functions

function addone(num){
    return num+1
}
console.log(addone(5));

const addTwo=function(num1){ //hoisting
    return addTwo+2
}
addTwo(5)
