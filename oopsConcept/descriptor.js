const descriptor=Object.getOwnPropertyDescriptor(Math,'PI') //get all the values like writable, enumerable and configurable
//console.log(descriptor);


const user={
    name:'Anmol',
    age:23,
    city:'Kanpur',
    greetings:function(){
        console.log("Hello World!");
        
    }
}
console.log(user['name']);
console.log(Object.getOwnPropertyDescriptor(user,'name'));

//changing values
Object.defineProperty(user,'name',{
    writable:false,
    enumerable:false
})
console.log(Object.getOwnPropertyDescriptor(user,'name'));  //this will make object enumerable


for (let [key,value] of Object.entries(user)) { //how to iterate object
    if (typeof value !=='function') {
        console.log(`${key}: ${value}`);
        
    }
}



