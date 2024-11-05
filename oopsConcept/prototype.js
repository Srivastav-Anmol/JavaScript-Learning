let myHeros=['Thor','SpiderMan']
let heroPower={
    thor:'hammer',
    spiderman:'sling',
    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`);  
    }
}
Object.prototype.greetings=function(){ //here we are accessing top level i.e Object 
    console.log('Hello World');
}

Array.prototype.hello=function(){ //giving access only to array
    console.log("HELLO!");
    
}
heroPower.greetings()
myHeros.greetings()
myHeros.hello()
//heroPower.hello() this will not work because hello is a function available only in array


let anotherUserName='ChaiAurCode     '
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True Length is : ${this.trim().length}`);    
}
anotherUserName.trueLength()  //kisne call kiya wahi this hai.
'anmol Srivastava'.trueLength()