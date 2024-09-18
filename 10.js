//Functions

/* function bolomeraNaam(){
    console.log('A')
    console.log('N')
    console.log('M')
    console.log('O')
    console.log('L')
}
bolomeraNaam() */

//In Function definition we have parameters and when calling functions with certain values they are called arguments

function add(num1,num2){
    console.log(num1+num2); 
}
//const result=add(3,4)
//console.log(result); //remember this function is not returning anything so we need return keyword in function

function add1(num1,num2){
    let result=num1+num2
    return result
}
let getResult=add1(5,6)
console.log("Result = ",getResult);

function message(username='User'){
    if(!username){   //username===undefined
        console.log('Please enter a UserName');
        return
        
    }
    return `${username} just logged in`
}
console.log(message());

//rest operator in function call

function calculate(...num){ //rest operator can take any number of numbers in it
    return num
}
console.log(calculate(10,20,30,40));

//calling object in function parameter

const user={
    name:"Anmol",
    age:12
}
function callingObject(anyobject){
    console.log(`Hello my name is ${anyobject.name} and i am ${anyobject.age} years old`);
}
//callingObject(user)
//giving our own value

callingObject({
    name:'Alok',
    age:23
})

