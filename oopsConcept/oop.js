const user={
    username:'Anmol',
    age:23,
    city:'Kanpur',
    message:function(){
        console.log(this); //this only works in internal/current context if we use this outside this object,{} return
        return (`Hello, ${this.username} Welcome to World!`);
        
        
    }
}
//console.log(user.username);
//console.log(user['age']);
//console.log(user.message())
//console.log(this); //not working outside the current context but it will change

//Suppose if have to create another object then there will rise the hustle of re writing values so, to resolve this
//constructor function come into play

function User(username,age,city) {
    this.username=username
    this.age=age
    this.city=city
    return this //implicitly return 
}


//const userOne=User('Anmol',23,'Kanpur')
//const userTwo=User('Alok',22,'Azamgarh') //this overrides the previous object because we have not used new keyword
//console.log(userOne);

//new return new object whenever a fucntion is called
const userOne=new User('Anmol',23,'Kanpur')
const userTwo=new User('Alok',22,'Azamgarh')
console.log(userOne);