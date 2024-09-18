//this and arrow function
//this used for accessing context/values defines in object scope only, cannot work with function scope

const user={
    username:"Anmol",
    age:23,
    message:function(){
        console.log(`${this.username}, Welcome to World`);
        console.log(this);
        
    }
}
user.message()
user.username="Alok"
user.message()


//arrow function

/* const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4)); */

const addTwo=(num1,num2)=> (num1+num2) //implicit return--no need to write return keyword
console.log(addTwo(3,4));
//{}--needs to have return keyword whereas () does not need to have return keyword

//returning object in arrow function
const addT=(num1,num2)=> ({username:"Anmol"})
console.log(addT(5,1));


